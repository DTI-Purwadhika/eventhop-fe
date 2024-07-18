"use client";
import {
  Filterbar,
  FilterButton,
  Search,
  Sortbar,
} from "@/components/navigations";
import { useState, useEffect } from "react";
import { GetAllEventsParams } from "@/shares/types";
import { useSearchParams } from "next/navigation";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { toTitleCase } from "@/shares/libs/toTitleCase";
import { Dropdown } from "@/components/forms";
import { Heading } from "@/components/typhographies";
import FilterContent from "@/components/navigations/FilterContent";
import SortContent from "@/components/navigations/Sortbar/SortContent";
import EventCon from "../EventCon";

const CategoryCon = ({ limit = 4 }: { limit?: number }) => {
  const [startPrice, setStartPrice] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [addFilter, setAddFilter] = useState("");
  const [endPrice, setEndPrice] = useState<number | null>(null);
  const [category, setCategory] = useState("all");
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isFree, setIsFree] = useState(false);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState<GetAllEventsParams["sort"]>("nameAz");
  const [city, setCity] = useState<string>("all");

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
      console.log(filterVar);
    }, 175);
    return () => clearTimeout(delayDebounceFn);
  }, [search, addFilter, city]);

  const handleSubmit = () => {
    let filter = "";

    if (isFree) {
      filter += "&ticket_type.0.price_gte=0&ticket_type.0.price_lte=0";
    } else if (endPrice !== null) {
      filter += `&ticket_type.0.price_gte=${startPrice}&ticket_type.0.price_lte=${endPrice}`;
    } else {
      filter += `&ticket_type.0.price_gte=${startPrice}`;
    }

    if (city && city !== "all") {
      filter += `&location_like=${toTitleCase(city)}`;
    }

    // if (endDate !== null) {
    //   filter += `&date_gte=${startDate}&date_lte=${endDate}`;
    // } else {
    //   filter += `&date_gte=${startDate}`;
    // }
    setAddFilter(filter);
  };

  const handleReset = () => {
    setStartPrice(0);
    setEndPrice(null);
    setStartDate(new Date());
    setEndDate(null);
    setIsFree(false);
    setCity("all");
    setCategory("all");
    setAddFilter("");
  };

  return (
    <section id="events" className="my-8 flex flex-col gap-8 md:gap-12">
      <Heading size="h2" align="center">
        Discover Your Hopportunity!
      </Heading>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-9 md:col-span-8 lg:col-span-8">
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
            handleReset={handleReset}
            setCategory={setCategory}
            category={category}
          />
          <Sortbar setSort={setSort} sort={sort} />
        </div>
        <div className="hidden md:col-span-2 gap-2 md:flex md:flex-row md:justify-end">
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
              handleReset={handleReset}
              setCategory={setCategory}
              setCity={setCity}
              category={category}
            />
          </FilterButton>
          <FilterButton icon="ListFilter">
            <SortContent
              handleSort={(value: any) => setSort(value)}
              sort={sort}
            />
          </FilterButton>
        </div>
      </div>
      <EventCon filter={filter} limit={limit} sort={sort} category={category} />
    </section>
  );
};

export default CategoryCon;
