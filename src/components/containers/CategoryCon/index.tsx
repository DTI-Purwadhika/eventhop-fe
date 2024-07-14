"use client";
import { Category, Collection } from "@/components/elements";
import {
  Filterbar,
  FilterButton,
  Search,
  Sortbar,
} from "@/components/navigations";
import { Heading } from "@/components/typhographies";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GetAllEventsParams } from "@/shares/types";
import EventCon from "../EventCon";
import { Dropdown } from "@/components/forms";
import FilterContent from "@/components/navigations/FilterContent";
import { dateFormatter } from "@/shares/libs/dateFormatter";

const CategoryCon = ({ limit = 4 }: { limit?: number }) => {
  const [category, setCategory] = useState("all");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState<GetAllEventsParams["sort"]>("nameAz");
  const [addFilter, setAddFilter] = useState("");
  const [isFree, setIsFree] = useState(false);

  const [startPrice, setStartPrice] = useState<number>(0);
  const [endPrice, setEndPrice] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let filterVar = "";
      if (search) {
        filterVar += `&name_like=${search}`;
      }
      if (addFilter !== "") {
        filterVar += `${addFilter}`;
      }
      setFilter(filterVar);
    }, 175);

    return () => clearTimeout(delayDebounceFn);
  }, [search, addFilter]);

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

    setAddFilter(filter);
  };

  return (
    <section id="events" className="my-8 flex flex-col gap-8 md:gap-12">
      <Heading size="h2">Discover Your Hopportunity!</Heading>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-9 md:col-span-8 lg:col-span-9 mr-2">
          <Search />
        </div>
        <div className="hidden md:block md:col-span-2">
          <Dropdown value={category} setCategory={setCategory} />
        </div>
        <div className="col-span-3 md:hidden gap-4 flex flex-row justify-end">
          <Filterbar
            startPrice={startPrice}
            endPrice={endPrice}
            setStartPrice={setStartPrice}
            setEndPrice={setEndPrice}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            isFree={isFree}
            setIsFree={setIsFree}
            handleSubmit={handleSubmit}
            setCategory={setCategory}
            category={category}
          />
          <Sortbar setSort={setSort} sort={sort} />
        </div>
        <div className="hidden md:col-span-2 lg:col-span-1 gap-4 md:flex md:flex-row md:justify-end">
          <FilterButton>
            <FilterContent
              startPrice={startPrice}
              endPrice={endPrice}
              setStartPrice={setStartPrice}
              setEndPrice={setEndPrice}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setIsFree={setIsFree}
              handleSubmit={handleSubmit}
              setCategory={setCategory}
              category={category}
            />
          </FilterButton>
          <Sortbar setSort={setSort} sort={sort} />
        </div>
      </div>
      <EventCon filter={filter} limit={limit} sort={sort} category={category} />
    </section>
  );
};

export default CategoryCon;
