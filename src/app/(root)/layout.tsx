import type { ChildType } from "@/types";
import { Header, Footer } from "@/components/layouts";

const RootLayout = ({ children }: ChildType) => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default RootLayout;
