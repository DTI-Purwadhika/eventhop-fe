"use client";

import { z } from "zod";
import { Button, Input, DatePicker, Dropdown } from "@/components/forms";
import { filterFormSchema } from "@/shares/libs/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FilterContent = ({
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
}: any) => {
  const form = useForm<z.infer<typeof filterFormSchema>>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      category: undefined,
      startPrice: 0,
      endPrice: undefined,
      startDate: undefined,
      endDate: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof filterFormSchema>) {
    console.log(values);
  }

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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-2"
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full col-span-2">
              <FormControl>
                <Dropdown value={category} setCategory={setCategory} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full col-span-2">
              <FormControl>
                <Input placeholder="All..." label="Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startPrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Rp 0,-" label="Min" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endPrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Rp 9.999.999,-" label="Max" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <DatePicker
                  placeholder={new Date().toLocaleDateString()}
                  label="Date from"
                  {...field}
                  withTime={false}
                  withPast={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <DatePicker
                  placeholder={new Date().toLocaleDateString()}
                  label="Until"
                  {...field}
                  withTime={false}
                  withPast={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
export default FilterContent;
