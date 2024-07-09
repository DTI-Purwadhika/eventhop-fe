"use client";

import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants/routes";
import { Link } from "@/components/navigations";
import { BASE_PATH } from "@/constants/config";

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
        (link.route === "/dashboard" || link.route === `${BASE_PATH}/out`)
          ? "hidden"
          : isLogin && link.route === `${BASE_PATH}/in`
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
