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
  const DEFAULT_SIGNER_ROLE =
    "Diretor da E.M. Etelvina Pereira Braga\nPortaria 1369/2024-SEMED/GS";

  const HEADER_IMAGE_PATH = "/assets/memorandos/memorando_logo_semed.png";
  const STAMP_IMAGE_PATH = "/assets/memorandos/memorando_carimbo_escola.png";

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
    $("finalText").value = cleanInstitutionText(doc.final_text || doc.ai_generated_text || "");
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
    data.final_text = cleanInstitutionText(data.final_text);

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
    const cleanedText = cleanInstitutionText(aiText);

    const payload = {
      ...data,
      school_id: state.school.id,
      ai_generated_text: cleanedText,
      final_text: cleanedText,
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

  async function loadImageAsset(path) {
    try {
      const res = await fetch(path);

      if (!res.ok) {
        console.warn(`Imagem não carregada: ${path}`);
        return null;
      }

      const blob = await res.blob();

      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      });

      const imageInfo = await new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
          resolve({
            width: img.naturalWidth || img.width,
            height: img.naturalHeight || img.height
          });
        };

        img.onerror = reject;
        img.src = dataUrl;
      });

      const format =
        blob.type.toLowerCase().includes("jpeg") || blob.type.toLowerCase().includes("jpg")
          ? "JPEG"
          : "PNG";

      return {
        dataUrl,
        width: imageInfo.width,
        height: imageInfo.height,
        format
      };
    } catch (error) {
      console.warn(`Erro ao carregar imagem: ${path}`, error);
      return null;
    }
  }

  function drawImageContain(pdf, asset, x, y, boxWidth, boxHeight) {
    if (!asset || !asset.width || !asset.height) return;

    const imageRatio = asset.width / asset.height;
    const boxRatio = boxWidth / boxHeight;

    let drawWidth = boxWidth;
    let drawHeight = boxHeight;

    if (imageRatio > boxRatio) {
      drawWidth = boxWidth;
      drawHeight = boxWidth / imageRatio;
    } else {
      drawHeight = boxHeight;
      drawWidth = boxHeight * imageRatio;
    }

    const drawX = x + (boxWidth - drawWidth) / 2;
    const drawY = y + (boxHeight - drawHeight) / 2;

    pdf.addImage(asset.dataUrl, asset.format, drawX, drawY, drawWidth, drawHeight);
  }

  function cleanInstitutionText(text) {
    let result = String(text || "").trim();

    result = result.replace(/O Instituto INTEGRO/gi, "A escola");
    result = result.replace(/O Instituto Integro/gi, "A escola");
    result = result.replace(/O Instituto Íntegro/gi, "A escola");
    result = result.replace(/o Instituto INTEGRO/gi, "a escola");
    result = result.replace(/o Instituto Integro/gi, "a escola");
    result = result.replace(/o Instituto Íntegro/gi, "a escola");

    result = result.replace(/Instituto INTEGRO/gi, SCHOOL_FULL_NAME);
    result = result.replace(/Instituto Integro/gi, SCHOOL_FULL_NAME);
    result = result.replace(/Instituto Íntegro/gi, SCHOOL_FULL_NAME);
    result = result.replace(/Portal INTEGRO/gi, "sistema institucional");
    result = result.replace(/INTEGRO/gi, SCHOOL_SHORT_NAME);

    result = result.replace(/[ \t]+/g, " ");
    result = result.replace(/\s+\./g, ".");
    result = result.replace(/\s+,/g, ",");

    return result.trim();
  }

  function normalizeMemoText(text) {
    let result = cleanInstitutionText(text);

    result = result.replace(/^Prezado\(a\).*?,\s*/i, "");
    result = result.replace(/^Prezado.*?,\s*/i, "");
    result = result.replace(/^Senhor\(a\).*?,\s*/i, "");
    result = result.replace(/Atenciosamente,?/gi, "");
    result = result.replace(/\(Assinado Digitalmente\)/gi, "");
    result = result.replace(/Sem mais para o momento, reiteramos votos de estima e consideração\.?/gi, "");

    return result.trim();
  }

  function splitParagraphs(text) {
    const normalized = normalizeMemoText(text);

    if (!normalized) return [];

    const byBlankLine = normalized
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    if (byBlankLine.length > 1) return byBlankLine;

    const byLine = normalized
      .split(/\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    if (byLine.length > 1) return byLine;

    return [normalized];
  }

  function getDocumentDateForPdf(doc) {
    const inputDate = $("documentDate")?.value;

    if (state.editingId === doc.id && inputDate) return inputDate;
    if (doc.issued_at) return String(doc.issued_at).slice(0, 10);
    if (doc.created_at) return String(doc.created_at).slice(0, 10);

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

  function drawJustifiedLine(pdf, line, x, y, maxWidth, isLastLine) {
    const cleanLine = String(line || "").trim();

    if (!cleanLine) return;

    const words = cleanLine.split(/\s+/);

    if (isLastLine || words.length <= 1) {
      pdf.text(cleanLine, x, y);
      return;
    }

    const lineWidth = pdf.getTextWidth(cleanLine);

    if (lineWidth < maxWidth * 0.72) {
      pdf.text(cleanLine, x, y);
      return;
    }

    const wordsWidth = words.reduce((sum, word) => sum + pdf.getTextWidth(word), 0);
    const spaces = words.length - 1;
    const spaceWidth = (maxWidth - wordsWidth) / spaces;

    if (spaceWidth > 6 || spaceWidth < 1) {
      pdf.text(cleanLine, x, y);
      return;
    }

    let currentX = x;

    words.forEach((word, index) => {
      pdf.text(word, currentX, y);
      currentX += pdf.getTextWidth(word);

      if (index < words.length - 1) {
        currentX += spaceWidth;
      }
    });
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

  function normalizeSignerRole(roleText) {
    let text = plain(roleText || "").replace(/\r/g, "").trim();

    text = text.replace(/\s*Portaria\s*/i, "\nPortaria ");
    text = text.replace(/\n{2,}/g, "\n");

    return text.trim();
  }

  function getSignatureRoleLines(pdf, roleText, maxWidth) {
    const normalized = normalizeSignerRole(roleText);

    return normalized
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean)
      .flatMap((part) => pdf.splitTextToSize(part, maxWidth));
  }

  function drawMemoHeaderAndProtocol(pdf, doc, headerAsset, stampAsset, docDate, isContinuation = false) {
    const left = 15;
    const top = 22;
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
    pdf.setLineWidth(0.25);

    if (headerAsset) {
      drawImageContain(
        pdf,
        headerAsset,
        left + 4,
        headerTop + 3,
        splitX - left - 8,
        25
      );
    } else {
      drawFallbackHeader(pdf, left + 4, headerTop + 4);
    }

    pdf.rect(splitX, headerTop, left + width - splitX, headerHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13.4);

    const memoTitle = isContinuation
      ? `MEMORANDO Nº ${doc.document_number}/${doc.document_year} - CONTINUAÇÃO`
      : `MEMORANDO Nº ${doc.document_number}/${doc.document_year}`;

    const memoTitleLines = pdf.splitTextToSize(memoTitle, left + width - splitX - 8);
    pdf.text(memoTitleLines, splitX + 3, headerTop + 10);

    pdf.rect(left, infoTop, width, infoHeight);
    pdf.line(splitX, infoTop, splitX, infoTop + infoHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11.3);

    pdf.text("DA:", left + 2, infoTop + 8);

    const originLines = pdf.splitTextToSize(
      plain(doc.origin_sector || SCHOOL_ORIGIN_NAME).toUpperCase(),
      splitX - left - 18
    );

    pdf.text(originLines, left + 13, infoTop + 8);

    pdf.text("PARA:", splitX + 3, infoTop + 10);

    const destinationLines = pdf.splitTextToSize(
      plain(doc.destination_name || DEFAULT_DESTINATION).toUpperCase(),
      left + width - splitX - 25
    );

    pdf.text(destinationLines, splitX + 21, infoTop + 10);

    pdf.rect(left, subjectTop, width, subjectHeight);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.8);
    pdf.text("ASSUNTO:", left + 2, subjectTop + 8.4);

    pdf.setFont("helvetica", "normal");
    pdf.text(
      plain(doc.memo_subject || ""),
      left + 23,
      subjectTop + 8.4,
      { maxWidth: width - 25 }
    );

    pdf.rect(left, bodyTop, width, bodyHeight);

    if (stampAsset && !isContinuation) {
      drawImageContain(pdf, stampAsset, left + width - 44, bodyTop + 16, 30, 30);
    }

    if (!isContinuation) {
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
      pdf.setFontSize(9.4);

      pdf.text("DATA", left + col1 / 2, protocolTop + 7.2, { align: "center" });
      pdf.text("ENVIADO POR", left + col1 + col2 / 2, protocolTop + 7.2, { align: "center" });
      pdf.text("RECEBIDO POR", left + col1 + col2 + col3 / 2, protocolTop + 7.2, { align: "center" });
      pdf.text("DATA", left + col1 + col2 + col3 + col4 / 2, protocolTop + 7.2, { align: "center" });

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8.5);
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
    }

    return {
      left,
      top,
      width,
      splitX,
      bodyTop,
      bodyHeight,
      protocolTop,
      protocolHeight
    };
  }

  function getTextLinesForPdf(pdf, doc, maxTextWidth, fontSize) {
    const paragraphs = splitParagraphs(doc.final_text || "");
    const result = [];

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(fontSize);

    paragraphs.forEach((paragraph) => {
      const lines = pdf.splitTextToSize(plain(paragraph), maxTextWidth);

      lines.forEach((line, index) => {
        result.push({
          text: line,
          isLastLine: index === lines.length - 1
        });
      });

      result.push({
        text: "",
        isLastLine: true
      });
    });

    while (result.length && !result[result.length - 1].text) {
      result.pop();
    }

    return result;
  }

  function hasRemainingText(lines, startIndex) {
    return lines.slice(startIndex).some((item) => String(item.text || "").trim());
  }

  function drawClosingAndSignature(pdf, doc, layout, afterY) {
    const textLeft = layout.left + 25;
    const maxTextWidth = layout.width - 50;

    const signatureRoleLines = getSignatureRoleLines(
      pdf,
      doc.signer_role || DEFAULT_SIGNER_ROLE,
      90
    );

    const signatureBlockHeight = 6 + 6 + (signatureRoleLines.length * 4.8);
    const protocolSafeY = layout.protocolTop - 8;

    const signatureY = protocolSafeY - signatureBlockHeight;
    const atenciosamenteY = signatureY - 15;
    const minClosingY = atenciosamenteY - 18;

    const closingText = "Sem mais para o momento, reiteramos votos de estima e consideração.";
    const closingLines = pdf.splitTextToSize(closingText, maxTextWidth);

    let closingY = Math.max(afterY + 10, minClosingY);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11.3);

    closingLines.forEach((line) => {
      pdf.text(line, textLeft, closingY);
      closingY += 6;
    });

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text("Atenciosamente,", layout.left + layout.width / 2, atenciosamenteY, { align: "center" });

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9.8);

    pdf.text("(Assinado Digitalmente)", layout.left + layout.width / 2, signatureY, { align: "center" });

    pdf.text(
      plain(doc.signer_name || DEFAULT_SIGNER_NAME),
      layout.left + layout.width / 2,
      signatureY + 5.2,
      { align: "center" }
    );

    let roleY = signatureY + 10;

    signatureRoleLines.forEach((line) => {
      pdf.text(line, layout.left + layout.width / 2, roleY, { align: "center" });
      roleY += 4.6;
    });
  }

  function drawMemoBody(pdf, doc, layout, headerAsset, docDate) {
    const textLeft = layout.left + 25;
    const maxTextWidth = layout.width - 50;

    const salutationY = layout.bodyTop + 23;
    const firstTextY = layout.bodyTop + 51;

    const fontSize = 11.8;
    const lineHeight = 6.8;

    const signatureRoleLines = getSignatureRoleLines(
      pdf,
      doc.signer_role || DEFAULT_SIGNER_ROLE,
      90
    );

    const signatureBlockHeight = 6 + 6 + (signatureRoleLines.length * 4.8);
    const protocolSafeY = layout.protocolTop - 8;

    const signatureY = protocolSafeY - signatureBlockHeight;
    const atenciosamenteY = signatureY - 15;
    const closingY = atenciosamenteY - 18;

    const maxTextYFirstPage = closingY - 8;

    const allLines = getTextLinesForPdf(pdf, doc, maxTextWidth, fontSize);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(13);
    pdf.text(getSalutation(doc), textLeft, salutationY);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(fontSize);

    let y = firstTextY;
    let index = 0;

    while (index < allLines.length) {
      const item = allLines[index];

      if (String(item.text || "").trim() && y > maxTextYFirstPage) {
        break;
      }

      if (item.text) {
        drawJustifiedLine(pdf, item.text, textLeft, y, maxTextWidth, item.isLastLine);
        y += lineHeight;
      } else {
        y += 3.8;
      }

      index++;
    }

    if (hasRemainingText(allLines, index)) {
      pdf.addPage();

      const continuationLayout = drawMemoHeaderAndProtocol(
        pdf,
        doc,
        headerAsset,
        null,
        docDate,
        true
      );

      let continuationY = continuationLayout.bodyTop + 18;
      const continuationMaxY = continuationLayout.bodyTop + continuationLayout.bodyHeight - 18;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSize);

      while (index < allLines.length) {
        const item = allLines[index];

        if (String(item.text || "").trim() && continuationY > continuationMaxY) {
          pdf.addPage();

          const nextLayout = drawMemoHeaderAndProtocol(
            pdf,
            doc,
            headerAsset,
            null,
            docDate,
            true
          );

          continuationY = nextLayout.bodyTop + 18;
        }

        if (item.text) {
          drawJustifiedLine(pdf, item.text, textLeft, continuationY, maxTextWidth, item.isLastLine);
          continuationY += lineHeight;
        } else {
          continuationY += 3.8;
        }

        index++;
      }

      return;
    }

    drawClosingAndSignature(pdf, doc, layout, y);
  }

  async function generatePDF(doc) {
    const jsPDFConstructor = window.jspdf?.jsPDF;

    if (!jsPDFConstructor) {
      throw new Error("Biblioteca jsPDF não carregada. Verifique o script no HTML.");
    }

    const headerAsset = await loadImageAsset(HEADER_IMAGE_PATH);
    const stampAsset = await loadImageAsset(STAMP_IMAGE_PATH);
    const docDate = getDocumentDateForPdf(doc);

    doc.final_text = cleanInstitutionText(doc.final_text || "");

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

    const layout = drawMemoHeaderAndProtocol(
      pdf,
      doc,
      headerAsset,
      stampAsset,
      docDate,
      false
    );

    drawMemoBody(pdf, doc, layout, headerAsset, docDate);

    const fileName = `memorando-${doc.document_number}-${doc.document_year}.pdf`;

    pdf.save(fileName);
  }

  function toggleCustomSubject() {
    $("subjectCustomWrap").hidden = $("subjectCategory").value !== "Outro";
  }

  function applySubjectSuggestion() {
    const category = $("subjectCategory").value;

    if (category !== "Outro" && !$("memoSubject").value.trim()) {
      $("memoSubject").value = category;
    }

    const lower = category.toLowerCase();

    if (lower.includes("cadeira")) {
      if (!$("equipmentText").value) $("equipmentText").value = "Cadeiras";
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos avaliação técnica e realização dos reparos necessários nas cadeiras indicadas.";
      }
    }

    if (lower.includes("ar-condicionado")) {
      if (!$("equipmentText").value) $("equipmentText").value = "Aparelho de ar-condicionado";
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos avaliação técnica e realização dos reparos necessários.";
      }
    }

    if (lower.includes("aquisição de ar-condicionado")) {
      if (!$("equipmentText").value) $("equipmentText").value = "Aparelho de ar-condicionado";
      if (!$("requestedAction").value) {
        $("requestedAction").value = "Solicitamos análise e aquisição de aparelho de ar-condicionado para atender à necessidade apresentada.";
      }
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
        if (doc) fillForm(doc);
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
