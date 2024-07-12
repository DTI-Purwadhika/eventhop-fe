import type { ChildType } from "@/shares/types";
import { Header, Footer } from "@/components/layouts";

const RootLayout = ({ children }: ChildType) => (
  <div className="flex flex-col h-screen overflow-hidden">
    <div className="mx-4 mt-4 -mb-4 md:hidden">
      <Header />
    </div>
    <div
      className="overflow-y-auto overflow-x-hidden rounded-2xl mx-4 mt-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="hidden md:block">
        <Header />
      </div>
      <main className="flex-1 min-h-[88vh]">{children}</main>
    </div>
    <Footer />
  </div>
);

export default RootLayout;
