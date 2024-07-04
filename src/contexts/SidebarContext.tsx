"use client";

import { ChildType } from "@/shares/types";
import { createContext, useState } from "react";

const SidebarContext = createContext([{}, () => {}]);

const SidebarProvider = ({ children }: ChildType) => {
  const [activePage, setActivePage] = useState("home");
  return (
    <SidebarContext.Provider value={[activePage, setActivePage]}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
