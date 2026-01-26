// Valida para verificar se o id do usuário é localizado no banco de dados.
// Caso seja validado, será retornado a assinatura como true e os serviços onde
// sejam igual a true (serviços ativos)
"use server";

import prisma from "@/lib/prisma";

export async function getInfoSchedule({ userId }: { userId: string }) {
  try {
    if (!userId) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        subscription: true,
        services: {
          where: {
            status: true,
          },
        },
      },
    });
    if (!user) {
      return null;
    }
    return user;
  } catch (err) {}
}
