"use client";
import { Category, Collection } from "@/components/elements";
import { Filterbar, Search, Sortbar } from "@/components/navigations";
import { Heading, Text } from "@/components/typhographies";
import { ArrowDownWideNarrow } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const CategoryCon = ({ limit = 4 }: { limit?: number }) => {
  const [category, setCategory] = useState("all");
  const [filter, setFilter] = useState("");
  const [addFilter, setAddFilter] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [isAsc, setIsAsc] = useState(true);

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
      console.log(filterVar);
    }, 425);

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
    console.log(filter);
  };

  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <Heading size="h2">Find your suitable Event!</Heading>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <ArrowDownWideNarrow />
        </div>
        <div className="col-span-5">
          <Search />
        </div>
        <div className="col-span-2">
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
          <Sortbar />
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
      />
    </section>
  );
};

export default CategoryCon;
