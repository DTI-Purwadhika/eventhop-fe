"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { getSession } from "@/services/auth/services/getSession";
import { purchaseFormSchema } from "@/shares/libs/validator";
import { purchaseDefaultValues } from "@/constants/defaultValues";
import { Button, Input } from "@/components/forms";
import { Label } from "@/components/ui/label";
import { Heading } from "@/components/typhographies";
import { Separator } from "@/components/ui/separator";

const PurchaseForm = ({ event }: any) => {
  const [session, setSession] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [eventId, setEventId] = useState<number>(1);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;

  const form = useForm<z.infer<typeof purchaseFormSchema>>({
    resolver: zodResolver(purchaseFormSchema),
    defaultValues: purchaseDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof purchaseFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div>
            <fieldset className="grid md:grid-cols-2 gap-6 rounded-lg border px-8 pt-4 pb-8">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Your information?
              </legend>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Loading your name..."
                        label="Attendee Name"
                        value={session?.name}
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Loading your email..."
                        label="Attendee Email"
                        value={session?.email}
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
            <br />
            <fieldset className="grid md:grid-cols-2 gap-6 rounded-lg border px-8 pt-4 pb-8">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Ticket Information
              </legend>

              <FormField
                control={form.control}
                name="ticketType"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <>
                        <Label>Ticket Tier</Label>
                        <select
                          className="input w-full border rounded-lg px-4 py-2"
                          onChange={(e) => setEventId(Number(e.target.value))}
                        >
                          {event?.ticket_type.map((ticket: any) => (
                            <option key={ticket.id} value={ticket.id}>
                              {ticket.name} : Rp {ticket.price},-
                            </option>
                          ))}
                        </select>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="voucher"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Admin#123"
                        label="Voucher Code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
          </div>

          <fieldset className="grid gap-6 rounded-lg border pt-4 pb-8 px-8 h-fit">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Purchase Information
            </legend>

            <div className="grid grid-cols-2">
              <Heading
                size="h3"
                weight="medium"
                className="text-xl font-semibold"
              >
                Ticket Price
              </Heading>
              <Label className="w-full text-right text-2xl">
                Rp {event.ticket_type[eventId - 1].price},-
              </Label>
            </div>
            <div className="grid grid-cols-2">
              <Heading
                size="h3"
                weight="medium"
                className="text-lg font-medium"
              >
                Promo Applied
              </Heading>
              <Label className="w-full text-xl text-right">
                - Rp {event.ticket_type[eventId - 1].price},-
              </Label>
            </div>
            <div className="grid grid-cols-2">
              <Heading
                size="h3"
                weight="medium"
                className="text-lg font-medium"
              >
                First Buy Discount
              </Heading>
              <Label className="w-full text-xl text-right">
                - Rp {event.ticket_type[eventId - 1].price},-
              </Label>
            </div>
            <div className="grid grid-cols-2">
              <Heading
                size="h3"
                weight="medium"
                className="text-lg font-medium"
              >
                Point
              </Heading>
              <Label className="w-full text-xl text-right">
                - Rp {event.ticket_type[eventId - 1].price},-
              </Label>
            </div>
            <Separator />
            <div className="grid grid-cols-2">
              <Heading
                size="h3"
                weight="medium"
                className="text-xl font-semibold"
              >
                Total Price
              </Heading>
              <Label className="w-full text-2xl text-right">
                Rp {event.ticket_type[eventId - 1].price},-
              </Label>
            </div>
          </fieldset>
          <Button type="submit" className="w-fit mt-4" icon="Ticket">
            Purchase Ticket
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PurchaseForm;
