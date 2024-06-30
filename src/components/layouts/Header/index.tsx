import { Logo } from "@/assets/Logo";
import { auth } from "@/utils/getAuth";
import { Button } from "@/components/forms";
import { Image } from "@/components/elements";
import { Menubar, Authbar, Search } from "@/components/navigations";

type Props = {};
const Header = async (props: Props) => {
  const session = await auth();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        <div className="flex">
          <Logo />
        </div>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <Menubar isLogin={session ? true : false} />
        </nav>
        {session?.user ? (
          <div>
            <div className="flex md:hidden">
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
