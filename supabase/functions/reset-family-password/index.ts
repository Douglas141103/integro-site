import { createClient } from "npm:@supabase/supabase-js@2.118.0";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};
const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") return reply({ error: "Use POST." }, 405);
  const authorization = req.headers.get("Authorization") || "";
  if (!authorization.startsWith("Bearer ")) return reply({ error: "Entre novamente no portal." }, 401);
  try {
    const url = Deno.env.get("SUPABASE_URL") || "";
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || Deno.env.get("INTEGRO_SERVICE_ROLE_KEY") || "";
    if (!url || !key) return reply({ error: "Serviço de acesso indisponível." }, 503);
    const admin = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: caller, error: authError } = await admin.auth.getUser(authorization.slice(7));
    if (authError || !caller?.user) return reply({ error: "Sua sessão expirou. Entre novamente." }, 401);
    // Authorization comes only from the persisted profile belonging to the verified user ID.
    const { data: profile, error: profileError } = await admin.from("profiles")
      .select("id, role, school_id, active").eq("id", caller.user.id).maybeSingle();
    if (profileError || !profile || profile.active !== true ||
      !["integro_admin", "diretor", "coordenacao"].includes(profile.role)) {
      return reply({ error: "Sem permissão para alterar senhas de famílias." }, 403);
    }
    const body = await req.json();
    if (!["inspect", "reset"].includes(body.action) || typeof body.student_id !== "string") {
      return reply({ error: "Selecione o aluno e a operação." }, 400);
    }
    const { data: student, error: studentError } = await admin.from("students")
      .select("id, full_name, school_id").eq("id", body.student_id).maybeSingle();
    if (studentError || !student || (profile.role !== "integro_admin" && profile.school_id !== student.school_id)) {
      return reply({ error: "Aluno não encontrado na sua escola." }, 403);
    }
    const { data: links, error: linkError } = await admin.from("student_guardians")
      .select("guardian_profile_id").eq("student_id", student.id);
    if (linkError) return reply({ error: "Não foi possível conferir o vínculo da família." }, 503);
    if (!links?.length) return reply({ error: "Este aluno ainda não tem login. Use Criar acesso da família." }, 409);
    const ids = [...new Set(links.map(link => link.guardian_profile_id))];
    if (ids.length !== 1) return reply({ error: "Há mais de um responsável com login. Solicite a conferência dos vínculos antes de trocar a senha." }, 409);
    const targetId = ids[0];
    const { data: target, error: targetError } = await admin.from("profiles")
      .select("id, role, school_id, active").eq("id", targetId).maybeSingle();
    if (targetError || !target || target.role !== "responsavel" || target.active !== true || target.school_id !== student.school_id) {
      return reply({ error: "O perfil vinculado não é um acesso de família ativo desta escola." }, 409);
    }
    const { data: account, error: accountError } = await admin.auth.admin.getUserById(targetId);
    if (accountError || !account?.user?.email) return reply({ error: "Login vinculado não encontrado." }, 409);
    const { data: sharedLinks, error: sharedError } = await admin.from("student_guardians")
      .select("students(full_name, school_id)").eq("guardian_profile_id", targetId);
    if (sharedError || !sharedLinks?.length) return reply({ error: "Não foi possível conferir os alunos deste login." }, 503);
    const pupils = sharedLinks.flatMap(link => Array.isArray(link.students) ? link.students : link.students ? [link.students] : []);
    if (!pupils.length || (profile.role !== "integro_admin" && pupils.some(pupil => pupil.school_id !== profile.school_id))) {
      return reply({ error: "Este acesso possui vínculos que precisam de revisão pelo administrador." }, 403);
    }
    const details = { user_id: targetId, email: account.user.email, student_name: student.full_name, students: pupils.map(pupil => pupil.full_name) };
    if (body.action === "inspect") return reply({ success: true, ...details });
    if (body.user_id !== targetId || body.email !== account.user.email) {
      return reply({ error: "O acesso vinculado mudou. Feche e abra a opção novamente." }, 409);
    }
    if (typeof body.password !== "string" || body.password.trim().length < 8 || body.password.length > 72) {
      return reply({ error: "Use uma senha de 8 a 72 caracteres." }, 400);
    }
    const { error: updateError } = await admin.auth.admin.updateUserById(targetId, { password: body.password });
    if (updateError) return reply({ error: "Não foi possível salvar a senha. " + updateError.message }, 400);
    return reply({ success: true, email: account.user.email, message: "Senha alterada com sucesso." });
  } catch {
    return reply({ error: "Não foi possível concluir. Confira os dados e tente novamente." }, 500);
  }
});
