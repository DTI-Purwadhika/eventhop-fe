import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import getPoints from "@/services/point";
import { useSession } from "next-auth/react";

export const usePoints = ({ filter, limit, page, sort }: SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const { data: session } = useSession();
  const user_id = session?.user?.id;
  filter = `&user_id=${user_id}`;

  useEffect(() => {
    const fetchTheEvent = async () => {
      const points = await getPoints({
        filter,
        limit,
        page,
        sort,
      });
      if (points) {
        setCollectData(points.data);
        setTotalData(parseInt(points.totalPages!));
      }
    };
    if (user_id) {
      fetchTheEvent();
    }
  }, [filter, limit, page, sort, user_id]);

  return { collectData, totalData };
};
