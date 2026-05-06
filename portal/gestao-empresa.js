/*
  INTEGRO — Dados da empresa / escola

  Este arquivo controla o formulário "Dados da empresa"
  em portal/gestao-escolar.html.

  Ele salva e carrega os dados na tabela:

  public.school_company_settings
*/

(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) {
    console.warn("INTEGRO: configuração do Supabase não encontrada para dados da empresa.");
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  let currentUser = null;
  let currentProfile = null;
  let currentSettings = null;

  function $(id) {
    return document.getElementById(id);
  }

  function setValue(id, value) {
    const el = $(id);

    if (el) {
      el.value = value ?? "";
    }
  }

  function getValue(id) {
    const el = $(id);

    if (!el) {
      return "";
    }

    return String(el.value || "").trim();
  }

  function setText(id, value) {
    const el = $(id);

    if (el) {
      el.textContent = value;
    }
  }

  function status(type, message) {
    const el = $("companySettingsStatus");

    if (!el) {
      return;
    }

    el.className = "status show " + type;
    el.textContent = message;
  }

  function clearStatus() {
    const el = $("companySettingsStatus");

    if (!el) {
      return;
    }

    el.className = "status";
    el.textContent = "";
  }

  function buildAddress(settings) {
    if (!settings) {
      return "";
    }

    const line1 = [
      settings.address_street,
      settings.address_number
    ].filter(Boolean).join(", ");

    const line2 = [
      settings.address_complement,
      settings.address_neighborhood
    ].filter(Boolean).join(" - ");

    const line3 = [
      settings.address_city,
      settings.address_state
    ].filter(Boolean).join("/");

    const zip = settings.address_zip_code
      ? "CEP " + settings.address_zip_code
      : "";

    return [
      line1,
      line2,
      line3,
      zip
    ].filter(Boolean).join(" | ");
  }

  function updatePreview(settings) {
    const data = settings || {};

    const name =
      data.trade_name ||
      data.legal_name ||
      "Dados ainda não cadastrados";

    const documentType = data.document_type || "CNPJ";
    const documentNumber = data.document_number || "—";
    const address = buildAddress(data) || "—";

    const contactParts = [
      data.phone ? "Tel.: " + data.phone : "",
      data.whatsapp ? "WhatsApp: " + data.whatsapp : "",
      data.email ? "E-mail: " + data.email : "",
      data.website ? "Site: " + data.website : ""
    ].filter(Boolean);

    setText("companyPreviewName", name);
    setText("companyPreviewDocument", documentType + ": " + documentNumber);
    setText("companyPreviewAddress", "Endereço: " + address);
    setText("companyPreviewContact", "Contato: " + (contactParts.join(" | ") || "—"));
  }

  function fillForm(settings) {
    const data = settings || {};

    setValue("companyLegalName", data.legal_name);
    setValue("companyTradeName", data.trade_name);
    setValue("companyDocumentType", data.document_type || "CNPJ");
    setValue("companyDocumentNumber", data.document_number);

    setValue("companyStateRegistration", data.state_registration);
    setValue("companyMunicipalRegistration", data.municipal_registration);

    setValue("companyResponsibleName", data.responsible_name);
    setValue("companyResponsibleDocument", data.responsible_document);

    setValue("companyPhone", data.phone);
    setValue("companyWhatsapp", data.whatsapp);
    setValue("companyEmail", data.email);
    setValue("companyWebsite", data.website);

    setValue("companyAddressStreet", data.address_street);
    setValue("companyAddressNumber", data.address_number);
    setValue("companyAddressComplement", data.address_complement);
    setValue("companyAddressNeighborhood", data.address_neighborhood);
    setValue("companyAddressCity", data.address_city);
    setValue("companyAddressState", data.address_state);
    setValue("companyAddressZipCode", data.address_zip_code);

    setValue("companyReceiptFooter", data.receipt_footer);
    setValue("companyDocumentObservations", data.document_observations);

    updatePreview(data);
  }

  function readForm() {
    return {
      school_id: currentProfile.school_id,

      legal_name: getValue("companyLegalName") || null,
      trade_name: getValue("companyTradeName") || null,

      document_type: getValue("companyDocumentType") || "CNPJ",
      document_number: getValue("companyDocumentNumber") || null,

      state_registration: getValue("companyStateRegistration") || null,
      municipal_registration: getValue("companyMunicipalRegistration") || null,

      responsible_name: getValue("companyResponsibleName") || null,
      responsible_document: getValue("companyResponsibleDocument") || null,

      phone: getValue("companyPhone") || null,
      whatsapp: getValue("companyWhatsapp") || null,
      email: getValue("companyEmail") || null,
      website: getValue("companyWebsite") || null,

      address_street: getValue("companyAddressStreet") || null,
      address_number: getValue("companyAddressNumber") || null,
      address_complement: getValue("companyAddressComplement") || null,
      address_neighborhood: getValue("companyAddressNeighborhood") || null,
      address_city: getValue("companyAddressCity") || null,
      address_state: getValue("companyAddressState") || null,
      address_zip_code: getValue("companyAddressZipCode") || null,

      receipt_footer: getValue("companyReceiptFooter") || null,
      document_observations: getValue("companyDocumentObservations") || null,

      updated_at: new Date().toISOString()
    };
  }

  async function loadProfile() {
    const { data: userData, error: userError } = await client.auth.getUser();

    if (userError || !userData?.user) {
      throw new Error("Usuário não autenticado.");
    }

    currentUser = userData.user;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", currentUser.id)
      .maybeSingle();

    if (profileError) {
      throw new Error("Erro ao carregar perfil: " + profileError.message);
    }

    if (!profile) {
      throw new Error("Perfil do usuário logado não encontrado.");
    }

    if (!["integro_admin", "diretor", "coordenacao"].includes(profile.role)) {
      throw new Error("Seu perfil não tem permissão para editar dados da empresa.");
    }

    if (!profile.school_id) {
      throw new Error("Seu perfil não está vinculado a uma escola.");
    }

    currentProfile = profile;
  }

  async function loadCompanySettings() {
    clearStatus();

    try {
      if (!currentProfile) {
        await loadProfile();
      }

      const { data, error } = await client
        .from("school_company_settings")
        .select("*")
        .eq("school_id", currentProfile.school_id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      currentSettings = data || null;
      fillForm(currentSettings);

      if (!currentSettings) {
        status(
          "warn",
          "Nenhum dado da empresa cadastrado ainda. Preencha o formulário e clique em salvar."
        );
      }
    } catch (err) {
      console.error("Erro ao carregar dados da empresa:", err);
      status("error", err.message || "Erro ao carregar dados da empresa.");
    }
  }

  async function saveCompanySettings(event) {
    event.preventDefault();
    clearStatus();

    try {
      if (!currentProfile) {
        await loadProfile();
      }

      const payload = readForm();

      if (!payload.legal_name && !payload.trade_name) {
        status(
          "warn",
          "Informe pelo menos a razão social/nome completo ou o nome fantasia."
        );
        return;
      }

      const { data, error } = await client
        .from("school_company_settings")
        .upsert(payload, {
          onConflict: "school_id"
        })
        .select("*")
        .maybeSingle();

      if (error) {
        throw error;
      }

      currentSettings = data || payload;
      fillForm(currentSettings);

      status("ok", "Dados da empresa salvos com sucesso.");
    } catch (err) {
      console.error("Erro ao salvar dados da empresa:", err);
      status("error", err.message || "Erro ao salvar dados da empresa.");
    }
  }

  window.INTEGRO_COMPANY_SETTINGS = {
    getCurrentSettings: function () {
      return currentSettings;
    },

    reload: loadCompanySettings
  };

  window.addEventListener("DOMContentLoaded", function () {
    const form = $("companySettingsForm");
    const reloadBtn = $("companyReloadBtn");

    if (form) {
      form.addEventListener("submit", saveCompanySettings);
    }

    if (reloadBtn) {
      reloadBtn.addEventListener("click", loadCompanySettings);
    }

    setTimeout(loadCompanySettings, 600);
  });
})();
