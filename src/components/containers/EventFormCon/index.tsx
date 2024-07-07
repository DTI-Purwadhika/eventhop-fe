"use client";

import { z } from "zod";
import { Button, Input, Dropdown, FileInput } from "@/components/forms";
import { eventDefaultValues } from "@/constants/routes";
import { eventFormSchema } from "@/shares/libs/validator";
import { EventFormProps } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Icon from "@/shares/assets/Icon";

import "react-datepicker/dist/react-datepicker.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import TickerTier from "./TickerTier";

const EventForm = ({ type }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventDefaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticketTiers",
  });

  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              What&apos;s Hoppin&apos;?
            </legend>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Event title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-36 md:h-48 lg:h-72">
                    <Textarea
                      placeholder="Event Description"
                      {...field}
                      className="textarea rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>

          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              How Does It Look, Hopper?
            </legend>

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Dropdown
                      setCategory={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <FileInput
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
                      setFiles={setFiles}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>

          <div>
            <fieldset className="grid gap-6 rounded-lg border p-4 h-fit">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Where, When, to Hop In?
              </legend>
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                        <Icon name="MapPin" />
                        <Input placeholder="Event Location" field={field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startDateTime"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                          <Icon name="Calendar" />
                          <p className="ml-3 whitespace-nowrap text-grey-600">
                            Start Date:
                          </p>
                          <DatePicker
                            selected={new Date(field.value)}
                            onChange={(date: Date | null) =>
                              field.onChange(date)
                            }
                            showTimeSelect
                            timeInputLabel="Time:"
                            dateFormat="dd/MM/yyyy h:mm aa"
                            wrapperClassName="datePicker"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDateTime"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                          <Icon name="Calendar" />
                          <p className="ml-3 whitespace-nowrap text-grey-600">
                            End Date:
                          </p>
                          <DatePicker
                            selected={new Date(field.value)}
                            onChange={(date: Date | null) =>
                              field.onChange(date)
                            }
                            showTimeSelect
                            timeInputLabel="Time:"
                            dateFormat="dd/MM/yyyy h:mm aa"
                            wrapperClassName="datePicker"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
          </div>

          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Hop on the Train!
            </legend>
            {fields.map((field, index) => (
              <TickerTier key={field.id} control={form.control} index={index} />
            ))}
            <Button
              type="button"
              onClick={() => append({ tier_name: "", price: 0, quota: 0 })}
            >
              Add Tier
            </Button>
          </fieldset>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : `${type} Event`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default EventForm;
