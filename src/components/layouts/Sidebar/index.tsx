import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Icon, { Icons } from "@/shares/assets/Icon";

import { adminLinks, organizerLinks, userLinks } from "@/constants/routes";
import { Text } from "@/components/typhographies";
import { Link, UserButton } from "@/components/navigations";
import BasicCard from "@/components/elements/EventCard/BasicCard";
import { ThemeChanger } from "@/components/elements";

const SidebarItem = ({
  icon,
  label,
  route,
}: {
  icon: keyof typeof Icons;
  label: string;
  route: string;
}) => (
  <CommandItem>
    <Link href={`/dashboard${route}`} size="full">
      <Icon name={icon} className="ml-2 mr-2 h-4 w-4" />
      <Text>{label}</Text>
    </Link>
  </CommandItem>
);

const Sidebar = () => (
  <div className="flex h-full max-h-screen flex-col gap-2">
    <div className="flex h-14 items-center justify-between gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      Event HOP!
      <div className="flex gap-2">
        <ThemeChanger />
        <UserButton />
      </div>
    </div>
    <div className="flex-1">
      <Command className="flex w-full items-start text-sm lg:text-base font-medium">
        <CommandList className="max-h-screen py-2 w-full">
          <CommandGroup heading="My Menu" className="ml-2 pl-4 pr-3">
            {userLinks.map((link, index) => (
              <SidebarItem
                key={index}
                icon={link.icon}
                label={link.label}
                route={link.route}
              />
            ))}
          </CommandGroup>
          <CommandGroup heading="Organizer" className="ml-2 pl-4 pr-3">
            {organizerLinks.map((link, index) => (
              <SidebarItem
                key={index}
                icon={link.icon}
                label={link.label}
                route={link.route}
              />
            ))}
          </CommandGroup>
          <CommandGroup heading="Admin" className="hidden ml-2 pl-4 pr-3">
            {adminLinks.map((link, index) => (
              <SidebarItem
                key={index}
                icon={link.icon}
                label={link.label}
                route={link.route}
              />
            ))}
          </CommandGroup>
        </CommandList>
        <div className="bottom-0 mt-auto">
          <BasicCard />
        </div>
      </Command>
    </div>
  </div>
);
export default Sidebar;
