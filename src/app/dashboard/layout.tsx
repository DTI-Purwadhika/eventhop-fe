import { Sidebar } from "@/components/layouts";
import DashboardHead from "@/components/layouts/Header/DashboardHead";
import type { ChildType } from "@/shares/types";

const RootLayout = ({ children }: ChildType) => (
  <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
    <div className="hidden border rounded-lg lg:block m-4">
      <Sidebar />
    </div>
    <div className="flex flex-col max-h-screen">
      <header className="flex lg:hidden h-14 items-center gap-4 border-b bg-muted/40 px-4">
        <DashboardHead />
      </header>
      <main className="flex flex-1 flex-col gap-4 py-4 px-6 lg:gap-6 lg:py-4 lg:px-4 overflow-y-auto">
        {children}
      </main>
    </div>
  </div>
);

export default RootLayout;
