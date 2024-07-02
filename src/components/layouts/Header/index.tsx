import { Logo } from "@/assets/Logo";
import { auth } from "@/utils/getAuth";
import { Button } from "@/components/forms";
import { Menubar, Authbar } from "@/components/navigations";
import { Heading } from "@/components/typhographies";

const Header = async () => {
  const session = await auth();

  return (
    <header className="w-screen md:relative z-50 md:-mx-4 md:-mt-2">
      <div className="w-full flex justify-between md:absolute">
        <div className="bg-white rounded-br-full pl-1 pr-7 pb-7 hidden md:block">
          <Logo />
        </div>
        <Heading size="h3" className="block md:hidden mb-4">
          Event Hop
        </Heading>
        <nav className="md:flex hidden w-fit px-12 bg-white rounded-bl-3xl h-fit pb-2 md:pt-1">
          <Menubar isLogin={session ? true : false} />
        </nav>
        {session?.user && (
          <div className="flex md:hidden mr-8 mt-2 mb-4">
            <Authbar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
