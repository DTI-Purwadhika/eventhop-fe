"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/components/typhographies";
import getCategories from "@/utils/getCategories";

const Category = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: any;
}) => {
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

  const handleChange = (clickCategory: string) => {
    setCategory(clickCategory.toLowerCase());
  };

  return (
    <>
      {categories && categories.length > 0 ? (
        <ul className="flex flex-wrap gap-4 justify-center">
          <li
            key="all"
            className={`flex justify-center rounded-full px-8 pb-2 pt-3 cursor-pointer ${
              category === "all" ? "bg-blue-300" : "bg-green-200"
            }`}
            onClick={() => handleChange("all")}
          >
            All
          </li>
          {categories.map((item: any) => (
            <li
              key={item._id}
              className={`flex justify-center rounded-full px-8 pb-2 pt-3 cursor-pointer ${
                category === item.name.toLowerCase()
                  ? "bg-blue-300"
                  : "bg-green-200"
              }`}
              onClick={() => handleChange(item.name)}
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
