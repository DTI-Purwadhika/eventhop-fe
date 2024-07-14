"use client";
import { DataTableCon } from "@/components/containers";
import { SearchType } from "@/shares/types/search";
import { useSession } from "next-auth/react";
import { useEvents } from "@/hooks/useEvent";
import { useState } from "react";
import { columns } from "./type";
import { GetAllEventsParams } from "@/shares/types";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session } = useSession();

  const events: SearchType = {
    filter: "",
    limit: 10,
    page: currentPage,
    category: "",
    sort: "nameAz",
    userId: session?.user?.id,
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
      filter += "&ticket_type.price.0_gte=0&ticket_type.price.0_lte=0";
    } else if (endPrice !== null) {
      filter += `&ticket_type.price.0_gte=${startPrice}&ticket_type.price.0_lte=${endPrice}`;
    } else {
      filter += `&ticket_type.price.0_gte=${startPrice}`;
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
