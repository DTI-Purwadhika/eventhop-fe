import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MobileMenu } from "@/components/navigations";
import { Button } from "@/components/forms";

const Authbar = () => (
  <div className="flex w-32 justify-end gap-3">
    <SignedIn>
      <UserButton afterSignOutUrl="/" />
      <MobileMenu />
    </SignedIn>
    <SignedOut>
      <Button url="/sign-in">Login</Button>
    </SignedOut>
  </div>
);
export default Authbar;
