import { headerLinks } from "@/constants";
import { Link } from "@/components/navigations";
import { GetPathName } from "@/utils/getPathName";

const MenuItem = ({ pathName }: { pathName: string }) =>
  headerLinks.map((link) => (
    <li
      key={link.route}
      className={`${
        pathName === link.route && "text-primary-500"
      } flex-center p-medium-16 whitespace-nowrap`}
    >
      <Link href={link.route}>{link.label}</Link>
    </li>
  ));

const Menubar = () => (
  <ul className="flex w-full flex-col items-start gap-5 md:flex-row md:flex-between">
    <MenuItem pathName={GetPathName()} />
  </ul>
);

export default Menubar;
