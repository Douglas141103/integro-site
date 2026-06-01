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
    Estrutura recomendada:
    integro-site/
    ├── assets/
    │   └── memorandos/
    │       └── memorando_cabecalho.png
    └── portal/
        ├── documentos-memorandos.html
        ├── documentos-memorandos.css
        └── documentos-memorandos.js

    Observação:
    Este novo gerador usa PDF direto.
    A imagem é usada somente para o logotipo SEMED/Manaus no cabeçalho.
    Se a imagem não carregar, o PDF ainda será gerado com texto no cabeçalho.
  */
  const HEADER_IMAGE_PATH = "/assets/memorandos/memorando_cabecalho.png";

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
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function plain(value) {
    return String(value ?? "")
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
  }

  function brDate(iso) {
    if (!iso) return "";
    const parts = String(iso).slice(0, 10).split("-");
    if (parts.length !== 3) return iso;
    const [y, m, d] = parts;
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
          <button class="btn ghost" type="button" data-download-doc="${safe(doc.id)}">Gerar PDF</button>
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

  function validateBeforePdf(data) {
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
      payload.generated_file_name = `memorando-${String(data.document_number).padStart(3, "0")}-${data.document_year}.pdf`;
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

    setStatus("Texto gerado com sucesso. Revise antes de gerar o PDF.", "ok");
  }

  async function tryImageToDataUrl(path) {
    try {
      const res = await fetch(path);

      if (!res.ok) {
        console.warn(`Imagem não carregada: ${path}`);
        return null;
      }

      const blob = await res.blob();

      return await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.warn(`Erro ao carregar imagem: ${path}`, error);
      return null;
    }
  }

  function normalizeMemoText(text) {
    let result = String(text || "").trim();

    result = result.replace(/^Prezado\(a\).*?,\s*/i, "");
    result = result.replace(/^Prezado.*?,\s*/i, "");
    result = result.replace(/^Senhor\(a\).*?,\s*/i, "");
    result = result.replace(/Atenciosamente,?/gi, "");
    result = result.replace(/\(Assinado Digitalmente\)/gi, "");

    return result.trim();
  }

  function splitParagraphs(text) {
    return normalizeMemoText(text)
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);
  }

  function getDocumentDateForPdf(doc) {
    const inputDate = $("documentDate")?.value;

    if (state.editingId === doc.id && inputDate) {
      return inputDate;
    }

    if (doc.issued_at) {
      return String(doc.issued_at).slice(0, 10);
    }

    if (doc.created_at) {
      return String(doc.created_at).slice(0, 10);
    }

    return inputDate || todayISO();
  }

  function getSalutation(doc) {
    const destinationSector = plain(doc.destination_sector || "").trim();
    const destinationName = plain(doc.destination_name || "").trim();

    if (destinationSector) {
      return `Prezado Chefe da ${destinationSector},`;
    }

    if (destinationName) {
      return `Prezado(a) ${destinationName},`;
    }

    return "Prezado(a) Chefe,";
  }

  function drawTextLines(pdf, lines, x, y, lineHeight) {
    lines.forEach((line) => {
      pdf.text(line, x, y);
      y += lineHeight;
    });

    return y;
  }

  function drawFallbackHeader(pdf) {
    pdf.setTextColor(0, 173, 173);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("Semed", 18, 38);

    pdf.setFontSize(7);
    pdf.text("Secretaria Municipal de", 19, 42);
    pdf.text("Educação", 19, 45);

    pdf.setFontSize(24);
    pdf.text("Manaus", 61, 38);

    pdf.setFontSize(8);
    pdf.text("Prefeitura de", 75, 29);
    pdf.setFontSize(11);
    pdf.text("Gente que trabalha", 74, 45);

    pdf.setTextColor(0, 0, 0);
  }

  function drawMemoPdfLayout(pdf, doc, headerImage, docDate) {
    const left = 14;
    const top = 24;
    const width = 182;

    const logoCellWidth = 96;
    const headerHeight = 28;
    const rowHeight = 14;
    const subjectHeight = 12;
    const bodyTop = top + headerHeight + rowHeight + subjectHeight;
    const protocolTop = 246;
    const protocolHeight = 22;

    pdf.setDrawColor(0, 0, 0);
    pdf.setTextColor(0, 0, 0);
    pdf.setLineWidth(0.25);

    /*
      Cabeçalho e tabela superior
    */
    pdf.rect(left, top, width, headerHeight);
    pdf.line(left + logoCellWidth, top, left + logoCellWidth, top + headerHeight);

    if (headerImage) {
      try {
        pdf.addImage(headerImage, "PNG", left + 4, top + 9, 86, 16);
      } catch (error) {
        console.warn("Falha ao inserir cabeçalho como imagem. Usando cabeçalho textual.", error);
        drawFallbackHeader(pdf);
      }
    } else {
      drawFallbackHeader(pdf);
    }

    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text(
      `MEMORANDO Nº ${String(doc.document_number).padStart(2, "0")}/${doc.document_year}`,
      left + logoCellWidth + 2,
      top + 9
    );

    pdf.rect(left, top + headerHeight, width, rowHeight);
    pdf.line(left + logoCellWidth, top + headerHeight, left + logoCellWidth, top + headerHeight + rowHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("DA:", left + 2, top + headerHeight + 8.5);

    pdf.setFont("helvetica", "bold");
    pdf.text(
      plain(doc.origin_sector || "").toUpperCase(),
      left + 11,
      top + headerHeight + 8.5,
      {
        maxWidth: logoCellWidth - 13
      }
    );

    pdf.setFont("helvetica", "bold");
    pdf.text("PARA:", left + logoCellWidth + 2, top + headerHeight + 8.5);

    pdf.text(
      plain(doc.destination_name || "").toUpperCase(),
      left + logoCellWidth + 17,
      top + headerHeight + 8.5,
      {
        maxWidth: width - logoCellWidth - 18
      }
    );

    pdf.rect(left, top + headerHeight + rowHeight, width, subjectHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("ASSUNTO:", left + 2, top + headerHeight + rowHeight + 7.7);

    pdf.setFont("helvetica", "normal");
    pdf.text(
      plain(doc.memo_subject || ""),
      left + 23,
      top + headerHeight + rowHeight + 7.7,
      {
        maxWidth: width - 25
      }
    );

    /*
      Caixa do corpo
    */
    pdf.rect(left, bodyTop, width, protocolTop - bodyTop);

    /*
      Simulação de carimbo institucional azul no canto direito
      Inspirado no modelo enviado, sem depender de imagem externa.
    */
    pdf.setDrawColor(42, 99, 190);
    pdf.setTextColor(42, 99, 190);
    pdf.setLineWidth(0.35);
    pdf.circle(left + width - 24, bodyTop + 25, 12);
    pdf.circle(left + width - 24, bodyTop + 25, 8.5);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(5.2);
    pdf.text("MUNICIPIO DE MANAUS", left + width - 35, bodyTop + 21);
    pdf.text("SECRETARIA DE EDUCACAO", left + width - 35, bodyTop + 31);

    pdf.setFontSize(4.8);
    pdf.text("ESCOLA MUNICIPAL", left + width - 32, bodyTop + 24);
    pdf.text("ETELVINA PEREIRA BRAGA", left + width - 35, bodyTop + 27);

    pdf.setDrawColor(0, 0, 0);
    pdf.setTextColor(0, 0, 0);
    pdf.setLineWidth(0.25);

    /*
      Protocolo inferior
    */
    pdf.rect(left, protocolTop, width, protocolHeight);

    const col1 = 39;
    const col2 = 51;
    const col3 = 49;
    const col4 = width - col1 - col2 - col3;

    pdf.line(left + col1, protocolTop, left + col1, protocolTop + protocolHeight);
    pdf.line(left + col1 + col2, protocolTop, left + col1 + col2, protocolTop + protocolHeight);
    pdf.line(left + col1 + col2 + col3, protocolTop, left + col1 + col2 + col3, protocolTop + protocolHeight);
    pdf.line(left, protocolTop + 11, left + width, protocolTop + 11);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.5);
    pdf.text("DATA", left + col1 / 2, protocolTop + 7, { align: "center" });
    pdf.text("ENVIADO POR", left + col1 + col2 / 2, protocolTop + 7, { align: "center" });
    pdf.text("RECEBIDO POR", left + col1 + col2 + col3 / 2, protocolTop + 7, { align: "center" });
    pdf.text("DATA", left + col1 + col2 + col3 + col4 / 2, protocolTop + 7, { align: "center" });

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9.5);
    pdf.text(brDate(docDate), left + col1 / 2, protocolTop + 18, { align: "center" });

    pdf.setFont("helvetica", "normal");
    pdf.text(
      plain(doc.origin_sector || "").toUpperCase(),
      left + col1 + col2 / 2,
      protocolTop + 18,
      {
        align: "center",
        maxWidth: col2 - 4
      }
    );

    return {
      left,
      top,
      width,
      bodyTop,
      protocolTop
    };
  }

  function drawMemoBody(pdf, doc, layout) {
    const bodyX = layout.left + 13;
    const textX = layout.left + 13;
    const maxTextWidth = layout.width - 26;

    const salutationY = layout.bodyTop + 17;
    let y = layout.bodyTop + 40;

    const maxBodyTextY = 195;

    let fontSize = 12;
    let lineHeight = 7;

    const paragraphs = splitParagraphs(doc.final_text || "");

    function calculateHeight(size, lh) {
      pdf.setFontSize(size);
      let total = 0;

      paragraphs.forEach((paragraph) => {
        const lines = pdf.splitTextToSize(plain(paragraph), maxTextWidth);
        total += lines.length * lh + 4;
      });

      return total;
    }

    let neededHeight = calculateHeight(fontSize, lineHeight);

    if (neededHeight > 78) {
      fontSize = 10.8;
      lineHeight = 6.1;
      neededHeight = calculateHeight(fontSize, lineHeight);
    }

    if (neededHeight > 88) {
      fontSize = 9.8;
      lineHeight = 5.5;
      neededHeight = calculateHeight(fontSize, lineHeight);
    }

    pdf.setTextColor(0, 0, 0);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(getSalutation(doc), bodyX, salutationY);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(fontSize);

    paragraphs.forEach((paragraph) => {
      const lines = pdf.splitTextToSize(plain(paragraph), maxTextWidth);

      lines.forEach((line) => {
        if (y < maxBodyTextY) {
          pdf.text(line, textX, y);
        }
        y += lineHeight;
      });

      y += 3.5;
    });

    const closingY = Math.min(Math.max(y + 22, 206), 214);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text("Atenciosamente,", layout.left + layout.width / 2, closingY, {
      align: "center"
    });

    const signatureY = closingY + 19;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("(Assinado Digitalmente)", layout.left + layout.width / 2, signatureY, {
      align: "center"
    });

    pdf.text(plain(doc.signer_name || "Responsável"), layout.left + layout.width / 2, signatureY + 6, {
      align: "center"
    });

    const roleLines = pdf.splitTextToSize(plain(doc.signer_role || "Direção Escolar"), 90);

    let roleY = signatureY + 12;

    roleLines.forEach((line) => {
      pdf.text(line, layout.left + layout.width / 2, roleY, {
        align: "center"
      });
      roleY += 5.5;
    });
  }

  async function generatePDF(doc) {
    const jsPDFConstructor = window.jspdf?.jsPDF;

    if (!jsPDFConstructor) {
      throw new Error("Biblioteca jsPDF não carregada. Verifique o script no HTML.");
    }

    const headerImage = await tryImageToDataUrl(HEADER_IMAGE_PATH);
    const docDate = getDocumentDateForPdf(doc);

    const pdf = new jsPDFConstructor({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true
    });

    pdf.setProperties({
      title: `Memorando ${String(doc.document_number).padStart(3, "0")}/${doc.document_year}`,
      subject: plain(doc.memo_subject || "Memorando"),
      author: plain(doc.origin_sector || "INTEGRO"),
      creator: "Portal INTEGRO"
    });

    const layout = drawMemoPdfLayout(pdf, doc, headerImage, docDate);
    drawMemoBody(pdf, doc, layout);

    const fileName = `memorando-${String(doc.document_number).padStart(3, "0")}-${doc.document_year}.pdf`;

    pdf.save(fileName);
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

    if (lower.includes("aquisição de ar-condicionado")) {
      if (!$("equipmentText").value) $("equipmentText").value = "Aparelho de ar-condicionado";
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos análise e aquisição de aparelho de ar-condicionado para atender à necessidade apresentada.";
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

    if (lower.includes("alteração de carga")) {
      if (!$("requestedAction").value) $("requestedAction").value = "Solicitamos análise e registro da alteração de carga horária informada.";
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = collectForm();
      validateBeforePdf(data);

      setStatus("Salvando memorando e gerando PDF...", "warn");

      const saved = await saveDocument("emitido");

      await generatePDF(saved);

      setStatus("Memorando salvo e PDF gerado com sucesso.", "ok");

      clearForm(false);
      await loadDocuments();
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Erro ao gerar memorando em PDF.", "error");
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
    $("originSector").value = "EMEF ETELVINA PEREIRA BRAGA";
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
            await generatePDF(doc);
          } catch (error) {
            console.error(error);
            setStatus(error.message || "Erro ao gerar PDF.", "error");
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

      $("originSector").value = "EMEF ETELVINA PEREIRA BRAGA";
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
