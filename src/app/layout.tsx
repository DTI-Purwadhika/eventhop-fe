import type { ChildType } from "@/types";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
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
  <ClerkProvider>
    <html lang="en">
      <body className={bodyFont}>{children}</body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
