import type { ChildType } from "@/types";
import { Header, Footer } from "@/components/layouts";

const RootLayout = ({ children }: ChildType) => (
  <div className="flex flex-col max-h-screen">
    <Header />
    <main
      className="flex-1 max-h-[90vh] overflow-y-auto rounded-2xl mx-4 mt-4 "
      style={{ scrollbarWidth: "none" }}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default RootLayout;
