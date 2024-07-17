import { Logo } from "@/shares/assets/Logo";
import { auth } from "@/services/auth";
import { Menubar, Authbar } from "@/components/navigations";
import { Heading } from "@/components/typhographies";
import { Button } from "@/components/forms";

const Header = async () => {
  const session = await auth();

  return (
    <header className="w-screen relative  z-50 md:-mx-4 md:-mt-2">
      <div className="w-full flex justify-between static md:absolute">
        <div className="bg-card rounded-br-full pl-1 pr-7 pb-7 hidden md:block">
          <Logo />
        </div>
        <Heading
          size="h3"
          weight="bold"
          className="block md:hidden mb-4 h3-bold"
        >
          Event Hop
        </Heading>
        <nav className="md:flex hidden w-fit px-4 bg-card rounded-bl-3xl h-fit pb-1 md:fixed md:right-0 ">
          <Menubar isLogin={session ? true : false} />
        </nav>
        <div className="flex md:hidden mr-8 mt-2 mb-4">
          {session?.user ? (
            <Authbar />
          ) : (
            <Button size="sm" className="-mt-1">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
