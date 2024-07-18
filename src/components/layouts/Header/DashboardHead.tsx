import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeChanger } from "@/components/elements";
import { Link, Logout, UserButton } from "@/components/navigations";
import { Button } from "@/components/ui/button";
import { Home, Menu, PowerCircle } from "lucide-react";
import Sidebar from "../Sidebar";

const DashboardHead = () => {
  return (
    <div className="flex h-14 w-full items-center gap-4 justify-between border-b bg-muted/40 px-2 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="h-full rounded-r-2xl bg-card">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2">
        <ThemeChanger />
        <Link
          href="/"
          className="border p-2 rounded-lg bg-primary-500 text-primary-foreground transition-all hover:bg-primary-500/80"
        >
          <Home />
        </Link>
        <Logout className="border p-2 rounded-lg bg-destructive text-destructive-foreground transition-all hover:bg-destructive/80">
          <PowerCircle />
        </Logout>
      </div>
    </div>
  );
};
export default DashboardHead;
