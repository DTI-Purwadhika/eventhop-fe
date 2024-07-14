"use client";

import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants/routes";
import { Link, Logout } from "@/components/navigations";
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
      className={`md:px-4 md:py-2 rounded-2xl hover:bg-slate-200 hover:text-primary-500 ${
        pathName === link.route && "text-primary-500"
      } p-medium-16 whitespace-nowrap ${
        !isLogin && link.route === "/dashboard"
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
    <ul className="flex w-full flex-col items-start gap-4 md:flex-row md:justify-evenly">
      <MenuItem pathName={GetPathName} isLogin={isLogin} />
      <li
        className={`p-medium-16 whitespace-nowrap hover:bg-slate-200 md:px-4 md:py-2 rounded-2xl hover:text-primary-500 ${
          isLogin ? "flex" : "hidden"
        }`}
      >
        <Logout>Logout</Logout>
      </li>
    </ul>
  );
};

export default Menubar;
