import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/elements";
import { Link, Menubar, Search } from "../";
import Icon from "@/assets/Icon";

const Trigger = () => (
  <SheetTrigger className="align-middle">
    <Icon name="Menu" />
  </SheetTrigger>
);

const Content = () => (
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image src="/assets/images/logo.png" alt="logo" width={128} height={38} />
    <Separator className="border border-gray-50" />
    <Menubar isLogin={true} />
    <Link href="/api/auth/signout">Sign Out</Link>
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
