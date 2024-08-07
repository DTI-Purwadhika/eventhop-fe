import { Icons } from "@/shares/assets/Icon";
import { BASE_PATH } from "./config";

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
    route: `${BASE_PATH}/in`,
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
    label: "My Tickets",
    route: "/tickets",
    icon: "Ticket",
  },
  // {
  //   label: "My Profile",
  //   route: "/profile",
  //   icon: "UserRound",
  // },
  {
    label: "My Referral",
    route: "/referral",
    icon: "UserRoundPlus",
  },
  {
    label: "My Points",
    route: "/points",
    icon: "Coins",
  },
  {
    label: "My Purchases",
    route: "/purchases",
    icon: "Barcode",
  },
  // {
  //   label: "Support Ticket",
  //   route: "/support",
  //   icon: "MessageCircleQuestion",
  // },
];

export const organizerLinks: {
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
    label: "Manage Event",
    route: "/events",
    icon: "Calendar",
  },
  {
    label: "Manage Promo",
    route: "/vouchers",
    icon: "TicketPercent",
  },
  {
    label: "Report",
    route: "/report",
    icon: "LineChart",
  },
  {
    label: "Transaction",
    route: "/transaction",
    icon: "ScanBarcode",
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
