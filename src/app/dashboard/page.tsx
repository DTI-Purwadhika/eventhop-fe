"use client";

import { SidebarContext } from "@/contexts/SidebarContext";
import { useContext } from "react";
import {
  Events,
  Report,
  Profile,
  Support,
  Tickets,
  Feedbacks,
  Manage,
} from "@/components/containers/Dashboard";

const Dashboard = () => {
  const [activePage] = useContext(SidebarContext);
  let currentPage = <div>Home</div>;
  switch (activePage) {
    case "/events":
      currentPage = <Events />;
      break;
    case "LineChart":
      currentPage = <Report />;
      break;
    case "/profile":
      currentPage = <Profile />;
      break;
    case "/support":
      currentPage = <Support />;
      break;
    case "/tickets":
      currentPage = <Tickets />;
      break;
    case "/feedback":
      currentPage = <Feedbacks />;
      break;
    case "/manage":
      currentPage = <Manage />;
      break;
  }
  return currentPage;
};
export default Dashboard;
