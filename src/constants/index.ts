import { Icons } from "@/assets/Icon";

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Events",
    route: "/events",
  },
  {
    label: "My Dashboard",
    route: "/dashboard",
  },
  {
    label: "Login",
    route: "/api/auth/signin",
  },
  {
    label: "Logout",
    route: "/api/auth/signout",
  },
];

export const userLinks: {
  label: string;
  route: string;
  icon: keyof typeof Icons;
}[] = [
  {
    label: "Home",
    route: "/",
    icon: "Home",
  },
  {
    label: "My Events",
    route: "/tickets",
    icon: "Ticket",
  },
  {
    label: "My Profile",
    route: "/profile",
    icon: "UserRound",
  },
  {
    label: "Support Ticket",
    route: "/support",
    icon: "MessageCircleQuestion",
  },
];

export const organizerLinks: {
  label: string;
  route: string;
  icon: keyof typeof Icons;
}[] = [
  {
    label: "Manage Event",
    route: "/events",
    icon: "Calendar",
  },
  {
    label: "Report",
    route: "/report",
    icon: "LineChart",
  },
  {
    label: "Feedback",
    route: "/feedback",
    icon: "MessageCircleMore",
  },
];

export const adminLinks: {
  label: string;
  route: string;
  icon: keyof typeof Icons;
}[] = [
  {
    label: "Home",
    route: "/",
    icon: "Home",
  },
  {
    label: "Event Management",
    route: "/event-management",
    icon: "CalendarRange",
  },
  {
    label: "User Management",
    route: "/user-management",
    icon: "UsersRound",
  },
  {
    label: "Support Ticket",
    route: "/support",
    icon: "MessageCircleQuestion",
  },
];

export const eventDefaultValues = {
  name: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: 0,
  url: "",
};
