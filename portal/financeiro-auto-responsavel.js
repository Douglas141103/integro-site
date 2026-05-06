/*
  INTEGRO — complemento para o Financeiro
  Função:
  - Detecta o seletor de aluno da Frente de Caixa.
  - Busca os alunos da escola no Supabase.
  - Ao selecionar um aluno, exibe responsável, CPF, telefone e e-mail.
  - Não substitui o financeiro.js atual; apenas complementa.
*/

(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) {
    console.warn("INTEGRO: configuração do Supabase não encontrada para dados do responsável no financeiro.");
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  let financeStudents = [];
  let currentProfile = null;

  function safeText(value) {
    return value == null || value === "" ? "Não informado" : String(value);
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function isStudentLikeSelect(select) {
    if (!select) return false;

    const id = normalize(select.id);
    const name = normalize(select.name);
    const labelText = normalize(select.closest("label")?.innerText || "");
    const parentText = normalize(select.parentElement?.innerText || "");

    const text = [id, name, labelText, parentText].join(" ");

    if (
      text.includes("student") ||
      text.includes("aluno") ||
      text.includes("estudante") ||
      text.includes("finance")
    ) {
      return true;
    }

    const options = Array.from(select.options || []);
    const matchedOptions = options.filter((option) => {
      const optionText = normalize(option.textContent);
      return financeStudents.some((student) => normalize(student.full_name) === optionText);
    });

    return matchedOptions.length > 0;
  }

  function findStudentSelects() {
    return Array.from(document.querySelectorAll("select")).filter(isStudentLikeSelect);
  }

  function createInfoBoxAfter(select) {
    if (!select) return null;

    const existing = document.getElementById("studentFinanceInfo");

    if (existing) return existing;

    const box = document.createElement("div");
    box.className = "student-finance-info";
    box.id = "studentFinanceInfo";
    box.style.display = "none";

    box.innerHTML = `
      <div>
        <span>Responsável</span>
        <strong id="financeGuardianName">—</strong>
      </div>

      <div>
        <span>CPF do responsável</span>
        <strong id="financeGuardianCpf">—</strong>
      </div>

      <div>
        <span>Telefone</span>
        <strong id="financeGuardianPhone">—</strong>
      </div>

      <div>
        <span>E-mail</span>
        <strong id="financeGuardianEmail">—</strong>
      </div>
    `;

    const fieldWrapper =
      select.closest(".field") ||
      select.closest("label") ||
      select.closest(".form-group") ||
      select.parentElement;

    if (fieldWrapper && fieldWrapper.parentNode) {
      fieldWrapper.insertAdjacentElement("afterend", box);
    } else {
      select.insertAdjacentElement("afterend", box);
    }

    return box;
  }

  function getSelectedStudent(select) {
    if (!select) return null;

    const selectedValue = select.value;
    const selectedOptionText = select.options?.[select.selectedIndex]?.textContent || "";

    let student = financeStudents.find((item) => item.id === selectedValue);

    if (!student) {
      student = financeStudents.find((item) => normalize(item.full_name) === normalize(selectedOptionText));
    }

    return student || null;
  }

  function updateFinanceGuardianInfo(select) {
    const box = createInfoBoxAfter(select);

    if (!box) return;

    const student = getSelectedStudent(select);

    if (!student) {
      box.style.display = "none";
      return;
    }

    const guardianName = document.getElementById("financeGuardianName");
    const guardianCpf = document.getElementById("financeGuardianCpf");
    const guardianPhone = document.getElementById("financeGuardianPhone");
    const guardianEmail = document.getElementById("financeGuardianEmail");

    if (guardianName) guardianName.textContent = safeText(student.guardian_1_name);
    if (guardianCpf) guardianCpf.textContent = safeText(student.guardian_1_cpf);
    if (guardianPhone) guardianPhone.textContent = safeText(student.guardian_1_phone);
    if (guardianEmail) guardianEmail.textContent = safeText(student.guardian_1_email);

    box.style.display = "grid";
  }

  function attachToStudentSelects() {
    const selects = findStudentSelects();

    selects.forEach((select) => {
      if (select.dataset.financeGuardianAttached === "true") return;

      select.dataset.financeGuardianAttached = "true";

      createInfoBoxAfter(select);

      select.addEventListener("change", function () {
        updateFinanceGuardianInfo(select);
      });

      if (select.value) {
        updateFinanceGuardianInfo(select);
      }
    });
  }

  async function loadProfileAndStudents() {
    const { data: userData, error: userError } = await client.auth.getUser();

    if (userError || !userData?.user) {
      console.warn("INTEGRO financeiro: usuário não autenticado.");
      return;
    }

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, role, school_id")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (profileError || !profile?.school_id) {
      console.warn("INTEGRO financeiro: profile não encontrado ou sem escola.", profileError);
      return;
    }

    currentProfile = profile;

    const { data: students, error: studentsError } = await client
      .from("students")
      .select("id, full_name, guardian_1_name, guardian_1_cpf, guardian_1_email, guardian_1_phone, active, school_id")
      .eq("school_id", currentProfile.school_id)
      .order("full_name", { ascending: true });

    if (studentsError) {
      console.warn("INTEGRO financeiro: erro ao carregar alunos.", studentsError);
      return;
    }

    financeStudents = students || [];

    attachToStudentSelects();
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadProfileAndStudents();

    const observer = new MutationObserver(function () {
      if (financeStudents.length) {
        attachToStudentSelects();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(attachToStudentSelects, 800);
    setTimeout(attachToStudentSelects, 1600);
    setTimeout(attachToStudentSelects, 3000);
  });
})();
