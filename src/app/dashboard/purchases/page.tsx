"use client";
import { SearchType } from "@/shares/types/search";
import { useEffect, useState } from "react";
import { columns } from "./type";
import { DataTableCon } from "@/components/containers";
import { useTickets } from "@/hooks/useTicket";
import { getSession } from "@/services/auth/services/getSession";

const Transaction = () => {
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

  const transaction: SearchType = {
    filter: `&user_id=${userId}`,
    limit: 10,
    page: currentPage,
    category: "",
    sort: "newest",
  };

  const { collectData, totalData } = useTickets(transaction);

  return (
    <DataTableCon
      title="Purchases History"
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

export default Transaction;
