import type { Metadata } from "next";
import type { ChildType } from "@/types";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
      <body className={poppins.variable}>{children}</body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
