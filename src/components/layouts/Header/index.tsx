import { Logo } from "@/assets/Logo";
import { auth } from "@/auth";
import { Button } from "@/components/forms";
import { Image } from "@/components/elements";
import { Menubar, Authbar, Search } from "@/components/navigations";
import AuthButton from "@/components/navigations/AuthButton/AuthButton.client";

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
        <AuthButton />
        {session?.user ? (
          // <Authbar />
          <div>
            <Image
              src={session.user.image!}
              alt="profile"
              width={50}
              height={50}
            />
          </div>
        ) : (
          <Button url="/api/auth/signin" className="w-40" variant="secondary">
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
