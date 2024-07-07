import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import getFeedbacks from "@/services/feedback";

export const useFeedbacks = ({ filter, limit, page, sort }: SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const fetchTheEvent = async () => {
      const feedbacks = await getFeedbacks({
        filter,
        limit,
        page,
        sort,
      });
      if (feedbacks) {
        setCollectData(feedbacks.data);
        setTotalData(parseInt(feedbacks.totalPages!));
      }
    };
    fetchTheEvent();
  }, [filter, limit, page, sort]);

  return { collectData, totalData };
};
