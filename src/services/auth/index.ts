import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import checkUser from "./services/checkUser";
import { BASE_PATH } from "@/constants/config";

const authHandler = async (email: string, password: string) => {
  try {
    const authData = process.env.NEXT_PUBLIC_EVENTH0P_API;
    const response = await fetch(`${authData}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    const data = await response;

    return data.data;
  } catch (error) {
    console.error("Can't catch data:", error);
  }
};

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "hopper" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials: any) => {
        const user = await authHandler(credentials.email, credentials.password);
        return user
          ? {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.roles,
              image: user.avatarUrl,
              token: user.token,
              refreshToken: user.refreshToken,
            }
          : null;
      },
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    //   maxAge: 60 * 60,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const userLogged = await checkUser(user.email || "");

      if (userLogged) {
        return true;
      }
      return false;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.token = token.token;
        session.user.refreshToken = token.refreshToken;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.token = user.token;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60,
    updateAge: 3 * 59 * 60,
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
    },
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
