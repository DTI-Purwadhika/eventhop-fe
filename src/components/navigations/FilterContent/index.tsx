"use client";

import { Input, DatePicker, Dropdown, Button } from "@/components/forms";

import "react-datepicker/dist/react-datepicker.css";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heading } from "@/components/typhographies";

const FilterContent = ({
  startPrice,
  endPrice,
  setStartPrice,
  setEndPrice,
  setStartDate,
  setEndDate,
  setIsFree,
  category,
  setCategory,
  handleSubmit,
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
    <div className="grid grid-cols-2 gap-2 mb-4 min-w-min">
      <Heading size="h3" className="block md:hidden">
        Filter
      </Heading>
      <div className="w-full col-span-2">
        <Dropdown
          value={category}
          setCategory={setCategory}
          label="Event Category"
        />
      </div>
      <div className="col-span-2 text-nowrap">
        <Label>Price</Label>
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
      <div className="w-full">
        <Input
          placeholder="Rp 0,-"
          label="Min"
          onChange={(e) => setStartPrice(Number(e.target.value))}
        />
      </div>
      <div className="w-full">
        <Input
          placeholder="Rp 9.999.999,-"
          label="Max"
          onChange={(e) => setEndPrice(Number(e.target.value))}
        />
      </div>
      <div className="w-full">
        <DatePicker
          placeholder={new Date().toLocaleDateString()}
          label="Date from"
          withTime={false}
          withPast={false}
          onChange={setStartDate}
        />
      </div>
      <div className="w-full">
        <DatePicker
          placeholder={new Date().toLocaleDateString()}
          label="Until"
          withTime={false}
          withPast={false}
          onChange={setEndDate}
        />
      </div>
      <Button
        className="w-full hidden md:flex md:mt-4 md:-mb-4 col-span-2"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
export default FilterContent;
