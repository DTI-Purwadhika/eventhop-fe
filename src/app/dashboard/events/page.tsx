"use client";
import { DataTableCon } from "@/components/containers";
import { SearchType } from "@/shares/types/search";
import { useEvents } from "@/hooks/useEvent";
import { useEffect, useState } from "react";
import { columns } from "./type";
import { GetAllEventsParams } from "@/shares/types";
import { getSession } from "@/services/auth/services/getSession";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;

  const events: SearchType = {
    filter: `&organizer.id=${userId}`,
    limit: 10,
    page: currentPage,
    category: "",
    sort: "newest",
  };

  const { collectData, totalData } = useEvents(events);

  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<GetAllEventsParams["sort"]>("nameAz");
  const [isFree, setIsFree] = useState(false);

  const [startPrice, setStartPrice] = useState<number | undefined>();
  const [endPrice, setEndPrice] = useState<number | undefined>(undefined);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleSubmit = () => {
    console.log("handleSubmit clicked");
    let filter = "";

    if (isFree) {
      filter += "&ticket_type.0.price_gte=0&ticket_type.0.price_lte=0";
    } else if (endPrice !== null) {
      filter += `&ticket_type.0.price_gte=${startPrice}&ticket_type.0.price_lte=${endPrice}`;
    } else {
      filter += `&ticket_type.0.price_gte=${startPrice}`;
    }

    // if (endDate !== null) {
    //   filter += `&date_gte=${changeFormat(startDate)}&date_lte=${changeFormat(endDate)}`;
    // } else {
    //   filter += `&date_gte=${changeFormat(startDate)}`;
    // }
  };

  const filterData = {
    startPrice,
    endPrice,
    setStartPrice,
    setEndPrice,
    setStartDate,
    setEndDate,
    isFree,
    setIsFree,
    category,
    setCategory,
    handleSubmit,
  };

  return (
    <DataTableCon
      title="Events"
      columns={columns}
      data={collectData}
      totalData={totalData}
      limit={10}
      currentPage={currentPage}
      type={"ORGANIZED"}
      setCurrentPage={setCurrentPage}
      filterData={filterData}
    />
  );
};

export default Events;
