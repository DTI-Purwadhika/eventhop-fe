"use client";
import { Link } from "@/components/navigations";
import { CommandItem } from "@/components/ui/command";
import Icon, { Icons } from "@/shares/assets/Icon";
import { usePathname } from "next/navigation";
import { Text } from "@/components/typhographies";

const SidebarItem = ({
  icon,
  label,
  route,
}: {
  icon: keyof typeof Icons;
  label: string;
  route: string;
}) => {
  const GetPathName = usePathname();

  return (
    <CommandItem
      className={GetPathName === `/dashboard${route}` ? "bg-slate-300" : ""}
    >
      <Link href={`/dashboard${route}`} size="full">
        <Icon name={icon} className="ml-2 mr-2 h-4 w-4" />
        <Text>{label}</Text>
      </Link>
    </CommandItem>
  );
};

export default SidebarItem;
