"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { stripe } from "@/utils/stripe";

export async function createPortalCustomer() {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      sessionId: "",
      error: "Usuário Não localizado.",
    };
  }

  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
    },
  });

  if (!user) {
    return {
      sessionId: "",
      error: "Usuário Não localizado.",
    };
  }

  const sessionId = user.stripe_customer_id;

  if (!sessionId) {
    return {
      sessionId: "",
      error: "Usuário Não localizado.",
    };
  }

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: sessionId,
      return_url: process.env.STRIPE_SUCCESS_URL as string,
    });

    return {
      sessionId: portalSession.url,
    };
  } catch (err) {
    console.log("Erro ao tentar acessar no portal: ", err);
    return {
      sessionId: "",
      error: "Usuário Não localizado.",
    };
  }
}
