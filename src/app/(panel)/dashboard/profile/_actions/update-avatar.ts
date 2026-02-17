"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfileAvatar({
  avatarUrl,
}: {
  avatarUrl: string;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Usuário não localizado",
    };
  }

  if (!avatarUrl) {
    return {
      error: "Falha ao alterar imagem",
    };
  }
  try {
    await prisma.user.update({
      where: {
        id: session?.user?.id,
      },
      data: {
        image: avatarUrl,
      },
    });

    revalidatePath("/dashboard/profile");

    return {
      data: "Imagem Alterada com Sucesso",
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Falha ao Alterar Imagem",
    };
  }
}
