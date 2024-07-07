"use client";
import { usePromotion } from "@/hooks/usePromotion";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { useState } from "react";
import { columns } from "./type";

const Promotion = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const events: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
  };

  const { collectData, totalData } = usePromotion(events);

  return (
    <Collection
      column={columns}
      limit={10}
      title="Promotions"
      data={collectData}
      totalData={totalData}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Promotion;
