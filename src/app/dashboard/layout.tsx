import { Sidebar } from "@/components/layouts";
import DashboardHead from "@/components/layouts/Header/DashboardHead";
import type { ChildType } from "@/shares/types";

const RootLayout = ({ children }: ChildType) => (
  <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r md:block">
      <Sidebar />
    </div>
    <div className="flex flex-col">
      <header className="flex md:hidden h-14 items-center gap-4 border-b bg-muted/40 px-4">
        <DashboardHead />
      </header>
      <main className="flex flex-1 flex-col gap-4 py-4 px-6 lg:gap-6 lg:py-6 lg:px-8">
        {children}
      </main>
    </div>
  </div>
);

export default RootLayout;
