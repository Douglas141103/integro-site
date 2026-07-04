(function () {
  if (window.__INTEGRO_GESTAO_ESCOLAR_TURNOS__) return;
  window.__INTEGRO_GESTAO_ESCOLAR_TURNOS__ = true;

  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  let profile = null;
  let packages = [];
  let shiftColumnAvailable = true;
  let rendering = false;

  const SHIFT_OPTIONS = [
    ["manha", "Manhã"],
    ["tarde", "Tarde"],
    ["noite", "Noite"],
  ];

  const STATUS_OPTIONS = [
    ["matriculado", "Matriculados"],
    ["pre_matricula", "Pré-matrículas"],
    ["inativo", "Inativos"],
  ];

  function $(id) {
    return document.getElementById(id);
  }

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function text(id, value) {
    const el = $(id);
    if (el) el.textContent = value;
  }

  function value(id, valueToSet) {
    const el = $(id);
    if (el) el.value = valueToSet ?? "";
  }

  function formatDateBR(value) {
    if (!value) return "";
    const parts = String(value).slice(0, 10).split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : String(value);
  }

  function moneyBR(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function getEnrollmentStatus(student) {
    if (student?.enrollment_status) return student.enrollment_status;
    return student?.active === false ? "inativo" : "matriculado";
  }

  function enrollmentLabel(statusValue) {
    const labels = {
      matriculado: "Matriculado",
      pre_matricula: "Pré-matrícula / reserva",
      inativo: "Inativo",
    };

    return labels[statusValue] || "Matriculado";
  }

  function shiftLabel(shiftValue) {
    const labels = {
      manha: "Manhã",
      tarde: "Tarde",
      noite: "Noite",
    };

    return labels[shiftValue] || "Sem turno";
  }

  function normalizeShift(valueToNormalize) {
    const value = String(valueToNormalize || "").trim().toLowerCase();
    if (["manha", "manhã", "matutino", "manha/matutino"].includes(value)) return "manha";
    if (["tarde", "vespertino"].includes(value)) return "tarde";
    if (["noite", "noturno"].includes(value)) return "noite";
    return "manha";
  }

  function getPackageName(packageId) {
    const item = packages.find((p) => p.id === packageId);
    if (!item) return "-";
    return `${item.name} — ${moneyBR(item.default_amount)}`;
  }

  function showStatus(message, type = "ok") {
    const status = $("studentStatus") || $("statusBox");
    if (!status || !message) return;
    status.className = status.id === "studentStatus" ? `status show ${type}` : `status ${type}`;
    status.hidden = false;
    status.textContent = message;
  }

  function optionHtml(selectedValue = "") {
    return SHIFT_OPTIONS.map(([value, label]) => `
      <option value="${value}" ${selectedValue === value ? "selected" : ""}>${label}</option>
    `).join("");
  }

  function addStyles() {
    if ($("gestaoTurnosStyle")) return;

    const style = document.createElement("style");
    style.id = "gestaoTurnosStyle";
    style.textContent = `
      .turno-filter-card {
        margin-top: 14px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        align-items: end;
      }

      .turno-filter-card label {
        margin: 0;
      }

      .turno-counts {
        margin-top: 14px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
      }

      .turno-count-card {
        background: #f8fcfa;
        border: 1px solid #dbe9e1;
        border-radius: 16px;
        padding: 12px;
      }

      .turno-count-card strong {
        display: block;
        color: #0d5c46;
        font-size: 1.2rem;
      }

      .turno-count-card span {
        color: #587066;
        font-size: .86rem;
      }

      .turno-group-row td {
        background: #e8f4ee;
        color: #0d5c46;
        font-weight: 900;
        border-top: 2px solid #cfe5d8;
      }

      .turno-badge,
      .situacao-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        padding: 6px 10px;
        font-size: .82rem;
        font-weight: 900;
        white-space: nowrap;
      }

      .turno-badge {
        background: #e8f4ee;
        color: #0d5c46;
      }

      .situacao-badge.matriculado {
        background: #dcfce7;
        color: #166534;
      }

      .situacao-badge.pre_matricula {
        background: #fff7d6;
        color: #8a5a00;
      }

      .situacao-badge.inativo {
        background: #fee2e2;
        color: #991b1b;
      }

      .turno-warning {
        margin-top: 12px;
        background: #fff8e1;
        color: #8c6b00;
        border: 1px solid #f3d58b;
        border-radius: 14px;
        padding: 12px;
        font-weight: 700;
        line-height: 1.45;
      }

      @media (max-width: 980px) {
        .turno-filter-card,
        .turno-counts {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function ensureInactiveMetric() {
    const schoolBox = document.querySelector(".school-box");
    if (!schoolBox || $("inactiveStudentsCount")) return;

    const metric = document.createElement("div");
    metric.className = "metric";
    metric.innerHTML = '<strong id="inactiveStudentsCount">0</strong><span>Alunos inativos</span>';
    schoolBox.appendChild(metric);
  }

  function ensureShiftFields() {
    const studentStatusField = $("studentActive")?.closest("div");
    if (studentStatusField && !$("studentShift")) {
      const field = document.createElement("div");
      field.innerHTML = `
        <label for="studentShift">Turno do aluno</label>
        <select id="studentShift">
          ${optionHtml("manha")}
        </select>
      `;
      studentStatusField.insertAdjacentElement("afterend", field);
    }

    const editStatusField = $("editStudentActive")?.closest("div");
    if (editStatusField && !$("editStudentShift")) {
      const field = document.createElement("div");
      field.innerHTML = `
        <label for="editStudentShift">Turno do aluno</label>
        <select id="editStudentShift">
          ${optionHtml("manha")}
        </select>
      `;
      editStatusField.insertAdjacentElement("afterend", field);
    }
  }

  function ensureFilters() {
    const panel = $("painel-alunos");
    if (!panel || $("studentShiftFilter")) return;

    const mini = panel.querySelector(".mini");
    const filters = document.createElement("div");
    filters.className = "turno-filter-card";
    filters.innerHTML = `
      <label>
        Buscar aluno
        <input id="studentSearchFilter" type="search" placeholder="Digite o nome do aluno ou responsável" />
      </label>
      <label>
        Turno
        <select id="studentShiftFilter">
          <option value="todos">Todos os turnos</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
          <option value="sem_turno">Sem turno</option>
        </select>
      </label>
      <label>
        Situação
        <select id="studentStatusFilter">
          <option value="todos">Todos</option>
          <option value="matriculado">Matriculados</option>
          <option value="pre_matricula">Pré-matriculados</option>
          <option value="inativo">Inativos</option>
        </select>
      </label>
      <button class="btn-secondary" type="button" id="clearStudentFilters">Limpar filtros</button>
    `;

    const counts = document.createElement("div");
    counts.className = "turno-counts";
    counts.id = "turnoCounts";

    if (mini) {
      mini.insertAdjacentElement("afterend", filters);
      filters.insertAdjacentElement("afterend", counts);
    }

    ["studentSearchFilter", "studentShiftFilter", "studentStatusFilter"].forEach((id) => {
      $(id)?.addEventListener("input", renderStudentsByShift);
      $(id)?.addEventListener("change", renderStudentsByShift);
    });

    $("clearStudentFilters")?.addEventListener("click", () => {
      value("studentSearchFilter", "");
      value("studentShiftFilter", "todos");
      value("studentStatusFilter", "todos");
      renderStudentsByShift();
    });
  }

  async function getProfile() {
    if (profile?.school_id) return profile;

    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData?.user?.id) throw new Error("Usuário não autenticado.");

    const { data, error } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (error) throw error;
    if (!data?.school_id) throw new Error("Perfil sem unidade vinculada.");

    profile = data;
    return profile;
  }

  async function getAccessToken() {
    const { data } = await client.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) throw new Error("Sessão inválida. Saia e entre novamente.");
    return token;
  }

  async function loadPackages() {
    const currentProfile = await getProfile();

    const { data, error } = await client
      .from("finance_packages")
      .select("id, name, default_amount, active")
      .eq("school_id", currentProfile.school_id)
      .eq("active", true)
      .order("name", { ascending: true });

    if (error) {
      packages = [];
      return;
    }

    packages = data || [];
  }

  async function loadStudents() {
    const currentProfile = await getProfile();

    let response = await client
      .from("students")
      .select("id, full_name, birth_date, guardian_1_name, guardian_1_cpf, guardian_1_email, guardian_1_phone, guardian_2_name, guardian_2_phone, active, enrollment_status, reserved_at, enrolled_at, notes, school_id, monthly_due_day, package_id, shift")
      .eq("school_id", currentProfile.school_id)
      .order("full_name", { ascending: true });

    if (response.error && /shift|column/i.test(response.error.message || "")) {
      shiftColumnAvailable = false;
      response = await client
        .from("students")
        .select("id, full_name, birth_date, guardian_1_name, guardian_1_cpf, guardian_1_email, guardian_1_phone, guardian_2_name, guardian_2_phone, active, enrollment_status, reserved_at, enrolled_at, notes, school_id, monthly_due_day, package_id")
        .eq("school_id", currentProfile.school_id)
        .order("full_name", { ascending: true });
    }

    if (response.error) throw response.error;

    return response.data || [];
  }

  function updateLinkStudentSelect(students) {
    const select = $("linkStudent");
    if (!select) return;

    const enrolled = students.filter((student) => getEnrollmentStatus(student) === "matriculado");
    const groups = ["manha", "tarde", "noite", "sem_turno"];

    select.innerHTML = '<option value="">Selecione um aluno matriculado</option>' + groups.map((group) => {
      const items = enrolled.filter((student) => (student.shift || "sem_turno") === group);
      if (!items.length) return "";
      return `
        <optgroup label="${shiftLabel(group)}">
          ${items.map((student) => `<option value="${safe(student.id)}">${safe(student.full_name)}</option>`).join("")}
        </optgroup>
      `;
    }).join("");
  }

  function updateCounts(students) {
    const enrolled = students.filter((student) => getEnrollmentStatus(student) === "matriculado").length;
    const reserved = students.filter((student) => getEnrollmentStatus(student) === "pre_matricula").length;
    const inactive = students.filter((student) => getEnrollmentStatus(student) === "inativo").length;

    text("studentsCount", String(enrolled));
    text("reservedStudentsCount", String(reserved));
    text("inactiveStudentsCount", String(inactive));

    const counts = $("turnoCounts");
    if (!counts) return;

    counts.innerHTML = SHIFT_OPTIONS.map(([shift, label]) => {
      const shiftStudents = students.filter((student) => student.shift === shift);
      const shiftEnrolled = shiftStudents.filter((student) => getEnrollmentStatus(student) === "matriculado").length;
      const shiftReserved = shiftStudents.filter((student) => getEnrollmentStatus(student) === "pre_matricula").length;
      const shiftInactive = shiftStudents.filter((student) => getEnrollmentStatus(student) === "inativo").length;

      return `
        <div class="turno-count-card">
          <strong>${shiftStudents.length}</strong>
          <span>${label}: ${shiftEnrolled} matriculados, ${shiftReserved} pré-matrículas, ${shiftInactive} inativos</span>
        </div>
      `;
    }).join("");
  }

  async function renderStudentsByShift() {
    if (rendering) return;
    rendering = true;

    try {
      addStyles();
      ensureInactiveMetric();
      ensureShiftFields();
      ensureFilters();
      await loadPackages();

      const table = $("studentsTable");
      if (!table) return;

      const theadRow = document.querySelector("#painel-alunos table thead tr");
      if (theadRow) {
        theadRow.innerHTML = `
          <th>Aluno</th>
          <th>Turno</th>
          <th>Nascimento</th>
          <th>Responsável</th>
          <th>Telefone</th>
          <th>Situação</th>
          <th>Ações</th>
        `;
      }

      const students = await loadStudents();
      updateCounts(students);
      updateLinkStudentSelect(students);

      const search = String($("studentSearchFilter")?.value || "").trim().toLowerCase();
      const shiftFilter = $("studentShiftFilter")?.value || "todos";
      const statusFilter = $("studentStatusFilter")?.value || "todos";

      let filtered = students.filter((student) => {
        const studentShift = student.shift || "sem_turno";
        const status = getEnrollmentStatus(student);
        const searchBase = [
          student.full_name,
          student.guardian_1_name,
          student.guardian_1_email,
          student.guardian_1_phone,
          student.guardian_1_cpf,
        ].filter(Boolean).join(" ").toLowerCase();

        if (shiftFilter !== "todos" && studentShift !== shiftFilter) return false;
        if (statusFilter !== "todos" && status !== statusFilter) return false;
        if (search && !searchBase.includes(search)) return false;
        return true;
      });

      const order = ["manha", "tarde", "noite", "sem_turno"];
      const rows = [];

      order.forEach((shift) => {
        const groupStudents = filtered.filter((student) => (student.shift || "sem_turno") === shift);
        if (!groupStudents.length) return;

        rows.push(`
          <tr class="turno-group-row">
            <td colspan="7">${shiftLabel(shift)} — ${groupStudents.length} aluno(s)</td>
          </tr>
        `);

        groupStudents.forEach((student) => {
          const enrollmentStatus = getEnrollmentStatus(student);
          rows.push(`
            <tr>
              <td>
                <strong>${safe(student.full_name)}</strong><br>
                <span class="small">CPF resp.: ${safe(student.guardian_1_cpf || "-")}</span><br>
                <span class="small">Vencimento: ${student.monthly_due_day ? "dia " + safe(student.monthly_due_day) : "-"}</span><br>
                <span class="small">Pacote: ${safe(getPackageName(student.package_id))}</span>
              </td>
              <td><span class="turno-badge">${safe(shiftLabel(student.shift))}</span></td>
              <td>${safe(formatDateBR(student.birth_date) || "-")}</td>
              <td>
                ${safe(student.guardian_1_name || "-")}<br>
                <span class="small">${safe(student.guardian_1_email || "")}</span><br>
                <span class="small">${safe(student.guardian_2_name ? "Outro resp.: " + student.guardian_2_name : "")}</span>
              </td>
              <td>
                ${safe(student.guardian_1_phone || "-")}<br>
                <span class="small">${safe(student.guardian_2_phone || "")}</span>
              </td>
              <td><span class="situacao-badge ${safe(enrollmentStatus)}">${safe(enrollmentLabel(enrollmentStatus))}</span></td>
              <td>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                  ${enrollmentStatus === "pre_matricula" ? `<button class="btn-small" type="button" data-enroll-student="${safe(student.id)}" style="background:#dcfce7;color:#166534;">Matricular</button>` : ""}
                  <button class="btn-small" type="button" data-edit-student="${safe(student.id)}">Editar</button>
                  <button class="btn-small" type="button" data-print-student="${safe(student.id)}" style="background:#e8f4ee;color:#114a3b;">Imprimir ficha</button>
                  <button class="btn-small" type="button" data-delete-student="${safe(student.id)}" style="background:#fee2e2;color:#991b1b;">Excluir</button>
                </div>
              </td>
            </tr>
          `);
        });
      });

      if (!rows.length) {
        rows.push('<tr><td colspan="7" class="empty">Nenhum aluno encontrado para os filtros selecionados.</td></tr>');
      }

      table.innerHTML = rows.join("");

      const oldWarning = $("turnoColumnWarning");
      if (oldWarning) oldWarning.remove();

      if (!shiftColumnAvailable) {
        const warning = document.createElement("div");
        warning.id = "turnoColumnWarning";
        warning.className = "turno-warning";
        warning.textContent = "Para salvar o turno no cadastro, é necessário criar a coluna shift na tabela students. Rode o SQL informado pelo ChatGPT no Supabase.";
        $("painel-alunos")?.querySelector(".mini")?.insertAdjacentElement("afterend", warning);
      }
    } catch (error) {
      console.error(error);
      showStatus("Não foi possível carregar alunos por turno: " + (error.message || "erro desconhecido"), "error");
    } finally {
      rendering = false;
    }
  }

  async function updateStudentShiftById(studentId, shift) {
    if (!studentId || !shiftColumnAvailable) return;

    const currentProfile = await getProfile();

    const { error } = await client
      .from("students")
      .update({ shift: normalizeShift(shift) })
      .eq("id", studentId)
      .eq("school_id", currentProfile.school_id);

    if (error) throw error;
  }

  async function updateLatestCreatedStudentShift(data) {
    if (!shiftColumnAvailable) return;
    if (!data.fullName || !data.email) return;

    const currentProfile = await getProfile();

    const { data: rows, error } = await client
      .from("students")
      .select("id, full_name, guardian_1_email, created_at")
      .eq("school_id", currentProfile.school_id)
      .ilike("full_name", data.fullName)
      .ilike("guardian_1_email", data.email)
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) throw error;

    const student = rows?.[0];
    if (!student?.id) return;

    await updateStudentShiftById(student.id, data.shift);
  }

  function attachShiftPersistence() {
    const studentForm = $("studentForm");
    if (studentForm && !studentForm.dataset.turnoAttached) {
      studentForm.dataset.turnoAttached = "true";
      studentForm.addEventListener("submit", () => {
        const data = {
          shift: $("studentShift")?.value || "manha",
          fullName: $("studentName")?.value.trim() || "",
          email: $("guardianPrimaryEmail")?.value.trim().toLowerCase() || "",
        };

        [1800, 3500, 6000].forEach((delay) => {
          setTimeout(async () => {
            try {
              await updateLatestCreatedStudentShift(data);
              await renderStudentsByShift();
            } catch (error) {
              console.warn("INTEGRO: turno do aluno ainda não foi salvo.", error);
            }
          }, delay);
        });
      });
    }

    const editForm = $("studentEditForm");
    if (editForm && !editForm.dataset.turnoAttached) {
      editForm.dataset.turnoAttached = "true";
      editForm.addEventListener("submit", () => {
        const id = $("editStudentId")?.value || "";
        const shift = $("editStudentShift")?.value || "manha";

        [900, 1800, 3500].forEach((delay) => {
          setTimeout(async () => {
            try {
              await updateStudentShiftById(id, shift);
              await renderStudentsByShift();
            } catch (error) {
              console.warn("INTEGRO: turno editado ainda não foi salvo.", error);
            }
          }, delay);
        });
      });
    }
  }

  function attachEditFill() {
    document.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-edit-student]");
      if (!button) return;

      const studentId = button.getAttribute("data-edit-student");
      setTimeout(async () => {
        try {
          const currentProfile = await getProfile();
          const { data, error } = await client
            .from("students")
            .select("id, shift")
            .eq("id", studentId)
            .eq("school_id", currentProfile.school_id)
            .maybeSingle();

          if (error && /shift|column/i.test(error.message || "")) {
            shiftColumnAvailable = false;
            return;
          }

          value("editStudentShift", normalizeShift(data?.shift || "manha"));
        } catch (error) {
          console.warn("INTEGRO: não foi possível preencher o turno do aluno.", error);
        }
      }, 300);
    });
  }

  function attachFiltersAndHooks() {
    attachShiftPersistence();
    attachEditFill();

    document.addEventListener("click", (event) => {
      if (
        event.target.closest("[data-enroll-student]") ||
        event.target.closest("[data-delete-student]") ||
        event.target.closest("#cancelStudentEdit") ||
        event.target.closest("#closeStudentEdit")
      ) {
        setTimeout(renderStudentsByShift, 1200);
        setTimeout(renderStudentsByShift, 3000);
      }
    });
  }

  async function start() {
    addStyles();
    ensureInactiveMetric();
    ensureShiftFields();
    ensureFilters();
    attachFiltersAndHooks();

    setTimeout(renderStudentsByShift, 1200);
    setTimeout(renderStudentsByShift, 3000);
    setInterval(() => {
      if (document.getElementById("painel-alunos")) {
        ensureShiftFields();
        ensureFilters();
      }
    }, 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
