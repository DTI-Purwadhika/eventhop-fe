import type { ChildType } from "@/types";
import { Header, Footer } from "@/components/layouts";
import { SessionProvider } from "next-auth/react";

const RootLayout = ({ children }: ChildType) => (
  <SessionProvider>
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </SessionProvider>
);

export default RootLayout;
