"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import getCategories from "@/services/category";
import { Label } from "@/components/ui/label";

type DropdownProps = {
  value: string;
  setCategory?: any;
  label?: string;
};

const getCategory = async () => {
  const response = await getCategories();
  return response;
};

const Dropdown = ({ value, setCategory, label }: DropdownProps) => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = getCategory();
    fetchCategories.then((data) => setCategories(data));
  }, []);

  const onChangeHandler = (value: string) => {
    setCategory(value);
  };

  return (
    <>
      <Label>{label}</Label>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="max-h-[40vh]">
          <SelectItem key={0} value={"all"}>
            All
          </SelectItem>
          {categories.length > 0 &&
            categories.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
};
export default Dropdown;
