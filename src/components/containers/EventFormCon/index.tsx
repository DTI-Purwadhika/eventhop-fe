"use client";

import { z } from "zod";
import {
  Button,
  Input,
  Dropdown,
  FileInput,
  Textarea,
  DatePicker,
} from "@/components/forms";
import { useFieldArray, useForm } from "react-hook-form";
import { eventDefaultValues } from "@/constants/defaultValues";
import { eventFormSchema } from "@/shares/libs/validator";
import { useUploadThing } from "@/shares/libs/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "./type";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import TickerTier from "./TickerTier";
import { Label } from "@/components/ui/label";
import { toTitleCase } from "@/shares/libs/toTitleCase";
import { getLastEventId } from "@/services/event";
import { restPost } from "@/services/restService";

const EventForm = ({ type }: FormProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventDefaultValues,
    mode: `onChange`,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticket_type",
  });

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    console.log("values");

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      values.id = (await getLastEventId()) + 1;

      //@ts-ignore
      values.start_date = values.start_date.toISOString();
      //@ts-ignore
      values.end_date = values.end_date.toISOString();
      values.main_image = uploadedImages[0].url;

      console.log(values);
      restPost("events", values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <fieldset className="grid gap-6 rounded-lg border p-4 h-fit">
            <legend className="-ml-1 px-1 text-sm font-medium">
              What&apos;s Hoppin&apos;?
            </legend>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your event name..."
                      label="Event Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="detail"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-36 md:h-48 lg:h-80">
                    <Textarea
                      placeholder="Tell us about your event..."
                      label="Event Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.detail?.message}
                  </FormMessage>
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
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Dropdown
                      setCategory={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.category?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="main_image"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <>
                      <Label className="mb-2">Event Picture</Label>
                      <FileInput
                        onFieldChange={field.onChange}
                        imageUrl={field.value || ""}
                        setFiles={setFiles}
                      />
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-700">
                          Picture Name : {files.length > 0 && files[0].name}
                        </p>
                        {/* <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setFiles([]);
                            field.onChange("");
                          }}
                          className={files.length === 0 ? "hidden" : "block"}
                        >
                          Remove Picture
                        </Button> */}
                      </div>
                    </>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.main_image?.message}
                  </FormMessage>
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
                      <Input placeholder="Event Location" {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.location?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="start_date"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <DatePicker label="Start Date" {...field} />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.start_date?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="end_date"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        {/* <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
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
                        </div> */}
                        <DatePicker label="End Date" {...field} />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.end_date?.message}
                      </FormMessage>
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
              <TickerTier
                key={field.id}
                control={form.control}
                index={index}
                remove={remove}
              />
            ))}
            <div className="flex justify-end mr-4">
              <Button
                type="button"
                onClick={() => append({ name: "", price: 0, seats: 0 })}
              >
                Add Tier
              </Button>
            </div>
          </fieldset>
        </div>
        <div className="flex justify-end mr-8">
          <Button type="submit" url="/dashboard/events">
            {form.formState.isSubmitting
              ? "Submitting..."
              : `${toTitleCase(type)} Event`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default EventForm;
