import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import getReferrals from "@/services/referral";

export const useReferrals = ({ filter, limit, page, sort }: SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const fetchTheEvent = async () => {
      const referral = await getReferrals({
        filter,
        limit,
        page,
        sort,
      });
      if (referral) {
        setCollectData(referral.data);
        setTotalData(parseInt(referral.totalPages!));
      }
    };
    fetchTheEvent();
  }, [filter, limit, page, sort]);

  return { collectData, totalData };
};
