"use client";
import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import getTickets from "@/services/ticket";

export const useTickets = ({
  filter,
  limit,
  page,
  sort,
  userId,
}: SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const fetchTheEvent = async () => {
      const ticket = await getTickets({
        filter,
        limit,
        page,
        sort,
        userId,
      });
      if (ticket) {
        setCollectData(ticket.data);
        setTotalData(parseInt(ticket.totalPages!));
      }
    };
    fetchTheEvent();
  }, [filter, limit, page, sort, userId]);

  return { collectData, totalData };
};
