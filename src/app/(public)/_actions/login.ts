"use server";

import { signIn } from "@/lib/auth";

export async function handleRegster(provider: string) {
  await signIn(provider, { redirectTo: "/dashboard" });
}
