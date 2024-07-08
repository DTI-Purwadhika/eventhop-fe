import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import getEvents from "@/services/event";

export const useEvents = ({
  filter,
  limit,
  page,
  category,
  sort,
  userId,
  status = "all",
}: SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const fetchTheEvent = async () => {
      const events = await getEvents({
        filter,
        limit,
        page,
        category,
        sort,
        userId,
        status,
      });
      if (events) {
        setCollectData(events.data);
        setTotalData(parseInt(events.totalPages!));
      }
    };
    fetchTheEvent();
  }, [filter, limit, page, category, sort, userId, status]);

  return { collectData, totalData };
};
