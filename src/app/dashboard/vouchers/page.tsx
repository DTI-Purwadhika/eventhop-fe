"use client";
import { usePromotion } from "@/hooks/usePromotion";
import { SearchType } from "@/shares/types/search";
import { useEffect, useState } from "react";
import { columns } from "./type";
import { DataTableCon } from "@/components/containers";
import { getSession } from "@/services/auth/services/getSession";

const Promotion = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;

  const promos: SearchType = {
    filter: `&user_id=${userId}`,
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
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
