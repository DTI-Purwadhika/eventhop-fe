import { handlers } from "@/services/auth";

pages: {
  signIn: "/sign/in";
  signOut: "/sign/out";
  verifyRequest: "/sign/verify";
  error: "/sign/error";
  newRequest: "/sign/onboarding";
  // newUser: '/auth/new-user';
}

export const { GET, POST } = handlers;
