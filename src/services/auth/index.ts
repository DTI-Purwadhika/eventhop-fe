import NextAuth, { User, NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import checkUser from "./services/checkUser";
import { BASE_PATH } from "@/constants/config";
// import EmailProvider from "next-auth/providers/nodemailer";

// dummy
// username: "emilys",
// password: "emilyspass",
const authHandler = async (email: string, password: string) => {
  const eventData = process.env.NEXT_PUBLIC_LOG_API;

  try {
    const response = await fetch(`${eventData}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    }).then((res) => res.json());

    if (response.message === "Invalid credentials") {
      throw new Error("Failed to fetch data");
    }

    const data = await response;
    return data;
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
              role: "user",
              username: user.username,
              image: user.image,
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
      if (await checkUser(user.email || "")) {
        return true;
      }
      return false;
    },
    async session({ session, token }: any) {
      session.user = token.user as User;
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60,
    updateAge: 20 * 60,
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
