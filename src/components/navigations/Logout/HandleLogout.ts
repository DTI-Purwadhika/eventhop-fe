"use server";
import { signOut } from "@/services/auth";

export const HandleLogout = async () => {
  await signOut();
};
