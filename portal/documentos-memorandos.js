(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) {
    alert("Configuração do Supabase não encontrada.");
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  const SCHOOL_FULL_NAME = "Escola Municipal Etelvina Pereira Braga";
  const SCHOOL_SHORT_NAME = "EMEF Etelvina Pereira Braga";
  const SCHOOL_ORIGIN_NAME = "EMEF ETELVINA PEREIRA BRAGA";
  const SCHOOL_PROTOCOL_NAME = "EMEF ETELVINA BRAGA";

  const DEFAULT_DESTINATION = "DDZ LESTE 1";
  const DEFAULT_DESTINATION_SECTOR = "Divisão Distrital Zona Leste I";

  const DEFAULT_SIGNER_NAME = "André Henrique Batista da Silva";
  const DEFAULT_SIGNER_ROLE = "Diretor da E.M. Etelvina Pereira Braga\nPortaria 1369/2024-SEMED/GS";

  const HEADER_IMAGE_PATH = "/assets/memorandos/memorando_cabecalho.png";

  const state = {
    user: null,
    profile: null,
    school: null,
    documents: [],
    nextNumber: 1,
    editingId: null
  };

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

    $("nextMemoNumber").textContent = `${state.nextNumber}/${year}`;

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
        <strong>Memorando nº ${doc.document_number}/${doc.document_year}</strong>
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
      document_code: `MEMORANDO Nº ${number}/${year}`,

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
      payload.generated_file_name = `memorando-${data.document_number}-${data.document_year}.pdf`;
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
        schoolName: SCHOOL_FULL_NAME,
        schoolShortName: SCHOOL_SHORT_NAME,
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

    const cleanedText = cleanInstitutionText(response.text);

    $("finalText").value = cleanedText;

    await saveAiDraft(cleanedText);

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

  function cleanInstitutionText(text) {
    let result = String(text || "").trim();

    result = result.replace(/Instituto INTEGRO/gi, SCHOOL_FULL_NAME);
    result = result.replace(/Instituto Integro/gi, SCHOOL_FULL_NAME);
    result = result.replace(/Instituto Íntegro/gi, SCHOOL_FULL_NAME);
    result = result.replace(/Instituto/gi, "escola");
    result = result.replace(/Portal INTEGRO/gi, "sistema institucional");
    result = result.replace(/O Integro/gi, "A escola");
    result = result.replace(/O INTEGRO/gi, "A escola");
    result = result.replace(/o Integro/gi, "a escola");
    result = result.replace(/o INTEGRO/gi, "a escola");

    return result.trim();
  }

  function normalizeMemoText(text) {
    let result = cleanInstitutionText(text);

    result = result.replace(/^Prezado\(a\).*?,\s*/i, "");
    result = result.replace(/^Prezado.*?,\s*/i, "");
    result = result.replace(/^Senhor\(a\).*?,\s*/i, "");
    result = result.replace(/Atenciosamente,?/gi, "");
    result = result.replace(/\(Assinado Digitalmente\)/gi, "");

    return result.trim();
  }

  function splitParagraphs(text) {
    const normalized = normalizeMemoText(text);

    if (!normalized) return [];

    const paragraphs = normalized
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    if (paragraphs.length <= 1) {
      return normalized
        .split(/\n/)
        .map((p) => p.trim())
        .filter(Boolean);
    }

    return paragraphs;
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

  function drawFallbackHeader(pdf, x, y) {
    pdf.setTextColor(0, 173, 173);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    pdf.text("Semed", x, y + 15);

    pdf.setFontSize(7.5);
    pdf.text("Secretaria Municipal", x + 2, y + 20);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(30);
    pdf.text("Manaus", x + 46, y + 15);

    pdf.setFontSize(9);
    pdf.text("Prefeitura de", x + 56, y + 4);

    pdf.setTextColor(0, 0, 0);
  }

  function drawSchoolStamp(pdf, centerX, centerY) {
    pdf.setDrawColor(48, 89, 190);
    pdf.setTextColor(48, 89, 190);
    pdf.setLineWidth(0.35);

    pdf.circle(centerX, centerY, 13.5);
    pdf.circle(centerX, centerY, 9.5);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(5.2);

    pdf.text("MUNICIPIO DE MANAUS", centerX, centerY - 8.3, {
      align: "center"
    });

    pdf.text("SECRETARIA DE EDUCACAO", centerX, centerY + 10.2, {
      align: "center"
    });

    pdf.setFontSize(4.8);

    pdf.text("ESCOLA MUNICIPAL", centerX, centerY - 3.8, {
      align: "center"
    });

    pdf.text("ETELVINA", centerX, centerY - 0.2, {
      align: "center"
    });

    pdf.text("PEREIRA BRAGA", centerX, centerY + 3.2, {
      align: "center"
    });

    pdf.text("A CRIACAO 29", centerX, centerY + 6.4, {
      align: "center"
    });

    pdf.setDrawColor(0, 0, 0);
    pdf.setTextColor(0, 0, 0);
  }

  function drawMemoPdfLayout(pdf, doc, headerImage, docDate) {
    const left = 15;
    const top = 23;
    const width = 180;

    const splitX = 105;
    const headerTop = top;
    const headerHeight = 31;

    const infoTop = headerTop + headerHeight;
    const infoHeight = 18;

    const subjectTop = infoTop + infoHeight;
    const subjectHeight = 13;

    const bodyTop = subjectTop + subjectHeight;
    const bodyHeight = 162;

    const protocolTop = bodyTop + bodyHeight;
    const protocolHeight = 24;

    pdf.setDrawColor(0, 0, 0);
    pdf.setTextColor(0, 0, 0);
    pdf.setLineWidth(0.28);

    /*
      Cabeçalho superior:
      lado esquerdo com logomarca SEMED/Manaus
      lado direito com MEMORANDO Nº
    */
    if (headerImage) {
      try {
        pdf.addImage(headerImage, "PNG", left + 4, headerTop + 5, 86, 22);
      } catch (error) {
        console.warn("Falha ao inserir cabeçalho. Usando texto.", error);
        drawFallbackHeader(pdf, left + 4, headerTop + 4);
      }
    } else {
      drawFallbackHeader(pdf, left + 4, headerTop + 4);
    }

    pdf.rect(splitX, headerTop, left + width - splitX, headerHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(15.5);

    pdf.text(
      `MEMORANDO Nº ${doc.document_number}/${doc.document_year}`,
      splitX + 3,
      headerTop + 11
    );

    /*
      Linha DA / PARA
    */
    pdf.rect(left, infoTop, width, infoHeight);
    pdf.line(splitX, infoTop, splitX, infoTop + infoHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);

    pdf.text("DA:", left + 2, infoTop + 11.5);

    pdf.text(
      plain(doc.origin_sector || SCHOOL_ORIGIN_NAME).toUpperCase(),
      left + 13,
      infoTop + 11.5,
      {
        maxWidth: splitX - left - 15
      }
    );

    pdf.text("PARA:", splitX + 3, infoTop + 11.5);

    pdf.text(
      plain(doc.destination_name || DEFAULT_DESTINATION).toUpperCase(),
      splitX + 21,
      infoTop + 11.5,
      {
        maxWidth: left + width - splitX - 24
      }
    );

    /*
      Linha ASSUNTO
    */
    pdf.rect(left, subjectTop, width, subjectHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12.5);
    pdf.text("ASSUNTO:", left + 2, subjectTop + 8.4);

    pdf.setFont("helvetica", "normal");
    pdf.text(
      plain(doc.memo_subject || ""),
      left + 25,
      subjectTop + 8.4,
      {
        maxWidth: width - 27
      }
    );

    /*
      Caixa do corpo
    */
    pdf.rect(left, bodyTop, width, bodyHeight);

    drawSchoolStamp(pdf, left + width - 31, bodyTop + 29);

    /*
      Protocolo inferior
    */
    pdf.rect(left, protocolTop, width, protocolHeight);

    const col1 = 37;
    const col2 = 49;
    const col3 = 48;
    const col4 = width - col1 - col2 - col3;

    pdf.line(left + col1, protocolTop, left + col1, protocolTop + protocolHeight);
    pdf.line(left + col1 + col2, protocolTop, left + col1 + col2, protocolTop + protocolHeight);
    pdf.line(left + col1 + col2 + col3, protocolTop, left + col1 + col2 + col3, protocolTop + protocolHeight);

    pdf.line(left, protocolTop + 11, left + width, protocolTop + 11);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.5);

    pdf.text("DATA", left + col1 / 2, protocolTop + 7.2, { align: "center" });
    pdf.text("ENVIADO POR", left + col1 + col2 / 2, protocolTop + 7.2, { align: "center" });
    pdf.text("RECEBIDO POR", left + col1 + col2 + col3 / 2, protocolTop + 7.2, { align: "center" });
    pdf.text("DATA", left + col1 + col2 + col3 + col4 / 2, protocolTop + 7.2, { align: "center" });

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9.2);

    pdf.text(brDate(docDate), left + col1 / 2, protocolTop + 18.7, { align: "center" });

    pdf.setFont("helvetica", "normal");

    pdf.text(
      SCHOOL_PROTOCOL_NAME,
      left + col1 + col2 / 2,
      protocolTop + 18.7,
      {
        align: "center",
        maxWidth: col2 - 4
      }
    );

    return {
      left,
      top,
      width,
      splitX,
      headerTop,
      headerHeight,
      infoTop,
      infoHeight,
      subjectTop,
      subjectHeight,
      bodyTop,
      bodyHeight,
      protocolTop,
      protocolHeight
    };
  }

  function drawMemoBody(pdf, doc, layout) {
    const textLeft = layout.left + 25;
    const maxTextWidth = layout.width - 50;

    const salutationY = layout.bodyTop + 23;
    let y = layout.bodyTop + 51;

    const maxTextY = layout.bodyTop + 104;

    let fontSize = 13.2;
    let lineHeight = 8;

    const paragraphs = splitParagraphs(doc.final_text || "");

    function estimateHeight(size, lh) {
      pdf.setFontSize(size);

      let total = 0;

      paragraphs.forEach((paragraph) => {
        const lines = pdf.splitTextToSize(plain(paragraph), maxTextWidth);
        total += lines.length * lh + 5;
      });

      return total;
    }

    let estimated = estimateHeight(fontSize, lineHeight);

    if (estimated > 70) {
      fontSize = 12;
      lineHeight = 7.1;
      estimated = estimateHeight(fontSize, lineHeight);
    }

    if (estimated > 84) {
      fontSize = 10.8;
      lineHeight = 6.3;
      estimated = estimateHeight(fontSize, lineHeight);
    }

    if (estimated > 98) {
      fontSize = 9.8;
      lineHeight = 5.6;
    }

    /*
      Saudação
    */
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14.5);

    pdf.text(getSalutation(doc), textLeft, salutationY);

    /*
      Corpo
    */
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(fontSize);

    paragraphs.forEach((paragraph) => {
      const lines = pdf.splitTextToSize(plain(paragraph), maxTextWidth);

      lines.forEach((line) => {
        if (y <= maxTextY) {
          pdf.text(line, textLeft, y);
        }

        y += lineHeight;
      });

      y += 5;
    });

    /*
      Fechamento fixo do modelo
    */
    const closingText =
      "Sem mais para o momento, reiteramos votos de estima e consideração.";

    const closingLines = pdf.splitTextToSize(closingText, maxTextWidth);

    let closingY = Math.max(y + 8, layout.bodyTop + 112);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12.5);

    closingLines.forEach((line) => {
      pdf.text(line, textLeft, closingY);
      closingY += 7;
    });

    /*
      Atenciosamente
    */
    const atenciosamenteY = layout.bodyTop + 137;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);

    pdf.text("Atenciosamente,", layout.left + layout.width / 2, atenciosamenteY, {
      align: "center"
    });

    /*
      Assinatura
    */
    const signatureY = atenciosamenteY + 18;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);

    pdf.text("(Assinado Digitalmente)", layout.left + layout.width / 2, signatureY, {
      align: "center"
    });

    pdf.text(
      plain(doc.signer_name || DEFAULT_SIGNER_NAME),
      layout.left + layout.width / 2,
      signatureY + 6,
      {
        align: "center"
      }
    );

    const roleLines = pdf.splitTextToSize(
      plain(doc.signer_role || DEFAULT_SIGNER_ROLE),
      90
    );

    let roleY = signatureY + 12;

    roleLines.forEach((line) => {
      pdf.text(line, layout.left + layout.width / 2, roleY, {
        align: "center"
      });

      roleY += 5.4;
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
      title: `Memorando ${doc.document_number}/${doc.document_year}`,
      subject: plain(doc.memo_subject || "Memorando"),
      author: SCHOOL_FULL_NAME,
      creator: "Sistema de Memorandos da Escola Municipal Etelvina Pereira Braga"
    });

    const layout = drawMemoPdfLayout(pdf, doc, headerImage, docDate);

    drawMemoBody(pdf, doc, layout);

    const fileName = `memorando-${doc.document_number}-${doc.document_year}.pdf`;

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
      if (!$("equipmentText").value) {
        $("equipmentText").value = "Aparelho de ar-condicionado";
      }

      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos avaliação técnica e realização dos reparos necessários.";
      }
    }

    if (lower.includes("aquisição de ar-condicionado")) {
      if (!$("equipmentText").value) {
        $("equipmentText").value = "Aparelho de ar-condicionado";
      }

      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos análise e aquisição de aparelho de ar-condicionado para atender à necessidade apresentada.";
      }
    }

    if (lower.includes("elétrica")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos vistoria técnica e correção da situação elétrica informada.";
      }
    }

    if (lower.includes("hidráulica")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos vistoria e manutenção hidráulica no local indicado.";
      }
    }

    if (lower.includes("material")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos o envio ou disponibilização dos materiais necessários.";
      }
    }

    if (lower.includes("internet") || lower.includes("computadores") || lower.includes("impressora")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos suporte técnico para verificação e solução do problema informado.";
      }
    }

    if (lower.includes("transporte")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos análise e adoção das providências necessárias quanto à demanda de transporte informada.";
      }
    }

    if (lower.includes("segurança")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos apoio e providências relacionadas à segurança patrimonial.";
      }
    }

    if (lower.includes("alimentação") || lower.includes("merenda")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos análise e providências quanto à situação relacionada à alimentação escolar.";
      }
    }

    if (lower.includes("alteração de carga")) {
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos análise e registro da alteração de carga horária informada.";
      }
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

    $("originSector").value = SCHOOL_ORIGIN_NAME;
    $("destinationName").value = DEFAULT_DESTINATION;
    $("destinationSector").value = DEFAULT_DESTINATION_SECTOR;

    $("signerName").value = DEFAULT_SIGNER_NAME;
    $("signerRole").value = DEFAULT_SIGNER_ROLE;

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

      $("originSector").value = SCHOOL_ORIGIN_NAME;
      $("destinationName").value = DEFAULT_DESTINATION;
      $("destinationSector").value = DEFAULT_DESTINATION_SECTOR;

      $("signerName").value = DEFAULT_SIGNER_NAME;
      $("signerRole").value = DEFAULT_SIGNER_ROLE;

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
