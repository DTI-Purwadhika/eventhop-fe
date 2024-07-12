"use client";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { useSession } from "next-auth/react";
import { usePoints } from "@/hooks/usePoint";
import { useState } from "react";
import { columns } from "./type";

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
    <Collection
      column={columns}
      limit={10}
      title="Points"
      data={collectData}
      totalData={totalData}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noCrud
    />
  );
};

export default Point;
