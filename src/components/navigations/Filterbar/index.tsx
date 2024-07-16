"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Filter } from "lucide-react";
import { Button } from "@/components/forms";
import FilterContent from "../FilterContent";

const Filterbar = ({
  startPrice,
  endPrice,
  setStartPrice,
  setEndPrice,
  setStartDate,
  setEndDate,
  isFree,
  setIsFree,
  handleSubmit,
  category,
  setCategory,
  handleReset,
}: any) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Filter />
      </DrawerTrigger>
      <DrawerContent className="bg-white px-8 pb-8 h-fit">
        <FilterContent
          startPrice={startPrice}
          endPrice={endPrice}
          setStartPrice={setStartPrice}
          setEndPrice={setEndPrice}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          isFree={isFree}
          setIsFree={setIsFree}
          category={category}
          setCategory={setCategory}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
        <DrawerClose className="grid grid-cols-5 gap-4">
          <Button className="w-full -mb-4 col-span-4" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="outline"
            className="w-full -mb-4"
            onClick={handleReset}
          >
            Reset
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
export default Filterbar;
