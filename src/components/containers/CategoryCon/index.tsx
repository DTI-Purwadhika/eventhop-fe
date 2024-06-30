"use client";
import { Category, Collection } from "@/components/elements";
import { Filterbar, Search, Sortbar } from "@/components/navigations";
import { Heading, Text } from "@/components/typhographies";
import { ArrowDownWideNarrow } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DatePicker, Input } from "@/components/forms";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CategoryCon = ({ limit = 4 }: { limit?: number }) => {
  const [category, setCategory] = useState("all");
  const [filter, setFilter] = useState("");
  const [startPrice, setStartPrice] = useState<number>(0);
  const [endPrice, setEndPrice] = useState<number | null>(null);
  const [isFree, setIsFree] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState(null);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  let price = 0;

  const handleRadioChange = (value: string) => {
    switch (value) {
      case "all":
        setStartPrice(0);
        setEndPrice(null);
        setIsFree(false);
        break;
      case "free":
        setStartPrice(0);
        setEndPrice(0);
        setIsFree(true);
        break;
      case "paid":
        setStartPrice(1);
        setEndPrice(null);
        setIsFree(false);
        break;
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let filterVar = "";
      if (endPrice) {
        filterVar += `price_gte=${startPrice}&price_lte=${endPrice}`;
      }
      if (search) {
        filterVar += `&name_like=${search}`;
      }
      setFilter(filterVar);
      console.log(filterVar);
    }, 425);

    return () => clearTimeout(delayDebounceFn);
  }, [endPrice, search, startPrice]);

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
          <Filterbar />
          <Sortbar />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Heading size="h4">Price Range</Heading>
        <div>
          <RadioGroup
            defaultValue="all"
            className="flex items-center space-x-2"
            onValueChange={handleRadioChange}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Price</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="free" id="free" />
              <Label htmlFor="free">Free Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="paid" />
              <Label htmlFor="paid">Paid Only</Label>
            </div>
          </RadioGroup>
        </div>
        <div className={`flex`}>
          <Input
            placeholder="Minimum Cost"
            type="number"
            isDisabled={isFree}
            onChange={(e) => setStartPrice(e.target.valueAsNumber)}
          />
          <Input
            placeholder="Maximum Cost"
            type="number"
            isDisabled={isFree}
            onChange={(e) => setEndPrice(e.target.valueAsNumber)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Text>Start From</Text>
          <DatePicker text="Start From" />
        </div>
        <div>
          <Text>Start Before</Text>
          <DatePicker text="End Before" />
        </div>
      </div>
      <Category category={category} setCategory={setCategory} />
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
