"use client";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { useEvents } from "@/hooks/useEvent";
import { useState } from "react";

const EventCon = ({
  filter = "",
  limit = 10,
  sort = "nameAz",
  category = "all",
}: SearchType) => {
  const [currentPage, setCurrentPage] = useState(1);

  const events: SearchType = {
    filter: filter,
    limit: limit,
    page: currentPage,
    category: category,
    sort: sort,
  };

  const { collectData, totalData } = useEvents(events);

  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <Collection
        title="Events"
        data={collectData}
        totalData={totalData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filter={filter}
        limit={4}
      />
    </section>
  );
};

export default EventCon;
