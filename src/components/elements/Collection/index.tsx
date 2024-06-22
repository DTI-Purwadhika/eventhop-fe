"use client";

import { useEffect, useState } from "react";
import { GetAllEventsParams } from "@/types";
import { CollectionType } from "./type";
import getEventData from "@/utils/getEventData";
import Card from "../Card";

const Collection = ({
  data,
  emptyTitle,
  emptyDescription,
  type,
}: CollectionType) => {
  const [collectData, setCollectData] = useState([]);

  useEffect(() => {
    const fetchTheEvent = async (eventProp: GetAllEventsParams) => {
      try {
        const events = await getEventData(eventProp);
        setCollectData(events.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchTheEvent(data);
  }, [data]);

  return (
    <>
      {collectData && collectData.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 xl:grid-cols-4">
            {collectData.map((item: any) => (
              <li key={item._id} className="flex justify-center">
                <Card
                  event={item}
                  hasOrderLink={type === "event_organized"}
                  hidePrice={type === "my_tickets"}
                />
              </li>
            ))}
          </ul>
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
