"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/components/typhographies";
import getCategories from "@/utils/getCategories";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchTheEvent = async () => {
      try {
        const events = await getCategories();
        setCategories(events);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchTheEvent();
  }, []);

  return (
    <>
      {categories && categories.length > 0 ? (
        <ul className="flex flex-wrap gap-4 justify-center">
          {categories.map((item: any) => (
            <li
              key={item._id}
              className="flex justify-center rounded-full bg-green-200 px-8 pb-2 pt-3"
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="wrapper flex-center text-center min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28">
          <Heading size="h3" className="md:h5-bold">
            No Category
          </Heading>
        </div>
      )}
    </>
  );
};

export default Category;
