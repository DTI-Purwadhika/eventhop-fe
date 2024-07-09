import type { ChildType } from "@/shares/types";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
