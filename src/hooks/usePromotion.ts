import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import getPromotions from "@/services/promotion";

export const usePromotion = ({
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
      const feedbacks = await getPromotions({
        filter,
        limit,
        page,
        sort,
        userId,
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
