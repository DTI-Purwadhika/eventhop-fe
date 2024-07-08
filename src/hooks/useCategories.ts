import { useEffect, useState } from "react";
import getCategories from "@/services/category";

export const useCategories = () => {
  const [collectData, setCollectData] = useState([]);

  useEffect(() => {
    const fetchTheEvent = async () => {
      const categories = await getCategories();
      if (categories) {
        setCollectData(categories.data);
      }
    };
    fetchTheEvent();
  }, []);

  return { collectData };
};
