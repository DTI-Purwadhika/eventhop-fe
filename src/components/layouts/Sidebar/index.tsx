import { adminLinks, organizerLinks, userLinks } from "@/constants/routes";
import { Command, CommandGroup, CommandList } from "@/components/ui/command";
import { Home, PowerCircle } from "lucide-react";
import { Link, Logout } from "@/components/navigations";
import { ThemeChanger } from "@/components/elements";
import { Logo } from "@/shares/assets/Logo";
import BasicCard from "@/components/elements/EventCard/BasicCard";
import SidebarItem from "./SidebarItem";
import { getSession } from "@/services/auth/services/getSession";

const Sidebar = async () => {
  const session = await getSession();
  const userRole = session?.role;

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="lg:flex h-14 items-center justify-between gap-4 border-b px-4 lg:h-[60px] lg:px-6 hidden">
        <div className="flex gap-2 ">
          <Link
            href="/"
            className="border p-2 rounded-lg bg-primary-500 text-primary-foreground transition-all hover:bg-primary-500/80"
          >
            <Home />
          </Link>
          <Logout className="border p-2 rounded-lg bg-destructive text-destructive-foreground transition-all hover:bg-destructive/80">
            <PowerCircle />
          </Logout>
        </div>
        <ThemeChanger />
      </div>
      <div className="flex lg:hidden items-center mx-auto">
        <Logo />
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
            <CommandGroup
              heading="Organizer"
              className={userRole === "organizer" ? "ml-2 pl-4 pr-3" : "hidden"}
            >
              {userRole === "organizer" &&
                organizerLinks.map((link, index) => (
                  <SidebarItem
                    key={index}
                    icon={link.icon}
                    label={link.label}
                    route={link.route}
                  />
                ))}
            </CommandGroup>
            <CommandGroup heading="Admin" className="hidden ml-2 pl-4 pr-3">
              {userRole === "admin" &&
                adminLinks.map((link, index) => (
                  <SidebarItem
                    key={index}
                    icon={link.icon}
                    label={link.label}
                    route={link.route}
                  />
                ))}
            </CommandGroup>
          </CommandList>
          {userRole !== "organizer" && (
            <div className="bottom-0 mt-auto mb-2 md:-mb-2">
              <BasicCard />
            </div>
          )}
        </Command>
      </div>
    </div>
  );
};
export default Sidebar;
