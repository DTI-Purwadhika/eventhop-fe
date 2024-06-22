import { Image } from "@/components/elements";
import { Link } from "@/components/navigations";

export const Logo = () => (
  <Link href="/">
    <Image
      src="/assets/images/logo.png"
      alt="Event Hop logo"
      width={128}
      height={128}
    />
  </Link>
);
