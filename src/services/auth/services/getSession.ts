"use server";
import { auth } from "@/services/auth";

export const getSession = async () => {
  const session: any = await auth();
  return session?.user;
};
