import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import { getSession } from "@/services/auth/services/getSession";
import getPoints from "@/services/point";

export const usePoints = ({ filter, limit, page, sort }: SearchType) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;
  filter = `&user_id=${userId}`;

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
    if (userId) {
      fetchTheEvent();
    }
  }, [filter, limit, page, sort, userId]);

  return { collectData, totalData };
};
