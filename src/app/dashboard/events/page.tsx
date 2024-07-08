"use client";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { useSession } from "next-auth/react";
import { useEvents } from "@/hooks/useEvent";
import { useState } from "react";
import { columns } from "./type";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session } = useSession();

  const events: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
    userId: session?.user?.id,
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
