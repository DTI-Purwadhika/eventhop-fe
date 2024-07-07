"use client";
import { useFeedbacks } from "@/hooks/useFeedback";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { useState } from "react";
import { columns } from "./type";

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const events: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
  };

  const { collectData, totalData } = useFeedbacks(events);

  return (
    <Collection
      column={columns}
      limit={10}
      title="Feedbacks"
      data={collectData}
      totalData={totalData}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noCrud
    />
  );
};

export default Feedback;
