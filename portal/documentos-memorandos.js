(() => {
  "use strict";

  const LOGO_SRC = "../assets/memorandos/memorando_logo_semed_versao_melhor.png";
  const STAMP_SRC = "../assets/memorandos/memorando_carimbo_escola.png";

  const AI_FUNCTION_NAME = "gerar-memorando-ia";

  const DEFAULT_ORIGIN = "EMEF ETELVINA PEREIRA BRAGA";
  const DEFAULT_DESTINATION = "DDZ LESTE 1";
  const DEFAULT_SIGNATURE = {
    line1: "(Assinado Digitalmente)",
    line2: "André Henrique Batista da Silva",
    line3: "Diretor da E.M. Etelvina Pereira Braga",
    line4: "Portaria 1369/2024-SEMED/GS"
  };

  const STANDARD_OPENING = "Ao cumprimentá-los cordialmente, venho, por meio deste, solicitar ";
  const STANDARD_CLOSING = "Sem mais para o momento, reiteramos votos de estima e consideração.";

  const state = {
    client: null,
    user: null,
    profile: null,
    school: null,
    documents: [],
    editingId: null,
    imageCache: new Map()
  };

  const refs = {};

  const selectors = {
    userBadge: ["userBadge"],
    logoutBtn: ["logoutBtn"],

    form: ["memoForm", "documentForm"],

    statusBox: ["pageStatus", "formStatus", "statusMessage"],

    documentNumber: ["documentNumber", "memoNumber"],
    documentYear: ["documentYear", "memoYear"],
    issueDate: ["documentDate", "issueDate", "memoDate"],
    priority: ["documentPriority", "priority"],

    originName: ["documentOrigin", "originName"],
    destinationName: ["documentDestinationName", "destinationName"],
    destinationSector: ["destinationSector", "documentDestinationSector"],

    subjectPreset: ["subjectPreset", "documentSubjectPreset"],
    memoSubject: ["memoSubject", "documentSubject"],

    relatedLocation: ["relatedLocation", "documentLocation"],
    equipmentMaterial: ["equipmentMaterial", "documentEquipment"],
    requestedAction: ["requestedAction", "documentRequestedAction"],
    deadlineInfo: ["deadlineInfo", "documentDeadline"],
    responsibleArea: ["responsibleArea", "documentResponsibleArea"],
    referenceNotes: ["referenceNotes", "documentReferenceNotes"],
    memoBody: ["memoBody", "documentBody", "generatedText"],

    documentStatus: ["documentStatus", "statusField"],

    generateAiBtn: ["generateAiBtn", "generateWithAiBtn"],
    saveDraftBtn: ["saveDraftBtn", "saveBtn"],
    downloadPdfBtn: ["downloadPdfBtn", "generatePdfBtn"],
    clearBtn: ["clearMemoBtn", "clearFormBtn"],

    documentsList: ["documentsList", "historyList"],
    nextDocumentNumber: ["nextDocumentNumber", "nextMemoNumber"],
    schoolNameCard: ["schoolNameCard"]
  };

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    bindRefs();

    state.client = resolveSupabaseClient();

    if (!state.client) {
      setStatus("Cliente Supabase não encontrado. Verifique o config.js / app.js.", "error");
      return;
    }

    bindEvents();

    try {
      await loadSession();
      applyInitialDefaults();
      await loadDocuments();
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Erro ao carregar a página de memorandos.", "error");
    }
  }

  function bindRefs() {
    Object.entries(selectors).forEach(([key, ids]) => {
      refs[key] = pickEl(ids);
    });
  }

  function pickEl(ids) {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) return el;
    }
    return null;
  }

  function resolveSupabaseClient() {
    if (window.supabaseClient) return window.supabaseClient;

    const supabaseFactory = window.supabase?.createClient;
    const url =
      window.SUPABASE_URL ||
      window.supabaseUrl ||
      window.APP_CONFIG?.supabaseUrl ||
      window.appConfig?.supabaseUrl ||
      window.CONFIG?.supabaseUrl;

    const key =
      window.SUPABASE_ANON_KEY ||
      window.supabaseAnonKey ||
      window.APP_CONFIG?.supabaseAnonKey ||
      window.appConfig?.supabaseAnonKey ||
      window.CONFIG?.supabaseAnonKey;

    if (supabaseFactory && url && key) {
      window.supabaseClient = supabaseFactory(url, key);
      return window.supabaseClient;
    }

    return null;
  }

  async function loadSession() {
    const { data, error } = await state.client.auth.getUser();
    if (error) throw error;
    if (!data?.user) throw new Error("Usuário não autenticado.");

    state.user = data.user;

    if (refs.userBadge) {
      refs.userBadge.textContent = state.user.email || "Usuário";
    }

    const { data: profile, error: profileError } = await state.client
      .from("profiles")
      .select("*")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError) throw profileError;

    state.profile = profile || null;

    if (!state.profile) {
      throw new Error("Perfil do usuário não encontrado.");
    }

    if (refs.userBadge) {
      refs.userBadge.textContent = state.profile.full_name || state.user.email || "Usuário";
    }

    if (state.profile.school_id) {
      const { data: school, error: schoolError } = await state.client
        .from("schools")
        .select("*")
        .eq("id", state.profile.school_id)
        .maybeSingle();

      if (schoolError) throw schoolError;
      state.school = school || null;
    }

    if (refs.schoolNameCard) {
      refs.schoolNameCard.textContent =
        state.school?.name ||
        state.profile?.school_name ||
        "Escola ativa";
    }
  }

  function applyInitialDefaults() {
    const now = new Date();

    if (refs.documentYear && !refs.documentYear.value) {
      refs.documentYear.value = String(now.getFullYear());
    }

    if (refs.issueDate && !refs.issueDate.value) {
      refs.issueDate.value = toInputDate(now);
    }

    if (refs.originName && !refs.originName.value) {
      refs.originName.value = DEFAULT_ORIGIN;
    }

    if (refs.destinationName && !refs.destinationName.value) {
      refs.destinationName.value = DEFAULT_DESTINATION;
    }

    if (refs.documentStatus && !refs.documentStatus.value) {
      refs.documentStatus.value = "rascunho";
    }
  }

  async function loadDocuments() {
    if (!state.school?.id) {
      state.documents = [];
      renderDocuments();
      return;
    }

    const { data, error } = await state.client
      .from("institutional_documents")
      .select("*")
      .eq("school_id", state.school.id)
      .eq("document_type", "memorando")
      .order("document_year", { ascending: false })
      .order("document_number", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) throw error;

    state.documents = Array.isArray(data) ? data : [];

    renderDocuments();
    updateNextDocumentNumber();
  }

  function updateNextDocumentNumber() {
    const year = parseInt(refs.documentYear?.value || String(new Date().getFullYear()), 10);
    const currentYearDocs = state.documents.filter((doc) => Number(doc.document_year) === year);

    const maxNumber = currentYearDocs.reduce((acc, doc) => {
      const n = Number(doc.document_number || 0);
      return n > acc ? n : acc;
    }, 0);

    const next = maxNumber + 1;

    if (!state.editingId && refs.documentNumber) {
      refs.documentNumber.value = String(next);
    }

    if (refs.nextDocumentNumber) {
      refs.nextDocumentNumber.textContent = `${String(next).padStart(3, "0")}/${year}`;
    }
  }

  function collectFormValues() {
    const values = {
      document_number: (refs.documentNumber?.value || "").trim(),
      document_year: (refs.documentYear?.value || "").trim(),
      issue_date: refs.issueDate?.value || "",
      priority: refs.priority?.value || "Normal",

      origin_name: (refs.originName?.value || DEFAULT_ORIGIN).trim(),
      destination_name: (refs.destinationName?.value || DEFAULT_DESTINATION).trim(),
      destination_sector: (refs.destinationSector?.value || "").trim(),

      subject_category: refs.subjectPreset?.value || "",
      memo_subject: (refs.memoSubject?.value || "").trim(),

      related_location: (refs.relatedLocation?.value || "").trim(),
      equipment_material: (refs.equipmentMaterial?.value || "").trim(),
      requested_action: (refs.requestedAction?.value || "").trim(),
      deadline_info: (refs.deadlineInfo?.value || "").trim(),
      responsible_area: (refs.responsibleArea?.value || "").trim(),
      reference_notes: (refs.referenceNotes?.value || "").trim(),

      body_text: normalizeMemoText(refs.memoBody?.value || ""),
      status: refs.documentStatus?.value || "rascunho"
    };

    if (!values.body_text) {
      values.body_text = normalizeMemoText(buildPresetBody(values));
      if (refs.memoBody) refs.memoBody.value = values.body_text;
    }

    return values;
  }

  function fillForm(doc) {
    state.editingId = doc.id;

    if (refs.documentNumber) refs.documentNumber.value = doc.document_number || "";
    if (refs.documentYear) refs.documentYear.value = doc.document_year || "";
    if (refs.issueDate) refs.issueDate.value = doc.issue_date || "";
    if (refs.priority) refs.priority.value = doc.priority || "Normal";

    if (refs.originName) refs.originName.value = doc.origin_name || DEFAULT_ORIGIN;
    if (refs.destinationName) refs.destinationName.value = doc.destination_name || DEFAULT_DESTINATION;
    if (refs.destinationSector) refs.destinationSector.value = doc.destination_sector || "";

    if (refs.subjectPreset) refs.subjectPreset.value = doc.subject_category || "";
    if (refs.memoSubject) refs.memoSubject.value = doc.memo_subject || "";

    if (refs.relatedLocation) refs.relatedLocation.value = doc.related_location || "";
    if (refs.equipmentMaterial) refs.equipmentMaterial.value = doc.equipment_material || "";
    if (refs.requestedAction) refs.requestedAction.value = doc.requested_action || "";
    if (refs.deadlineInfo) refs.deadlineInfo.value = doc.deadline_info || "";
    if (refs.responsibleArea) refs.responsibleArea.value = doc.responsible_area || "";
    if (refs.referenceNotes) refs.referenceNotes.value = doc.reference_notes || "";
    if (refs.memoBody) refs.memoBody.value = doc.body_text || "";

    if (refs.documentStatus) refs.documentStatus.value = doc.status || "rascunho";

    setStatus(`Memorando nº ${doc.document_number}/${doc.document_year} carregado para edição.`, "warn");
  }

  function clearForm(showMessage = true) {
    state.editingId = null;

    if (refs.form) refs.form.reset();

    applyInitialDefaults();
    updateNextDocumentNumber();

    if (showMessage) {
      setStatus("Formulário limpo.", "ok");
    }
  }

  function buildPresetBody(values) {
    const subject = (values.memo_subject || "").toLowerCase();
    const place = values.related_location ? ` na ${values.related_location}` : "";
    const equipment = values.equipment_material || "material solicitado";
    const deadline = values.deadline_info
      ? ` Solicita-se, portanto, o atendimento desta demanda ${values.deadline_info}.`
      : " Solicita-se, portanto, o atendimento desta demanda com a brevidade possível.";

    if (subject.includes("ar-condicionado")) {
      return (
        STANDARD_OPENING +
        `a avaliação técnica do aparelho de ar-condicionado instalado${place} desta Unidade de Ensino, bem como a realização dos reparos necessários para seu pleno funcionamento. A intervenção visa garantir as condições adequadas de uso do equipamento, contribuindo para o conforto e o bom desempenho das atividades desenvolvidas nesta Unidade de Ensino.` +
        deadline
      );
    }

    if (subject.includes("cadeira")) {
      return (
        STANDARD_OPENING +
        `a avaliação e a realização dos reparos necessários nas cadeiras${place || " da secretaria"} desta Unidade de Ensino, a fim de garantir condições adequadas de uso do mobiliário escolar.` +
        deadline
      );
    }

    if (subject.includes("transporte")) {
      return (
        STANDARD_OPENING +
        `o atendimento da demanda relacionada a transporte institucional, necessária para o pleno desenvolvimento das atividades desta Unidade de Ensino.` +
        deadline
      );
    }

    if (subject.includes("material")) {
      return (
        STANDARD_OPENING +
        `a disponibilização de ${equipment}, necessários ao adequado funcionamento das atividades administrativas e pedagógicas desta Unidade de Ensino.` +
        deadline
      );
    }

    return (
      STANDARD_OPENING +
      `o atendimento da demanda referente a "${values.memo_subject || values.subject_category || "assunto informado"}", necessária ao adequado funcionamento desta Unidade de Ensino.` +
      deadline
    );
  }

  function normalizeMemoText(input) {
    let text = String(input || "").replace(/\r/g, "").trim();

    if (!text) return "";

    text = text.replace(/^Prezad[oa].*?\n+/i, "").trim();
    text = text.replace(/Sem mais para o momento[\s\S]*$/i, "").trim();

    if (!/^Ao cumprimentá-los cordialmente/i.test(text)) {
      const clean = text.charAt(0).toLowerCase() + text.slice(1);
      text = STANDARD_OPENING + clean;
    }

    return text;
  }

  function buildPayload(values) {
    return {
      school_id: state.school?.id || null,
      created_by: state.user?.id || null,

      document_type: "memorando",
      document_number: Number(values.document_number || 0),
      document_year: String(values.document_year || new Date().getFullYear()),
      issue_date: values.issue_date || toInputDate(new Date()),
      priority: values.priority || "Normal",

      origin_name: values.origin_name,
      destination_name: values.destination_name,
      destination_sector: values.destination_sector,

      subject_category: values.subject_category,
      memo_subject: values.memo_subject,

      related_location: values.related_location,
      equipment_material: values.equipment_material,
      requested_action: values.requested_action,
      deadline_info: values.deadline_info,
      responsible_area: values.responsible_area,
      reference_notes: values.reference_notes,

      body_text: values.body_text,
      status: values.status || "rascunho"
    };
  }

  async function saveCurrentDocument(statusOverride = null) {
    if (!state.school?.id) {
      throw new Error("Escola ativa não encontrada para salvar o memorando.");
    }

    const values = collectFormValues();

    if (!values.document_number) throw new Error("Informe o número do memorando.");
    if (!values.document_year) throw new Error("Informe o ano do memorando.");
    if (!values.issue_date) throw new Error("Informe a data do memorando.");
    if (!values.memo_subject) throw new Error("Informe o assunto formal do memorando.");
    if (!values.destination_name) throw new Error("Informe o destinatário do memorando.");
    if (!values.body_text) throw new Error("Preencha ou gere o corpo do memorando.");

    if (statusOverride) {
      values.status = statusOverride;
      if (refs.documentStatus) refs.documentStatus.value = statusOverride;
    }

    const payload = buildPayload(values);

    setStatus("Salvando memorando...", "warn");

    let response;

    if (state.editingId) {
      response = await state.client
        .from("institutional_documents")
        .update(payload)
        .eq("id", state.editingId)
        .eq("school_id", state.school.id)
        .select("*")
        .single();
    } else {
      response = await state.client
        .from("institutional_documents")
        .insert(payload)
        .select("*")
        .single();
    }

    if (response.error) throw response.error;

    if (response.data?.id) {
      state.editingId = response.data.id;
    }

    await loadDocuments();
    setStatus("Memorando salvo com sucesso.", "ok");
  }

  async function deleteDocumentFromHistory(documentId) {
    if (!documentId) {
      throw new Error("Memorando não identificado.");
    }

    const doc = state.documents.find((item) => item.id === documentId);

    const ok = confirm(
      `Deseja realmente excluir o memorando nº ${doc?.document_number || "?"}/${doc?.document_year || "?"}?\n\nEssa ação não poderá ser desfeita.`
    );

    if (!ok) return;

    setStatus("Excluindo memorando...", "warn");

    const { error } = await state.client
      .from("institutional_documents")
      .delete()
      .eq("id", documentId)
      .eq("school_id", state.school.id)
      .eq("document_type", "memorando");

    if (error) throw error;

    if (state.editingId === documentId) {
      clearForm(false);
    }

    await loadDocuments();
    setStatus("Memorando excluído com sucesso.", "ok");
  }

  async function generateBodyWithAI() {
    const values = collectFormValues();

    const payload = {
      numero: values.document_number,
      ano: values.document_year,
      data: values.issue_date,
      prioridade: values.priority,
      origem: values.origin_name,
      destino: values.destination_name,
      setor_destinatario: values.destination_sector,
      assunto_pre_pronto: values.subject_category,
      assunto_formal: values.memo_subject,
      local_relacionado: values.related_location,
      equipamento_material: values.equipment_material,
      acao_solicitada: values.requested_action,
      prazo: values.deadline_info,
      observacoes: values.reference_notes
    };

    setStatus("Gerando minuta com IA...", "warn");

    const { data, error } = await state.client.functions.invoke(AI_FUNCTION_NAME, {
      body: payload
    });

    if (error) throw error;

    const generated =
      data?.memoBody ||
      data?.body ||
      data?.content ||
      data?.text ||
      data?.memorando ||
      "";

    if (!generated) {
      throw new Error("A IA não retornou texto para o memorando.");
    }

    const normalized = normalizeMemoText(generated);

    if (refs.memoBody) {
      refs.memoBody.value = normalized;
    }

    setStatus("Minuta gerada com IA. Revise o texto antes de gerar o PDF.", "ok");
  }

  function renderDocuments() {
    if (!refs.documentsList) return;

    if (!state.documents.length) {
      refs.documentsList.innerHTML = `
        <div class="record-item">
          <small>Nenhum memorando registrado neste ano.</small>
        </div>
      `;
      return;
    }

    refs.documentsList.innerHTML = state.documents.map((doc) => `
      <article class="record-item">
        <strong>Memorando nº ${safe(doc.document_number)}/${safe(doc.document_year)}</strong>
        <small>
          <b>Assunto:</b> ${safe(doc.memo_subject || doc.subject_category || "Sem assunto")}<br>
          <b>Para:</b> ${safe(doc.destination_name || "Não informado")}<br>
          <b>Status:</b> ${safe(doc.status || "rascunho")}
        </small>

        <div class="record-actions" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
          <button class="btn ghost" type="button" data-load-doc="${safe(doc.id)}">Editar</button>
          <button class="btn ghost" type="button" data-download-doc="${safe(doc.id)}">Gerar PDF</button>
          <button class="btn danger" type="button" data-delete-doc="${safe(doc.id)}">Excluir</button>
        </div>
      </article>
    `).join("");
  }

  function bindEvents() {
    refs.logoutBtn?.addEventListener("click", async () => {
      try {
        await state.client.auth.signOut();
        window.location.href = "../index.html";
      } catch (error) {
        console.error(error);
        setStatus("Não foi possível sair do sistema.", "error");
      }
    });

    refs.subjectPreset?.addEventListener("change", () => {
      if (!refs.memoSubject?.value.trim()) {
        refs.memoSubject.value = refs.subjectPreset.value || "";
      }
    });

    refs.generateAiBtn?.addEventListener("click", async () => {
      try {
        await generateBodyWithAI();
      } catch (error) {
        console.error(error);
        setStatus(error.message || "Erro ao gerar texto com IA.", "error");
      }
    });

    refs.saveDraftBtn?.addEventListener("click", async () => {
      try {
        await saveCurrentDocument("rascunho");
      } catch (error) {
        console.error(error);
        setStatus(error.message || "Erro ao salvar memorando.", "error");
      }
    });

    refs.downloadPdfBtn?.addEventListener("click", async () => {
      try {
        const values = collectFormValues();
        await generatePDF(values);
      } catch (error) {
        console.error(error);
        setStatus(error.message || "Erro ao gerar PDF.", "error");
      }
    });

    refs.clearBtn?.addEventListener("click", () => {
      clearForm(true);
    });

    refs.form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      try {
        await saveCurrentDocument("final");
      } catch (error) {
        console.error(error);
        setStatus(error.message || "Erro ao salvar memorando.", "error");
      }
    });

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
        return;
      }

      const deleteBtn = event.target.closest("[data-delete-doc]");
      if (deleteBtn) {
        try {
          await deleteDocumentFromHistory(deleteBtn.dataset.deleteDoc);
        } catch (error) {
          console.error(error);
          setStatus(error.message || "Erro ao excluir memorando.", "error");
        }
      }
    });
  }

  async function generatePDF(source) {
    const jsPDF = window.jspdf?.jsPDF;
    if (!jsPDF) {
      throw new Error("Biblioteca jsPDF não encontrada no HTML.");
    }

    const values = normalizeSourceForPdf(source);

    if (!values.memo_subject) {
      throw new Error("Informe o assunto do memorando antes de gerar o PDF.");
    }

    if (!values.body_text) {
      values.body_text = normalizeMemoText(buildPresetBody(values));
    }

    setStatus("Gerando PDF...", "warn");

    const images = await Promise.all([
      loadImageObject(LOGO_SRC),
      loadImageObject(STAMP_SRC)
    ]);

    const logo = images[0];
    const stamp = images[1];

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true
    });

    const ctx = buildPdfContext(values);
    drawMemoPdf(pdf, ctx, { logo, stamp });

    const fileName = `memorando-${String(ctx.document_number).padStart(3, "0")}-${ctx.document_year}.pdf`;
    pdf.save(fileName);

    setStatus("PDF gerado com sucesso.", "ok");
  }

  function normalizeSourceForPdf(source) {
    const doc = { ...(source || {}) };

    return {
      document_number: doc.document_number || refs.documentNumber?.value || "",
      document_year: doc.document_year || refs.documentYear?.value || String(new Date().getFullYear()),
      issue_date: doc.issue_date || refs.issueDate?.value || toInputDate(new Date()),
      priority: doc.priority || refs.priority?.value || "Normal",
      origin_name: doc.origin_name || refs.originName?.value || DEFAULT_ORIGIN,
      destination_name: doc.destination_name || refs.destinationName?.value || DEFAULT_DESTINATION,
      destination_sector: doc.destination_sector || refs.destinationSector?.value || "",
      subject_category: doc.subject_category || refs.subjectPreset?.value || "",
      memo_subject: doc.memo_subject || refs.memoSubject?.value || "",
      related_location: doc.related_location || refs.relatedLocation?.value || "",
      equipment_material: doc.equipment_material || refs.equipmentMaterial?.value || "",
      requested_action: doc.requested_action || refs.requestedAction?.value || "",
      deadline_info: doc.deadline_info || refs.deadlineInfo?.value || "",
      responsible_area: doc.responsible_area || refs.responsibleArea?.value || "",
      reference_notes: doc.reference_notes || refs.referenceNotes?.value || "",
      body_text: normalizeMemoText(doc.body_text || refs.memoBody?.value || "")
    };
  }

  function buildPdfContext(values) {
    return {
      document_number: Number(values.document_number || 0),
      document_year: String(values.document_year || new Date().getFullYear()),
      issue_date: values.issue_date || toInputDate(new Date()),
      issue_date_br: formatDateBR(values.issue_date || toInputDate(new Date())),

      origin_name: values.origin_name || DEFAULT_ORIGIN,
      destination_name: values.destination_name || DEFAULT_DESTINATION,
      destination_sector: values.destination_sector || "",

      subject: values.memo_subject || values.subject_category || "Sem assunto",
      body_text: normalizeMemoText(values.body_text || buildPresetBody(values)),

      greeting: buildGreeting(values.destination_name || DEFAULT_DESTINATION),

      closing: STANDARD_CLOSING,
      signature: { ...DEFAULT_SIGNATURE }
    };
  }

  function buildGreeting(destinationName) {
    const dest = String(destinationName || "").toUpperCase();

    if (dest.includes("DDZ LESTE 1") || dest.includes("DDZ LESTE I")) {
      return "Prezado Chefe da Divisão Distrital Zona Leste I,";
    }

    return `Prezado(a) ${String(destinationName || "Destinatário").trim()},`;
  }

  async function loadImageObject(src) {
    if (state.imageCache.has(src)) {
      return state.imageCache.get(src);
    }

    const result = await new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve({
          src,
          width: img.naturalWidth,
          height: img.naturalHeight,
          dataUrl: canvas.toDataURL("image/png")
        });
      };

      img.onerror = () => reject(new Error(`Não foi possível carregar a imagem: ${src}`));
      img.src = src;
    });

    state.imageCache.set(src, result);
    return result;
  }

  function drawMemoPdf(pdf, ctx, images) {
    const L = getPdfLayout();

    const paragraphs = splitMemoParagraphs(ctx.body_text);
    const lineObjects = buildParagraphLineObjects(pdf, paragraphs, L.textWidth, L.bodyFontSize);

    const pages = paginateLineObjects(lineObjects, L);

    pages.forEach((pageLines, index) => {
      if (index > 0) {
        pdf.addPage();
      }

      const continuation = index > 0;
      const isLast = index === pages.length - 1;

      const bodyBottom = isLast ? L.footerTableY : L.pageBottomNoFooter;

      drawHeaderFrame(pdf, ctx, images, L, continuation);
      drawBodyFrame(pdf, L, bodyBottom);
      drawPageText(pdf, ctx, images, L, pageLines, continuation);

      if (isLast) {
        drawClosingSignatureAndFooter(pdf, ctx, L);
      }
    });
  }

  function getPdfLayout() {
    return {
      pageW: 210,
      pageH: 297,

      leftX: 30,
      boxW: 150,

      topY: 16,
      topHeaderH: 23,
      rowH: 16,
      subjectH: 10,

      bodyFontSize: 10,
      lineHeight: 6.0,
      blankLineHeight: 4.0,

      firstTextStartY: 84,
      continuationTextStartY: 63,

      pageBottomNoFooter: 275,
      footerTableY: 252,
      footerTableH: 16,

      textX: 48,
      textWidth: 88,

      greetingX: 48,
      greetingY: 76,

      stampSize: 18,
      stampX: 148,
      stampY: 76,

      lastPageTextBottomYFirst: 176,
      lastPageTextBottomYCont: 191
    };
  }

  function drawHeaderFrame(pdf, ctx, images, L, continuation = false) {
    const rightBoxX = L.leftX + 76;
    const rightBoxW = L.boxW - 76;
    const topRowY = L.topY;
    const secondRowY = topRowY + L.topHeaderH;
    const thirdRowY = secondRowY + L.rowH;

    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.3);

    pdf.rect(L.leftX, secondRowY, 76, L.rowH);
    pdf.rect(rightBoxX, secondRowY, rightBoxW, L.rowH);
    pdf.rect(L.leftX, thirdRowY, L.boxW, L.subjectH);

    pdf.rect(rightBoxX, topRowY, rightBoxW, L.topHeaderH);

    pdf.line(L.leftX + 8, topRowY + L.topHeaderH, rightBoxX, topRowY + L.topHeaderH);

    drawHeaderLogo(pdf, images.logo, L.leftX + 8, topRowY + 4, 68, 15);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.2);
    const title = continuation
      ? `MEMORANDO Nº ${ctx.document_number}/${ctx.document_year} - CONTINUAÇÃO`
      : `MEMORANDO Nº ${ctx.document_number}/${ctx.document_year}`;
    drawWrappedTitle(pdf, title, rightBoxX + 4, topRowY + 7, rightBoxW - 8, 5.2);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8.8);
    pdf.text("DA:", L.leftX + 3, secondRowY + 8.5);
    pdf.text(ctx.origin_name, L.leftX + 14, secondRowY + 8.5);

    pdf.text("PARA:", rightBoxX + 3, secondRowY + 8.5);
    pdf.text(ctx.destination_name, rightBoxX + 16, secondRowY + 8.5);

    pdf.text("ASSUNTO:", L.leftX + 3, thirdRowY + 7.2);
    pdf.setFont("helvetica", "normal");
    pdf.text(ctx.subject, L.leftX + 28, thirdRowY + 7.2);
  }

  function drawHeaderLogo(pdf, logo, x, y, boxW, boxH) {
    const fit = fitInside(logo.width, logo.height, boxW, boxH);
    const drawX = x + (boxW - fit.w) / 2;
    const drawY = y + (boxH - fit.h) / 2;

    pdf.addImage(logo.dataUrl, "PNG", drawX, drawY, fit.w, fit.h, undefined, "FAST");
  }

  function drawBodyFrame(pdf, L, bodyBottom) {
    const bodyTop = L.topY + L.topHeaderH + L.rowH + L.subjectH;
    pdf.rect(L.leftX, bodyTop, L.boxW, bodyBottom - bodyTop);
  }

  function drawPageText(pdf, ctx, images, L, pageLines, continuation) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(L.bodyFontSize);

    let y;

    if (!continuation) {
      pdf.setFontSize(10.2);
      pdf.text(ctx.greeting, L.greetingX, L.greetingY);

      const fitStamp = fitInside(images.stamp.width, images.stamp.height, L.stampSize, L.stampSize);
      pdf.addImage(
        images.stamp.dataUrl,
        "PNG",
        L.stampX,
        L.stampY,
        fitStamp.w,
        fitStamp.h,
        undefined,
        "FAST"
      );

      pdf.setFontSize(L.bodyFontSize);
      y = L.firstTextStartY;
    } else {
      y = L.continuationTextStartY;
    }

    for (const line of pageLines) {
      if (line.blank) {
        y += L.blankLineHeight;
        continue;
      }

      drawSmartJustifiedLine(pdf, line.text, L.textX, y, L.textWidth, line.justify);
      y += L.lineHeight;
    }
  }

  function drawClosingSignatureAndFooter(pdf, ctx, L) {
    const closingLines = pdf.splitTextToSize(ctx.closing, L.textWidth);
    const closingHeight = closingLines.length * 5.6;

    const lastBodyUsedY = getLastUsedY(pdf, L) || L.firstTextStartY;
    const closingY = Math.max(lastBodyUsedY + 16, 212);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(closingLines, L.textX, closingY);

    const atenciosamenteY = closingY + closingHeight + 12;
    pdf.text("Atenciosamente,", L.leftX + L.boxW / 2, atenciosamenteY, { align: "center" });

    const sigStartY = atenciosamenteY + 18;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.text(ctx.signature.line1, L.leftX + L.boxW / 2, sigStartY, { align: "center" });
    pdf.text(ctx.signature.line2, L.leftX + L.boxW / 2, sigStartY + 7, { align: "center" });
    pdf.text(ctx.signature.line3, L.leftX + L.boxW / 2, sigStartY + 13, { align: "center" });
    pdf.text(ctx.signature.line4, L.leftX + L.boxW / 2, sigStartY + 19, { align: "center" });

    drawFooterTable(pdf, ctx, L);
  }

  function drawFooterTable(pdf, ctx, L) {
    const y = L.footerTableY;
    const headerH = 7;
    const bodyH = 9;

    const col1 = 24;
    const col2 = 34;
    const col3 = 34;
    const col4 = L.boxW - col1 - col2 - col3;

    const x1 = L.leftX;
    const x2 = x1 + col1;
    const x3 = x2 + col2;
    const x4 = x3 + col3;
    const x5 = x4 + col4;

    pdf.rect(L.leftX, y, L.boxW, L.footerTableH);
    pdf.line(L.leftX, y + headerH, L.leftX + L.boxW, y + headerH);

    pdf.line(x2, y, x2, y + L.footerTableH);
    pdf.line(x3, y, x3, y + L.footerTableH);
    pdf.line(x4, y, x4, y + L.footerTableH);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(7.8);
    pdf.text("DATA", (x1 + x2) / 2, y + 4.7, { align: "center" });
    pdf.text("ENVIADO POR", (x2 + x3) / 2, y + 4.7, { align: "center" });
    pdf.text("RECEBIDO POR", (x3 + x4) / 2, y + 4.7, { align: "center" });
    pdf.text("DATA", (x4 + x5) / 2, y + 4.7, { align: "center" });

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(7.2);
    pdf.text(ctx.issue_date_br, (x1 + x2) / 2, y + headerH + 5.8, { align: "center" });
    pdf.text(ctx.origin_name, (x2 + x3) / 2, y + headerH + 5.8, { align: "center", maxWidth: col2 - 3 });
  }

  function getLastUsedY(pdf, L) {
    return pdf.__lastMemoBodyY || L.firstTextStartY;
  }

  function splitMemoParagraphs(text) {
    return String(text || "")
      .split(/\n\s*\n/g)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function buildParagraphLineObjects(pdf, paragraphs, maxWidth, fontSize) {
    const objects = [];

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(fontSize);

    paragraphs.forEach((paragraph, pIndex) => {
      const lines = wrapTextByWords(pdf, paragraph, maxWidth);

      lines.forEach((line, index) => {
        const isLastLine = index === lines.length - 1;
        const compact = line.replace(/\s+/g, " ").trim();
        const ratio = pdf.getTextWidth(compact) / maxWidth;

        objects.push({
          text: compact,
          blank: false,
          justify: !isLastLine && ratio > 0.82
        });
      });

      if (pIndex < paragraphs.length - 1) {
        objects.push({ blank: true });
      }
    });

    return objects;
  }

  function paginateLineObjects(lineObjects, L) {
    const pages = [];
    let index = 0;

    while (index < lineObjects.length) {
      const remaining = lineObjects.length - index;
      const isFirstPage = pages.length === 0;

      const maxHeightIfLast = isFirstPage
        ? L.lastPageTextBottomYFirst - L.firstTextStartY
        : L.lastPageTextBottomYCont - L.continuationTextStartY;

      const fitIfLast = fitCountForHeight(lineObjects, index, maxHeightIfLast, L);

      if (fitIfLast >= remaining) {
        pages.push(lineObjects.slice(index));
        break;
      }

      const maxHeightCurrent = isFirstPage
        ? L.pageBottomNoFooter - L.firstTextStartY
        : L.pageBottomNoFooter - L.continuationTextStartY;

      const count = fitCountForHeight(lineObjects, index, maxHeightCurrent, L);

      if (count <= 0) {
        throw new Error("Não foi possível paginar o texto do memorando.");
      }

      pages.push(lineObjects.slice(index, index + count));
      index += count;
    }

    return pages;
  }

  function fitCountForHeight(lineObjects, startIndex, maxHeight, L) {
    let used = 0;
    let count = 0;

    for (let i = startIndex; i < lineObjects.length; i += 1) {
      const line = lineObjects[i];
      const h = line.blank ? L.blankLineHeight : L.lineHeight;

      if (used + h > maxHeight) {
        break;
      }

      used += h;
      count += 1;
    }

    return count;
  }

  function wrapTextByWords(pdf, text, maxWidth) {
    const words = String(text || "").trim().split(/\s+/);
    const lines = [];
    let current = "";

    words.forEach((word) => {
      const test = current ? `${current} ${word}` : word;
      const width = pdf.getTextWidth(test);

      if (width <= maxWidth) {
        current = test;
      } else {
        if (current) lines.push(current);
        current = word;
      }
    });

    if (current) lines.push(current);

    return lines;
  }

  function drawSmartJustifiedLine(pdf, text, x, y, width, justify = false) {
    if (!justify) {
      pdf.text(text, x, y);
      pdf.__lastMemoBodyY = y;
      return;
    }

    const words = text.split(/\s+/).filter(Boolean);

    if (words.length < 2) {
      pdf.text(text, x, y);
      pdf.__lastMemoBodyY = y;
      return;
    }

    const textWidth = pdf.getTextWidth(words.join(" "));
    const totalSpaces = words.length - 1;
    const gap = (width - textWidth) / totalSpaces;

    if (gap <= 1.2 || gap >= 4.2) {
      pdf.text(text, x, y);
      pdf.__lastMemoBodyY = y;
      return;
    }

    let cursor = x;
    words.forEach((word, index) => {
      pdf.text(word, cursor, y);
      cursor += pdf.getTextWidth(word);

      if (index < totalSpaces) {
        cursor += gap;
      }
    });

    pdf.__lastMemoBodyY = y;
  }

  function drawWrappedTitle(pdf, text, x, y, maxWidth, lineHeight) {
    const lines = pdf.splitTextToSize(text, maxWidth);
    lines.forEach((line, index) => {
      pdf.text(line, x, y + index * lineHeight);
    });
  }

  function fitInside(srcW, srcH, boxW, boxH) {
    const ratio = Math.min(boxW / srcW, boxH / srcH);
    return {
      w: srcW * ratio,
      h: srcH * ratio
    };
  }

  function setStatus(message, type = "info") {
    if (!refs.statusBox) return;

    refs.statusBox.textContent = message;
    refs.statusBox.className = "";

    if (type) {
      refs.statusBox.classList.add(type);
    }
  }

  function safe(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function toInputDate(date) {
    const d = date instanceof Date ? date : new Date(date);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function formatDateBR(dateString) {
    if (!dateString) return "";

    const [yyyy, mm, dd] = String(dateString).split("-");
    if (!yyyy || !mm || !dd) return dateString;

    return `${dd}/${mm}/${yyyy}`;
  }
})();
