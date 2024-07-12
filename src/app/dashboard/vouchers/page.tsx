"use client";
import { usePromotion } from "@/hooks/usePromotion";
import { Collection } from "@/components/elements";
import { SearchType } from "@/shares/types/search";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { columns } from "./type";
import { DataTableCon } from "@/components/containers";

const Promotion = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session } = useSession();

  const promos: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
    userId: session?.user?.id,
  };

  const { collectData, totalData } = usePromotion(promos);

  return (
    <DataTableCon
      columns={columns}
      limit={10}
      title="Vouchers"
      data={collectData}
      totalData={totalData}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Promotion;
