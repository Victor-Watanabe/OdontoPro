"use server";

import { signIn } from "@/lib/auth";

type LoginType = "google" | "github";

export async function handleRegster(provider: LoginType) {
  await signIn(provider, { redirectTo: "/dashboard" });
}
