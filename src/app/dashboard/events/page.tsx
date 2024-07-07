"use client";
import { Collection } from "@/components/elements";
import { columns } from "./type";
import { useState } from "react";
import { useEvents } from "@/hooks/useEvent";
import { SearchType } from "@/shares/types/search";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const events: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
  };

  const { collectData, totalData } = useEvents(events);

  return (
    <Collection
      column={columns}
      limit={10}
      title="Events"
      data={collectData}
      totalData={totalData}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Events;
