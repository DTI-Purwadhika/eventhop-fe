import { Logo } from "@/assets/Logo";
import { auth } from "@/utils/getAuth";
import { Button } from "@/components/forms";
import { Menubar, Authbar } from "@/components/navigations";
import { Heading } from "@/components/typhographies";

const Header = async () => {
  const session = await auth();

  return (
    <header className="w-full flex justify-between md:fixed z-50 ">
      <div className="bg-white rounded-br-full pr-8 pb-8 hidden md:block">
        <Logo />
      </div>
      <Heading size="h3" className="block md:hidden mt-3 ml-4">
        Event Hop
      </Heading>
      <nav className="md:flex-between hidden w-full px-12 max-w-xs bg-white rounded-b-3xl h-fit py-2">
        <Menubar isLogin={session ? true : false} />
      </nav>
      <div className="mr-4 mt-2">
        {session?.user ? (
          <div>
            <div className="flex md:hidden ">
              <Authbar />
            </div>
            <Button
              url="/api/auth/signout"
              className="w-40 hidden md:block"
              variant="secondary"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button url="/api/auth/signin" className="w-40" variant="secondary">
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
