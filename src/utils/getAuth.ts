import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import getUserById from "./getUser";
// import TwitterProvider from "next-auth/providers/twitter";
// import FacebookProvider from "next-auth/providers/facebook";
// import EmailProvider from "next-auth/providers/nodemailer";

// import TikTok from "next-auth/providers/tiktok";

export const BASE_PATH = "/api/auth";

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
        expiresInMins: 1,
      }),
    }).then((res) => res.json());
    console.log("response: ", response);

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
        console.log("user: ", user);
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
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),
    // TikTok,
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log(user.email);
      if (await getUserById(user.email || "")) {
        return true;
      }
      return false;
    },
    async session({ session, user }) {
      console.log("session: ", session.sessionToken);
      if (new Date(session.expires) < new Date()) {
        console.log("session expired");
        signOut();
      }
      return session;
    },
    async jwt({ token }) {
      console.log("token: ", token);
      return token;
    },
  },

  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
