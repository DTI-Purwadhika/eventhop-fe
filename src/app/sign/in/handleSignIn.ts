"use server";
import { signIn } from "@/services/auth";

export const handleSignIn = async (email: string, password: string) => {
  await signIn("credentials", {
    email,
    password,
  });
};
