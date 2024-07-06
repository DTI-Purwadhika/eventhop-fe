"use client";

import { useEffect, useState } from "react";
import { CollectionType } from "./type";
import { DataTableCon } from "@/components/containers";
import { SearchType } from "@/shares/types/search";
import { getEvents } from "@/services/event";
import CardList from "../CardList";

const Collection = ({
  filter = "",
  column,
  limit = 6,
  category,
  type,
  sort = "nameAz",
  isSmall = false,
  collection = "card",
}: CollectionType & SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTheEvent = async ({ filter, limit, page }: SearchType) => {
      const events = await getEvents({
        filter,
        limit,
        page,
        category,
        sort,
      });
      if (events) {
        setCollectData(events.data);
        setTotalData(parseInt(events.totalPages || "0"));
      }
    };
    const page = currentPage;
    fetchTheEvent({ filter, limit, page });
  }, [currentPage, filter, limit, category, sort]);

  let dataCollection =
    collection === "card" ? (
      <CardList
        data={collectData}
        totalData={totalData}
        limit={limit}
        currentPage={currentPage}
        type={type}
        isSmall={isSmall}
        setCurrentPage={setCurrentPage}
      />
    ) : (
      column && (
        <DataTableCon
          title=""
          description=""
          columns={column}
          data={collectData}
          totalData={totalData}
          limit={limit}
          currentPage={currentPage}
          type={type}
          setCurrentPage={setCurrentPage}
        />
      )
    );

  return dataCollection;
};

export default Collection;
