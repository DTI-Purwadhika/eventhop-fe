"use client";
import { SearchType } from "@/shares/types/search";
import { usePoints } from "@/hooks/usePoint";
import { useEffect, useState } from "react";
import { columns } from "./type";
import { DataTableCon } from "@/components/containers";
import { getSession } from "@/services/auth/services/getSession";

const Point = () => {
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

  const point: SearchType = {
    filter: `user_id=${userId}`,
    limit: 10,
    page: currentPage,
    category: "",
    sort: "newest",
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
