"use client";
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
import { SidebarContext } from "@/contexts/SidebarContext";
import { useContext } from "react";
import { Link } from "..";

const SidebarItem = ({
  icon,
  label,
  route,
  activePage,
  setActivePage,
}: {
  icon: keyof typeof Icons;
  label: string;
  route: string;
  activePage: any;
  setActivePage: any;
}) => (
  <CommandItem className={`${activePage === route && "bg-accent"}`}>
    <Link href="#" onClick={() => setActivePage(route)} size="full">
      <Icon name={icon} className="ml-2 mr-2 h-4 w-4" />
      <Text>{route === activePage ? <b>{label}</b> : label}</Text>
    </Link>
  </CommandItem>
);

const Sidebar = () => {
  const [activePage, setActivePage] = useContext(SidebarContext);

  return (
    <Command className="pt-2 h-screen">
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
              activePage={activePage}
              setActivePage={setActivePage}
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
              activePage={activePage}
              setActivePage={setActivePage}
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
              activePage={activePage}
              setActivePage={setActivePage}
            />
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
export default Sidebar;
