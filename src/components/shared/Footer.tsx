import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-center flex-between flex-col gap-4 p-5 text-center wrapper sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Event Hop © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
