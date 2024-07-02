"use client";
import { Category, Collection } from "@/components/elements";
import { Filterbar, Search, Sortbar } from "@/components/navigations";
import { Heading } from "@/components/typhographies";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GetAllEventsParams } from "@/types";

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
    let filter = "";

    if (isFree) {
      filter += "&price_gte=0&price_lte=0";
    } else if (endPrice !== null) {
      filter += `&price_gte=${startPrice}&price_lte=${endPrice}`;
    } else {
      filter += `&price_gte=${startPrice}`;
    }

    // if (endDate !== null) {
    //   filter += `&date_gte=${startDate}&date_lte=${endDate}`;
    // } else {
    //   filter += `&date_gte=${startDate}`;
    // }

    setAddFilter(filter);
  };

  return (
    <section
      id="events"
      className="my-8 mx-4 md:ml-36 md:mr-12 flex flex-col gap-8 md:gap-12"
    >
      <Heading size="h2">Discover Your Hopportunity!</Heading>
      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <Search />
        </div>
        <div className="md:hidden col-span-2 gap-4 flex flex-row justify-end">
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
      </div>
      <div className="hidden lg:block">
        <Category category={category} setCategory={setCategory} />
      </div>
      <Collection
        filter={filter}
        category={category}
        limit={limit}
        type="all_events"
        emptyTitle="No Events in This Category"
        emptyDescription="Try choose another category."
        sort={sort}
      />
    </section>
  );
};

export default CategoryCon;
