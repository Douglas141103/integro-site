import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

function normalizeEmail(email: string) {
  return String(email || "").trim().toLowerCase();
}

async function findAuthUserByEmail(adminClient: any, email: string) {
  const target = normalizeEmail(email);
  let page = 1;
  const perPage = 1000;

  while (page <= 20) {
    const { data, error } = await adminClient.auth.admin.listUsers({
      page,
      perPage,
    });

    if (error) {
      throw error;
    }

    const users = data?.users || [];
    const found = users.find((user: any) => normalizeEmail(user.email) === target);

    if (found) {
      return found;
    }

    if (users.length < perPage) {
      break;
    }

    page++;
  }

  return null;
}

async function loadCallerProfile(
  callerClient: any,
  adminClient: any,
  userId: string,
  userEmail: string
) {
  const { data: callerProfile, error: callerProfileError } = await callerClient
    .from("profiles")
    .select("id, full_name, role, school_id")
    .eq("id", userId)
    .maybeSingle();

  if (callerProfile) {
    return { profile: callerProfile, error: null };
  }

  const { data: adminProfile, error: adminProfileError } = await adminClient
    .from("profiles")
    .select("id, full_name, role, school_id")
    .eq("id", userId)
    .maybeSingle();

  if (adminProfile) {
    return { profile: adminProfile, error: null };
  }

  if (userEmail) {
    const { data: emailProfile, error: emailProfileError } = await adminClient
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("contact_email", normalizeEmail(userEmail))
      .maybeSingle();

    if (emailProfile) {
      return { profile: emailProfile, error: null };
    }

    if (emailProfileError) {
      return { profile: null, error: emailProfileError };
    }
  }

  return {
    profile: null,
    error: callerProfileError || adminProfileError || null,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return jsonResponse({ error: "Método não permitido. Use POST." }, 405);
    }

    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
      return jsonResponse({ error: "Sem autorização." }, 401);
    }

    const token = authHeader.replace("Bearer ", "");

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

    const serviceKey =
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ??
      Deno.env.get("INTEGRO_SERVICE_ROLE_KEY") ??
      "";

    if (!supabaseUrl || !anonKey || !serviceKey) {
      return jsonResponse(
        {
          error:
            "Variáveis SUPABASE_URL, SUPABASE_ANON_KEY ou chave service role não configuradas. Verifique os Secrets da Edge Function.",
        },
        500
      );
    }

    const callerClient = createClient(supabaseUrl, anonKey, {
      global: {
        headers: {
          Authorization: authHeader,
        },
      },
    });

    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: authData, error: authError } =
      await callerClient.auth.getUser(token);

    if (authError || !authData.user) {
      return jsonResponse({ error: "Usuário não autenticado." }, 401);
    }

    const callerUserId = authData.user.id;
    const callerEmail = normalizeEmail(authData.user.email || "");

    const { profile: callerProfile, error: callerProfileError } =
      await loadCallerProfile(callerClient, adminClient, callerUserId, callerEmail);

    if (callerProfileError) {
      return jsonResponse(
        {
          error:
            "Erro ao carregar perfil do usuário administrador: " +
            callerProfileError.message,
        },
        403
      );
    }

    if (!callerProfile) {
      return jsonResponse(
        {
          error:
            "Perfil do usuário administrador não encontrado. Verifique se o usuário logado existe na tabela profiles com o mesmo UID do Authentication.",
          uid_logado: callerUserId,
          email_logado: callerEmail,
        },
        403
      );
    }

    const allowedRoles = ["integro_admin", "diretor", "coordenacao"];

    if (!allowedRoles.includes(callerProfile.role)) {
      return jsonResponse(
        {
          error: "Sem permissão para criar login da família.",
          perfil_encontrado: callerProfile.role,
        },
        403
      );
    }

    const body = await req.json();

    const full_name = String(body.full_name || "").trim();
    const email = normalizeEmail(body.email || "");
    const password = String(body.password || "").trim();
    const school_id = body.school_id;
    const student_id = body.student_id;
    const relation_type = body.relation_type || "responsavel";
    const contact_phone = body.contact_phone || null;
    const cpf = body.cpf || null;

    if (!full_name || !email || !password || !school_id || !student_id) {
      return jsonResponse(
        {
          error: "Preencha nome, e-mail, senha, escola e aluno.",
        },
        400
      );
    }

    if (password.length < 6) {
      return jsonResponse(
        {
          error: "A senha precisa ter pelo menos 6 caracteres.",
        },
        400
      );
    }

    if (
      callerProfile.role !== "integro_admin" &&
      callerProfile.school_id !== school_id
    ) {
      return jsonResponse(
        {
          error: "Você só pode cadastrar família da sua própria escola.",
        },
        403
      );
    }

    const { data: student, error: studentError } = await adminClient
      .from("students")
      .select("id, school_id, full_name")
      .eq("id", student_id)
      .eq("school_id", school_id)
      .maybeSingle();

    if (studentError || !student) {
      return jsonResponse(
        {
          error: "Aluno não encontrado na escola informada.",
        },
        400
      );
    }

    let authUser = await findAuthUserByEmail(adminClient, email);
    let userCreatedNow = false;

    // The existing-student access form must never reset an existing account.
    if (body.create_only === true && authUser) {
      return jsonResponse({
        error: "Este e-mail já possui uma conta. Nenhuma senha foi alterada. Use a recuperação de acesso ou confira o vínculo existente.",
        code: "account_exists",
      }, 409);
    }

    if (!authUser) {
      const { data: createdUser, error: createUserError } =
        await adminClient.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: {
            full_name,
            role: "responsavel",
          },
        });

      if (createUserError || !createdUser.user) {
        return jsonResponse(
          {
            error:
              createUserError?.message ??
              "Erro ao criar usuário no Authentication.",
          },
          400
        );
      }

      authUser = createdUser.user;
      userCreatedNow = true;
    } else {
      const { error: updateAuthError } =
        await adminClient.auth.admin.updateUserById(authUser.id, {
          password,
          email_confirm: true,
          user_metadata: {
            ...(authUser.user_metadata || {}),
            full_name,
            role: "responsavel",
          },
        });

      if (updateAuthError) {
        return jsonResponse(
          {
            error:
              "E-mail já existia, mas não foi possível atualizar a senha do responsável: " +
              updateAuthError.message,
          },
          400
        );
      }
    }

    const familyUserId = authUser.id;

    const { data: existingProfile, error: existingProfileError } =
      await adminClient
        .from("profiles")
        .select("id, role")
        .eq("id", familyUserId)
        .maybeSingle();

    if (existingProfileError) {
      return jsonResponse(
        {
          error:
            "Erro ao verificar profile existente: " +
            existingProfileError.message,
        },
        400
      );
    }

    if (existingProfile?.role && existingProfile.role !== "responsavel") {
      return jsonResponse(
        {
          error:
            "Este e-mail já está vinculado a outro tipo de perfil: " +
            existingProfile.role,
        },
        400
      );
    }

    const { error: profileError } = await adminClient
      .from("profiles")
      .upsert(
        {
          id: familyUserId,
          full_name,
          role: "responsavel",
          school_id,
          contact_email: email,
          contact_phone,
          active: true,
        },
        {
          onConflict: "id",
        }
      );

    if (profileError) {
      return jsonResponse(
        {
          error:
            "Erro ao criar/atualizar perfil do responsável: " +
            profileError.message,
        },
        400
      );
    }

    const { data: existingLink, error: existingLinkError } = await adminClient
      .from("student_guardians")
      .select("id")
      .eq("student_id", student_id)
      .eq("guardian_profile_id", familyUserId)
      .maybeSingle();

    if (existingLinkError) {
      return jsonResponse(
        {
          error:
            "Erro ao verificar vínculo do responsável com o aluno: " +
            existingLinkError.message,
        },
        400
      );
    }

    if (!existingLink) {
      const { error: linkError } = await adminClient
        .from("student_guardians")
        .insert({
          student_id,
          guardian_profile_id: familyUserId,
          relation_type,
        });

      if (linkError) {
        return jsonResponse(
          {
            error: "Erro ao vincular responsável ao aluno: " + linkError.message,
          },
          400
        );
      }
    }

    return jsonResponse(
      {
        success: true,
        user_id: familyUserId,
        guardian_profile_id: familyUserId,
        created_now: userCreatedNow,
        student_id,
        message: userCreatedNow
          ? "Login do responsável criado e vinculado ao aluno."
          : "Responsável já existia no Auth; perfil, senha e vínculo atualizados com sucesso.",
      },
      200
    );
  } catch (err) {
    return jsonResponse(
      {
        error: err instanceof Error ? err.message : "Erro inesperado.",
      },
      500
    );
  }
});
