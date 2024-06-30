import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Icon, { Icons } from "@/assets/Icon";

import { adminLinks, organizerLinks, userLinks } from "@/constants";
import { Text } from "@/components/typhographies";
import { Link } from "..";

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

const Sidebar = () => {
  return (
    <Command className="pt-2 max-h-screen">
      <CommandInput placeholder="Type a menu..." />
      <CommandList className="max-h-screen py-2">
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="My Menu" className="ml-2">
          {userLinks.map((link, index) => (
            <SidebarItem
              key={index}
              icon={link.icon}
              label={link.label}
              route={link.route}
            />
          ))}
        </CommandGroup>
        <CommandGroup heading="Organizer" className="ml-2">
          {organizerLinks.map((link, index) => (
            <SidebarItem
              key={index}
              icon={link.icon}
              label={link.label}
              route={link.route}
            />
          ))}
        </CommandGroup>
        <CommandGroup heading="Admin" className="ml-2">
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
    </Command>
  );
};
export default Sidebar;
