"use client";

import { ChildType } from "@/shares/types";
import { createContext, useState } from "react";

const DashboardContext = createContext([{}, () => {}]);

const DashboardProvider = ({ children }: ChildType) => {
  const [activePage, setActivePage] = useState("Events");
  return (
    <DashboardContext.Provider value={[activePage, setActivePage]}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
