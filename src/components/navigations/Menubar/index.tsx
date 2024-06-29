"use client";

import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants";
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
        !isLogin && link.route === "/dashboard" ? "hidden" : "flex-center"
      }`}
    >
      <Link href={link.route}>{link.label}</Link>
    </li>
  ));

const Menubar = ({ isLogin }: { isLogin: boolean }) => {
  const GetPathName = usePathname();
  console.log(isLogin);
  return (
    <ul className="flex w-full flex-col items-start gap-5 md:gap-10 md:flex-row md:justify-center">
      <MenuItem pathName={GetPathName} isLogin={isLogin} />
    </ul>
  );
};

export default Menubar;
