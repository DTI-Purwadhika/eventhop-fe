"use client";

import { useEffect, useState } from "react";
import { GetAllEventsParams } from "@/shares/types";
import { CollectionType } from "./type";
import { Pagination } from "@/components/layouts";
import { Card } from "../";
import { getEvents } from "@/services/event";
import SmallCard from "../Card/SmallCard";

const Collection = ({
  filter = "",
  limit = 6,
  emptyTitle = "No Data Found",
  emptyDescription = "There is no data for your requirement",
  category,
  type,
  sort = "nameAz",
  isSmall = false,
}: CollectionType & GetAllEventsParams) => {
  const [collectData, setCollectData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTheEvent = async ({
      filter,
      limit,
      page,
    }: GetAllEventsParams) => {
      try {
        const events = await getEvents({
          filter,
          limit,
          page,
          category,
          sort,
        });

        if (events) {
          setCollectData(events.data);
          setTotalData(parseInt(events.totalPages || "0"));
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    const page = currentPage;
    fetchTheEvent({ filter, limit, page });
  }, [currentPage, filter, limit, category, sort]);

  return (
    <>
      {collectData && collectData.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul
            className={`grid grid-cols-1 gap-5 ${!isSmall && "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10"} `}
          >
            {collectData.map((item: any) => (
              <li key={item._id} className="flex justify-center">
                {isSmall ? (
                  <SmallCard event={item} />
                ) : (
                  <Card
                    event={item}
                    hasOrderLink={type === "event_organized"}
                    hidePrice={type === "my_tickets"}
                  />
                )}
              </li>
            ))}
          </ul>
          {totalData / limit > 1 && !isSmall && (
            <Pagination
              currentPage={currentPage}
              totalPosts={totalData}
              postsPerPage={limit}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      ) : (
        <div className="wrapper flex-center text-center min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyDescription}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
