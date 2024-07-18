"use client";

import { z } from "zod";
import { Button, Input, DatePicker } from "@/components/forms";
import { promoFormSchema } from "@/shares/libs/validator";
import { FormProps } from "./type";
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
import EventDropdown from "@/components/forms/EventDropdown";
import { toTitleCase } from "@/shares/libs/toTitleCase";
import { Label } from "@/components/ui/label";
import { restPost } from "@/services/restService";
import { getLastPromotionId } from "@/services/promotion";
import { useRouter } from "next/navigation";

const PromoForm = ({ type }: FormProps) => {
  const form = useForm<z.infer<typeof promoFormSchema>>({
    resolver: zodResolver(promoFormSchema),
  });

  async function onSubmit(values: z.infer<typeof promoFormSchema>) {
    values.id = (await getLastPromotionId()) + 1;
    //@ts-ignore
    values.expire_date = values.expire_date.toISOString();
    restPost("promotions", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <fieldset className="grid md:grid-cols-2 gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              What&apos;s it is?
            </legend>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full col-span-2">
                  <FormControl>
                    <Input
                      placeholder="Your promotion name..."
                      label="Promotion Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <>
                      <Label>Promotion Type</Label>
                      <select
                        {...field}
                        className="form-select w-full border p-2 rounded-lg text-sm"
                      >
                        <option>Promotion Type</option>
                        <option value="cashback">Cashback</option>
                        <option value="discount">Discount</option>
                      </select>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="How much..?"
                      label="Promotion Amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="grid md:grid-cols-2 gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Tell me more!
            </legend>
            <FormField
              control={form.control}
              name="event_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <EventDropdown
                      setEvent={field.onChange}
                      value={field.value!}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quota"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="How much voucher..?"
                      label="Quota"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voucher_code"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your voucher code..."
                      label="Voucher Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expire_date"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <DatePicker {...field} label="Expire Date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting
              ? "Submitting..."
              : `${toTitleCase(type)} Voucher`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default PromoForm;
