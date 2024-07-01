"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Filter } from "lucide-react";
import { Button, DatePicker, Dropdown, Input } from "@/components/forms";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heading, Text } from "@/components/typhographies";
import { Category } from "@/components/elements";

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
}: any) => {
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

  return (
    <Drawer>
      <DrawerTrigger>
        <Filter />
      </DrawerTrigger>
      <DrawerContent className="bg-white px-8 pb-8 h-4/5">
        <div className="my-4 overflow-y-auto h-full">
          <Heading size="h3">Filter</Heading>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Heading size="h4">Category</Heading>
            <div>
              <Category category={category} setCategory={setCategory} />
            </div>
            <Heading size="h4">Price Range</Heading>
            <div>
              <RadioGroup
                defaultValue={
                  startPrice > 0 ? "paid" : endPrice === 0 ? "free" : "all"
                }
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
                value={startPrice}
                onChange={(e) => setStartPrice(e.target.valueAsNumber)}
              />
              <Input
                placeholder="Maximum Cost"
                type="number"
                isDisabled={isFree}
                value={endPrice}
                onChange={(e) => setEndPrice(e.target.valueAsNumber)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Text>Start From</Text>
              <DatePicker
                text="Start From"
                onChange={(e: any) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <Text>Start Before</Text>
              <DatePicker
                text="End Before"
                onChange={(e: any) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <DrawerClose>
          <Button onClick={handleSubmit}>Submit</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
export default Filterbar;
