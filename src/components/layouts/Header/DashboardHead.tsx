import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeChanger } from "@/components/elements";
import { UserButton } from "@/components/navigations";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
        <SheetContent
          side="left"
          className="h-[95vh] rounded-r-2xl bg-white mt-6"
        >
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4">
        <UserButton />
        <ThemeChanger />
      </div>
    </div>
  );
};
export default DashboardHead;
