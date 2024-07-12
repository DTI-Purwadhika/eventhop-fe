"use client";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { usePoints } from "@/hooks/usePoint";
import { useState } from "react";
import { columns } from "./type";
import { DataTableCon } from "@/components/containers";

const Point = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const point: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
  };

  const { collectData, totalData } = usePoints(point);

  return (
    <DataTableCon
      title="Points"
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

export default Point;
