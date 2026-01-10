"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { error, timeStamp } from "console";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const fomrSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  address: z.string().optional(),
  phone: z.string().optional(),
  status: z.boolean(),
  timeZone: z.string(),
  times: z.array(z.string()),
});

type FomrSchema = z.infer<typeof fomrSchema>;

export async function updateProfile(formData: FomrSchema) {
  const schema = fomrSchema.safeParse(formData);
  const session = await auth();
  if (!session?.user?.id) {
    return {
      error: "Usúario não encontrado",
    };
  }
  try {
    await prisma.user.update({
      where: {
        id: session?.user?.id,
      },
      data: {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        status: formData.status,
        timeZone: formData.timeZone,
        times: formData.times || [],
      },
    });

    revalidatePath("/dashboard/profile");

    return {
      data: "clinica atualizada com sucesso!",
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Falha ao tentar atualizar a clinica",
    };
  }
}
