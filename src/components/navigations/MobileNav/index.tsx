import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/elements";
import { Heading } from "@/components/typhographies";
import { Link, Menubar, Search } from "../";
import Icon from "@/shares/assets/Icon";

const Trigger = () => (
  <SheetTrigger className="align-middle">
    <Icon name="Menu" />
  </SheetTrigger>
);

const Content = () => (
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image
      src="/assets/images/logo.png"
      alt="logo"
      width={128}
      height={128}
      className="mt-4 mx-auto"
    />
    <Heading size="h3" align="center" className="-mt-6 mb-4 text-gray-800">
      Eventhop
    </Heading>
    <Menubar isLogin={true} />
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
