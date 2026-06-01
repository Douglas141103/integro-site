(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) {
    alert("Configuração do Supabase não encontrada.");
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  const state = {
    user: null,
    profile: null,
    school: null,
    documents: [],
    nextNumber: 1,
    editingId: null
  };

  /*
    Caminho correto das imagens do memorando.

    Estrutura esperada:
    integro-site/
    ├── assets/
    │   └── memorandos/
    │       ├── memorando_cabecalho.png
    │       └── memorando_rodape.png
    └── portal/
        ├── documentos-memorandos.html
        ├── documentos-memorandos.css
        └── documentos-memorandos.js
  */
  const HEADER_IMAGE_PATH = "/assets/memorandos/memorando_cabecalho.png";
  const FOOTER_IMAGE_PATH = "/assets/memorandos/memorando_rodape.png";

  function $(id) {
    return document.getElementById(id);
  }

  function todayISO() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  function currentYear() {
    return new Date().getFullYear();
  }

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function brDate(iso) {
    if (!iso) return "";
    const [y, m, d] = String(iso).slice(0, 10).split("-");
    if (!y || !m || !d) return iso;
    return `${d}/${m}/${y}`;
  }

  function setStatus(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return;

    if (!message) {
      box.hidden = true;
      box.textContent = "";
      box.className = "status";
      return;
    }

    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
  }

  async function loadContext() {
    const { data: authData, error: authError } = await client.auth.getUser();

    if (authError || !authData?.user) {
      throw new Error("Usuário não autenticado.");
    }

    state.user = authData.user;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError || !profile) {
      throw new Error("Perfil do usuário não encontrado.");
    }

    state.profile = profile;

    if (!["integro_admin", "diretor", "coordenacao"].includes(profile.role)) {
      throw new Error("Seu perfil não tem permissão para criar memorandos.");
    }

    const { data: school, error: schoolError } = await client
      .from("schools")
      .select("id, name, slug")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) {
      throw new Error("Escola ativa não encontrada.");
    }

    state.school = school;

    const userBadge = $("userBadge");
    if (userBadge) {
      userBadge.textContent = profile.full_name || profile.role || "Usuário";
    }
  }

  async function loadDocuments() {
    const year = Number($("documentYear")?.value || currentYear());

    const { data, error } = await client
      .from("institutional_documents")
      .select("*")
      .eq("school_id", state.school.id)
      .eq("document_type", "memorando")
      .eq("document_year", year)
      .order("document_number", { ascending: false });

    if (error) throw error;

    state.documents = data || [];

    const maxNumber = state.documents.reduce((max, item) => {
      return Math.max(max, Number(item.document_number || 0));
    }, 0);

    state.nextNumber = maxNumber + 1;

    if (!$("documentNumber").value) {
      $("documentNumber").value = state.nextNumber;
    }

    $("nextMemoNumber").textContent = `${String(state.nextNumber).padStart(3, "0")}/${year}`;

    renderDocuments();
  }

  function renderDocuments() {
    const list = $("documentsList");

    if (!list) return;

    if (!state.documents.length) {
      list.innerHTML = `
        <div class="record-item">
          <small>Nenhum memorando registrado neste ano.</small>
        </div>
      `;
      return;
    }

    list.innerHTML = state.documents.map((doc) => `
      <article class="record-item">
        <strong>Memorando nº ${String(doc.document_number).padStart(3, "0")}/${doc.document_year}</strong>
        <small>
          <b>Assunto:</b> ${safe(doc.memo_subject || doc.subject_category || "Sem assunto")}<br>
          <b>Para:</b> ${safe(doc.destination_name || "Não informado")}<br>
          <b>Status:</b> ${safe(doc.status || "rascunho")}
        </small>

        <div class="record-actions">
          <button class="btn ghost" type="button" data-load-doc="${safe(doc.id)}">Editar</button>
          <button class="btn ghost" type="button" data-download-doc="${safe(doc.id)}">Gerar Word</button>
        </div>
      </article>
    `).join("");
  }

  function collectForm() {
    const year = Number($("documentYear").value || currentYear());
    const number = Number($("documentNumber").value || state.nextNumber);

    return {
      document_type: "memorando",
      document_number: number,
      document_year: year,
      document_code: `MEMORANDO Nº ${String(number).padStart(3, "0")}/${year}`,

      origin_sector: $("originSector").value.trim(),
      destination_name: $("destinationName").value.trim(),
      destination_sector: $("destinationSector").value.trim(),

      subject_category: $("subjectCategory").value,
      subject_custom: $("subjectCustom").value.trim(),
      memo_subject: $("memoSubject").value.trim(),
      priority: $("priority").value,
      deadline_text: $("deadlineText").value.trim(),

      location_text: $("locationText").value.trim(),
      equipment_text: $("equipmentText").value.trim(),
      problem_description: $("problemDescription").value.trim(),
      requested_action: $("requestedAction").value.trim(),
      user_context: $("userContext").value.trim(),

      final_text: $("finalText").value.trim(),

      signer_name: $("signerName").value.trim(),
      signer_role: $("signerRole").value.trim()
    };
  }

  function fillForm(doc) {
    state.editingId = doc.id;

    $("documentNumber").value = doc.document_number || "";
    $("documentYear").value = doc.document_year || currentYear();
    $("originSector").value = doc.origin_sector || "";
    $("destinationName").value = doc.destination_name || "";
    $("destinationSector").value = doc.destination_sector || "";
    $("subjectCategory").value = doc.subject_category || "Outro";
    $("subjectCustom").value = doc.subject_custom || "";
    $("memoSubject").value = doc.memo_subject || "";
    $("priority").value = doc.priority || "normal";
    $("deadlineText").value = doc.deadline_text || "";
    $("locationText").value = doc.location_text || "";
    $("equipmentText").value = doc.equipment_text || "";
    $("problemDescription").value = doc.problem_description || "";
    $("requestedAction").value = doc.requested_action || "";
    $("userContext").value = doc.user_context || "";
    $("finalText").value = doc.final_text || doc.ai_generated_text || "";
    $("signerName").value = doc.signer_name || "";
    $("signerRole").value = doc.signer_role || "";

    toggleCustomSubject();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function validateBeforeWord(data) {
    if (!data.document_number) throw new Error("Informe o número do memorando.");
    if (!data.document_year) throw new Error("Informe o ano.");
    if (!data.origin_sector) throw new Error("Informe a origem.");
    if (!data.destination_name) throw new Error("Informe o destinatário.");
    if (!data.memo_subject) throw new Error("Informe o assunto formal.");
    if (!data.final_text) throw new Error("Gere ou escreva o texto final do memorando.");
    if (!data.signer_name) throw new Error("Informe o nome para assinatura.");
    if (!data.signer_role) throw new Error("Informe o cargo/setor para assinatura.");
  }

  async function saveDocument(status = "rascunho") {
    const data = collectForm();

    const payload = {
      ...data,
      school_id: state.school.id,
      status,
      updated_at: new Date().toISOString(),
      created_by: state.user.id
    };

    if (status === "emitido") {
      payload.issued_at = new Date().toISOString();
      payload.generated_file_name = `memorando-${String(data.document_number).padStart(3, "0")}-${data.document_year}.doc`;
    }

    let result;

    if (state.editingId) {
      result = await client
        .from("institutional_documents")
        .update(payload)
        .eq("id", state.editingId)
        .eq("school_id", state.school.id)
        .select("*")
        .single();
    } else {
      result = await client
        .from("institutional_documents")
        .insert(payload)
        .select("*")
        .single();
    }

    if (result.error) throw result.error;

    state.editingId = result.data.id;

    await loadDocuments();

    return result.data;
  }

  async function saveAiDraft(aiText) {
    const data = collectForm();

    const payload = {
      ...data,
      school_id: state.school.id,
      ai_generated_text: aiText,
      final_text: aiText,
      status: "gerado_pela_ia",
      updated_at: new Date().toISOString(),
      created_by: state.user.id
    };

    let result;

    if (state.editingId) {
      result = await client
        .from("institutional_documents")
        .update(payload)
        .eq("id", state.editingId)
        .eq("school_id", state.school.id)
        .select("*")
        .single();
    } else {
      result = await client
        .from("institutional_documents")
        .insert(payload)
        .select("*")
        .single();
    }

    if (result.error) throw result.error;

    state.editingId = result.data.id;

    await loadDocuments();
  }

  async function generateWithAI(mode = "gerar") {
    const data = collectForm();

    let extraTone = $("tone").value;

    if (mode === "melhorar") {
      extraTone = "melhore o texto já existente, mantendo tom institucional, clareza e objetividade";
      data.user_context += `\n\nTexto atual para melhorar:\n${$("finalText").value}`;
    }

    if (mode === "enxuto") {
      extraTone = "reescreva de forma mais objetiva, enxuta, institucional e clara";
      data.user_context += `\n\nTexto atual para reduzir:\n${$("finalText").value}`;
    }

    if (mode === "firme") {
      extraTone = "reescreva com tom mais firme, técnico, respeitoso e administrativo";
      data.user_context += `\n\nTexto atual para ajustar:\n${$("finalText").value}`;
    }

    setStatus("Gerando texto com IA...", "warn");

    const { data: sessionData } = await client.auth.getSession();
    const token = sessionData?.session?.access_token;

    if (!token) {
      throw new Error("Sessão não encontrada.");
    }

    const { data: response, error } = await client.functions.invoke("gerar-memorando-ia", {
      body: {
        subjectCategory: data.subject_category,
        subjectCustom: data.subject_custom,
        destinationName: data.destination_name,
        destinationSector: data.destination_sector,
        memoSubject: data.memo_subject,
        priority: data.priority,
        deadlineText: data.deadline_text,
        locationText: data.location_text,
        equipmentText: data.equipment_text,
        problemDescription: data.problem_description,
        requestedAction: data.requested_action,
        userContext: data.user_context,
        tone: extraTone
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (error) throw error;

    if (!response?.text) {
      throw new Error(response?.error || "A IA não retornou texto.");
    }

    $("finalText").value = response.text;

    await saveAiDraft(response.text);

    setStatus("Texto gerado com sucesso. Revise antes de gerar o Word.", "ok");
  }

  async function imageToDataUrl(path) {
    const res = await fetch(path);

    if (!res.ok) {
      throw new Error(`Não foi possível carregar a imagem: ${path}`);
    }

    const blob = await res.blob();

    return await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(blob);
    });
  }

  function nl2br(text) {
    const paragraphs = String(text || "")
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    if (!paragraphs.length) {
      return "";
    }

    return paragraphs
      .map((paragraph) => `<p>${safe(paragraph).replace(/\n/g, "<br>")}</p>`)
      .join("");
  }

  async function generateWord(doc) {
    const headerImage = await imageToDataUrl(HEADER_IMAGE_PATH);
    const footerImage = await imageToDataUrl(FOOTER_IMAGE_PATH);

    const docDate = $("documentDate").value || todayISO();

    const signerLine = doc.signer_role
      ? `${safe(doc.signer_role)}`
      : "Direção Escolar";

    const html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="UTF-8">
  <title>${safe(doc.document_code)}</title>

  <style>
    @page WordSection1 {
      size: 21cm 29.7cm;
      margin: 1.25cm 1.35cm 1.2cm 1.35cm;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: #111111;
      font-size: 11pt;
    }

    .WordSection1 {
      page: WordSection1;
      width: 18.3cm;
      margin: 0 auto;
    }

    .memo-wrapper {
      width: 18.3cm;
      margin: 0 auto;
    }

    .header-area {
      width: 18.3cm;
      height: 2.45cm;
      overflow: hidden;
      text-align: center;
      margin: 0 0 0.15cm 0;
    }

    .header-img {
      width: 16.2cm;
      height: auto;
      max-height: 2.25cm;
      display: block;
      margin: 0 auto;
      border: none;
    }

    .sector {
      width: 18.3cm;
      text-align: right;
      font-weight: bold;
      font-size: 10.5pt;
      margin: 0 0 0.12cm 0;
      line-height: 1.1;
    }

    table.memo-table {
      width: 18.3cm;
      border-collapse: collapse;
      table-layout: fixed;
      margin: 0;
    }

    .memo-table td {
      border: 1px solid #333333;
      padding: 0.16cm 0.18cm;
      vertical-align: middle;
      font-size: 10.5pt;
      height: 0.58cm;
    }

    .memo-table .label {
      font-weight: bold;
      letter-spacing: 0.3px;
    }

    .subject-row td {
      height: 0.72cm;
    }

    .body-box {
      width: 18.3cm;
      border-left: 1px solid #333333;
      border-right: 1px solid #333333;
      min-height: 12.3cm;
      padding: 0.95cm 0.28cm 0.7cm 0.28cm;
    }

    .salutation {
      margin-left: 2cm;
      margin-bottom: 1.05cm;
      font-size: 11pt;
    }

    .memo-text {
      font-size: 11pt;
      line-height: 1.35;
      text-align: justify;
      margin: 0;
      padding: 0;
    }

    .memo-text p {
      margin: 0 0 0.38cm 0;
      text-indent: 0;
    }

    .closing {
      margin-top: 1.15cm;
      margin-left: 2cm;
      font-size: 11pt;
    }

    .signature {
      margin-top: 1.35cm;
      text-align: center;
      font-size: 10.5pt;
      line-height: 1.25;
    }

    .signature strong {
      font-weight: bold;
    }

    .signature span {
      display: block;
      font-weight: normal;
    }

    .bottom-border {
      width: 18.3cm;
      border-left: 1px solid #333333;
      border-right: 1px solid #333333;
      border-bottom: 1px solid #333333;
      height: 0.01cm;
      line-height: 0;
      font-size: 0;
    }

    .footer-area {
      width: 18.3cm;
      margin-top: 1.15cm;
      text-align: center;
      overflow: hidden;
    }

    .footer-img {
      width: 18.1cm;
      height: auto;
      max-height: 1.25cm;
      display: block;
      margin: 0 auto;
      border: none;
    }
  </style>
</head>

<body>
  <div class="WordSection1">
    <div class="memo-wrapper">
      <div class="header-area">
        <img class="header-img" src="${headerImage}" />
      </div>

      <div class="sector">
        ${safe(doc.origin_sector || "CLIQUE AQUI E INSIRA O SEU SETOR")}
      </div>

      <table class="memo-table">
        <tr>
          <td style="width: 48%;">
            <span class="label">DATA:</span> ${safe(brDate(docDate))}
          </td>

          <td style="width: 52%;">
            <span class="label">MEMORANDO:</span> ${safe(String(doc.document_number).padStart(3, "0"))}/${safe(doc.document_year)}
          </td>
        </tr>

        <tr>
          <td>
            <span class="label">DE:</span> ${safe(doc.origin_sector || "")}
          </td>

          <td>
            <span class="label">PARA:</span> ${safe(doc.destination_name || "")}${doc.destination_sector ? " — " + safe(doc.destination_sector) : ""}
          </td>
        </tr>

        <tr class="subject-row">
          <td colspan="2">
            <span class="label">ASSUNTO:</span> ${safe(doc.memo_subject || "")}
          </td>
        </tr>
      </table>

      <div class="body-box">
        <div class="salutation">Senhor(a) Chefe,</div>

        <div class="memo-text">
          ${nl2br(doc.final_text || "")}
        </div>

        <div class="closing">Atenciosamente,</div>

        <div class="signature">
          <strong>${safe(doc.signer_name || "Chefe do setor")}</strong>
          <span>${signerLine}</span>
        </div>
      </div>

      <div class="bottom-border"></div>

      <div class="footer-area">
        <img class="footer-img" src="${footerImage}" />
      </div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob(["\ufeff", html], {
      type: "application/msword;charset=utf-8"
    });

    const fileName = `memorando-${String(doc.document_number).padStart(3, "0")}-${doc.document_year}.doc`;

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    a.remove();
    URL.revokeObjectURL(url);
  }

  function toggleCustomSubject() {
    const isOther = $("subjectCategory").value === "Outro";
    $("subjectCustomWrap").hidden = !isOther;
  }

  function applySubjectSuggestion() {
    const category = $("subjectCategory").value;

    if (category !== "Outro" && !$("memoSubject").value.trim()) {
      $("memoSubject").value = category;
    }

    const lower = category.toLowerCase();

    if (lower.includes("ar-condicionado")) {
      if (!$("equipmentText").value) $("equipmentText").value = "Aparelho de ar-condicionado";
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos avaliação técnica e realização dos reparos necessários.";
    }

    if (lower.includes("elétrica")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos vistoria técnica e correção da situação elétrica informada.";
    }

    if (lower.includes("hidráulica")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos vistoria e manutenção hidráulica no local indicado.";
    }

    if (lower.includes("material")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos o envio ou disponibilização dos materiais necessários.";
    }

    if (lower.includes("internet") || lower.includes("computadores") || lower.includes("impressora")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos suporte técnico para verificação e solução do problema informado.";
    }

    if (lower.includes("transporte")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos análise e adoção das providências necessárias quanto à demanda de transporte informada.";
    }

    if (lower.includes("segurança")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos apoio e providências relacionadas à segurança patrimonial.";
    }

    if (lower.includes("alimentação") || lower.includes("merenda")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos análise e providências quanto à situação relacionada à alimentação escolar.";
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = collectForm();
      validateBeforeWord(data);

      setStatus("Salvando memorando e gerando Word...", "warn");

      const saved = await saveDocument("emitido");

      await generateWord(saved);

      setStatus("Memorando salvo e Word gerado com sucesso.", "ok");

      clearForm(false);
      await loadDocuments();
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Erro ao gerar memorando.", "error");
    }
  }

  function clearForm(resetNumber = true) {
    state.editingId = null;

    $("memoForm").reset();

    $("documentDate").value = todayISO();
    $("documentYear").value = currentYear();

    if (resetNumber) {
      $("documentNumber").value = state.nextNumber;
    }

    $("priority").value = "normal";
    $("subjectCategory").value = "Manutenção de ar-condicionado";
    $("originSector").value = "Direção Escolar";
    $("signerName").value = state.profile?.full_name || "";
    $("signerRole").value = "Direção Escolar";

    toggleCustomSubject();
    applySubjectSuggestion();
  }

  async function logout() {
    await client.auth.signOut();
    window.location.href = "./login.html";
  }

  function bindEvents() {
    $("memoForm").addEventListener("submit", handleSubmit);

    $("generateAiBtn").addEventListener("click", () => {
      generateWithAI("gerar").catch((error) => {
        console.error(error);
        setStatus(error.message || "Erro ao gerar texto.", "error");
      });
    });

    $("improveBtn").addEventListener("click", () => {
      generateWithAI("melhorar").catch((error) => {
        console.error(error);
        setStatus(error.message || "Erro ao melhorar texto.", "error");
      });
    });

    $("shortenBtn").addEventListener("click", () => {
      generateWithAI("enxuto").catch((error) => {
        console.error(error);
        setStatus(error.message || "Erro ao deixar texto mais objetivo.", "error");
      });
    });

    $("firmBtn").addEventListener("click", () => {
      generateWithAI("firme").catch((error) => {
        console.error(error);
        setStatus(error.message || "Erro ao deixar texto mais firme.", "error");
      });
    });

    $("saveDraftBtn").addEventListener("click", async () => {
      try {
        await saveDocument("rascunho");
        setStatus("Rascunho salvo com sucesso.", "ok");
      } catch (error) {
        console.error(error);
        setStatus(error.message || "Erro ao salvar rascunho.", "error");
      }
    });

    $("clearBtn").addEventListener("click", () => {
      if (confirm("Deseja limpar o formulário?")) {
        clearForm();
      }
    });

    $("subjectCategory").addEventListener("change", () => {
      toggleCustomSubject();
      applySubjectSuggestion();
    });

    $("documentYear").addEventListener("change", () => {
      loadDocuments().catch((error) => {
        console.error(error);
        setStatus(error.message || "Erro ao carregar memorandos do ano.", "error");
      });
    });

    $("logoutBtn").addEventListener("click", logout);

    document.addEventListener("click", async (event) => {
      const loadBtn = event.target.closest("[data-load-doc]");

      if (loadBtn) {
        const doc = state.documents.find((item) => item.id === loadBtn.dataset.loadDoc);

        if (doc) {
          fillForm(doc);
        }

        return;
      }

      const downloadBtn = event.target.closest("[data-download-doc]");

      if (downloadBtn) {
        const doc = state.documents.find((item) => item.id === downloadBtn.dataset.downloadDoc);

        if (doc) {
          try {
            await generateWord(doc);
          } catch (error) {
            console.error(error);
            setStatus(error.message || "Erro ao gerar Word.", "error");
          }
        }
      }
    });
  }

  async function init() {
    try {
      setStatus("Carregando módulo de memorandos...", "warn");

      await loadContext();

      $("documentDate").value = todayISO();
      $("documentYear").value = currentYear();
      $("originSector").value = "Direção Escolar";
      $("signerName").value = state.profile?.full_name || "";
      $("signerRole").value = "Direção Escolar";

      bindEvents();
      toggleCustomSubject();
      applySubjectSuggestion();

      await loadDocuments();

      setStatus("Módulo de memorandos carregado.", "ok");
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Erro ao iniciar módulo de memorandos.", "error");
    }
  }

  window.addEventListener("DOMContentLoaded", init);
})();
