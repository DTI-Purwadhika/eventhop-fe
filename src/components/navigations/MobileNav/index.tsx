import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/elements";
import { Menubar } from "../";

const Trigger = () => (
  <SheetTrigger className="align-middle">
    <Image
      src="/assets/icons/menu.svg"
      alt="menu"
      width={24}
      height={24}
      className="cursor-pointer"
    />
  </SheetTrigger>
);

const Content = () => (
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image src="/assets/images/logo.png" alt="logo" width={128} height={38} />
    <Separator className="border border-gray-50" />
    <Menubar />
  </SheetContent>
);

const MobileNav = () => (
  <nav className="md:hidden">
    <Sheet>
      <Trigger />
      <Content />
    </Sheet>
  </nav>
);

export default MobileNav;
