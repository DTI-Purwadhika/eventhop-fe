"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { CardType } from "./type";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Card = ({ event, hidePrice }: CardType) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="group relative flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[375px]">
        <Skeleton className="pt-4 pl-4 flex-grow bg-gray-50 bg-center text-gray-500 h-[200px]" />
        <div className="flex min-h-[170px] flex-col gap-2 p-5 md:gap-4">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[375px]">
      <Link
        href={`/events/${event.id}`}
        style={{
          backgroundImage: `url(${event.main_image})`,
        }}
        className="pt-4 pl-4 flex-grow bg-gray-50 bg-center text-gray-500"
      >
        {!hidePrice && (
          <div className="flex gap-2 w-full">
            <span className="p-semibold-14 w-min rounded-lg bg-primary-500 px-4 py-1 text-white whitespace-nowrap">
              {event.ticket_type[0].price
                ? `Rp ${event.ticket_type[0].price}`
                : "Free"}
            </span>
            <p className="p-semibold-14 w-min rounded-xl bg-grey-50 px-4 py-1 text-grey-500">
              {event.category}
            </p>
          </div>
        )}
      </Link>
      <Link
        href={`/events/${event.id}`}
        className="flex min-h-[170px] flex-col gap-2 p-5 md:gap-4"
      >
        <p className="p-medium-12 md:p-medium-14 text-grey-500">
          {dateFormatter(event.start_date)}
        </p>

        <p className="p-medium-14 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.name}
        </p>

        <div className="flex-between w-full">
          <p className="p-medium-12 md:p-medium-14 text-grey-600">
            {event.organizer.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
