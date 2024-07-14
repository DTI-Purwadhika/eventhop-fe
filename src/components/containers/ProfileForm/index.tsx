"use client";

import { z } from "zod";
import { Button, Input, Textarea, FileInput } from "@/components/forms";
import { profileFormSchema } from "@/shares/libs/validator";
import { toTitleCase } from "@/shares/libs/toTitleCase";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "./type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const ProfileForm = ({ type }: FormProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    // defaultValues: promoDefaultValues,
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <fieldset className="grid gap-6 rounded-lg border p-4 h-fit">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Profile Picture
            </legend>
            <FormField
              control={form.control}
              name="profilePicture"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <>
                      <FileInput
                        onFieldChange={field.onChange}
                        imageUrl={field.value}
                        setFiles={setFiles}
                      />
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-700">
                          Picture Name : {files.length > 0 && files[0].name}
                        </p>
                      </div>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4 h-fit">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Tell Us about you
            </legend>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="John Doe" label="Bio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Batam" label="Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      placeholder="A short bio about John Doe."
                      label="Bio"
                      {...field}
                    />
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
              : `${toTitleCase(type)} Profile`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ProfileForm;
