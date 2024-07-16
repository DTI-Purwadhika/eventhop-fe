"use client";
import { useFeedbacks } from "@/hooks/useFeedback";
import { SearchType } from "@/shares/types/search";
import { useState } from "react";
import { columns } from "./type";
import { DataTableCon } from "@/components/containers";

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const feedback: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
  };

  const { collectData, totalData } = useFeedbacks(feedback);

  return (
    <DataTableCon
      title="Feedbacks"
      columns={columns}
      data={collectData}
      totalData={totalData}
      limit={10}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noCrud
    />
  );
};

export default Feedback;
