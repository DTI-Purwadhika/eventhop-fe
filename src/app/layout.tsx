import type { ChildType } from "@/shares/types";
import type { Metadata } from "next";
import { NextAuthProvider } from "@/contexts/NextAuthContext";
import { bodyFont } from "@/shares/assets/Font";
import { Toaster } from "@/components/ui/sonner";

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
      <NextAuthProvider>
        {children}
        <Toaster />
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
