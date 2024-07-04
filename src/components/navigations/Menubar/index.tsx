"use client";

import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants/routes";
import { Link } from "@/components/navigations";

const MenuItem = ({
  pathName,
  isLogin,
}: {
  pathName: string;
  isLogin: boolean;
}) =>
  headerLinks.map((link) => (
    <li
      key={link.route}
      className={`${
        pathName === link.route && "text-primary-500"
      } p-medium-16 whitespace-nowrap ${
        !isLogin &&
        (link.route === "/dashboard" || link.route === "/sign/signout")
          ? "hidden"
          : isLogin && link.route === "/sign/signin"
            ? "hidden"
            : "flex"
      }`}
    >
      <Link href={link.route}>{link.label}</Link>
    </li>
  ));

const Menubar = ({ isLogin }: { isLogin: boolean }) => {
  const GetPathName = usePathname();
  return (
    <ul className="flex w-full flex-col items-start gap-8 md:gap-12 md:flex-row md:justify-evenly">
      <MenuItem pathName={GetPathName} isLogin={isLogin} />
    </ul>
  );
};

export default Menubar;
