import type { ChildType } from "@/types";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { bodyFont } from "@/assets/Font";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Event Hop",
  description: "Hop to your next Event!",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }: ChildType) => (
  <html lang="en" className="overflow-hidden">
    <body className={bodyFont}>
      <SessionProvider>{children}</SessionProvider>
    </body>
  </html>
);

export default RootLayout;
