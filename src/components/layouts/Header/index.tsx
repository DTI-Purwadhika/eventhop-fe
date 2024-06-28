import { Logo } from "@/assets/Logo";
import { Menubar, Authbar, Search } from "@/components/navigations";
import { SignedIn } from "@clerk/nextjs";

const Header = () => (
  <header className="w-full border-b">
    <div className="wrapper flex justify-between items-center">
      <div className="flex">
        <Logo />
      </div>
      <nav className="md:flex-between hidden w-full max-w-xs">
        <SignedIn>
          <Menubar />
        </SignedIn>
      </nav>
      <Authbar />
    </div>
  </header>
);

export default Header;
