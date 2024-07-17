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
import { Button, Input } from "@/components/forms";
import { Label } from "@/components/ui/label";
import { Heading } from "@/components/typhographies";
import { Separator } from "@/components/ui/separator";
import isFirstTime from "@/services/ticket/isFirstTime";
import { checkPromoCode } from "@/services/promotion/isAvalable";
import { restPost } from "@/services/restService";
import { getLastTicketId } from "@/services/ticket";
import { useRouter } from "next/navigation";

const PurchaseForm = ({ event }: any) => {
  const [session, setSession] = useState<any>();
  const [discount, setDiscount] = useState<number>(0);
  const [firstDiscount, setFirstDiscount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [firstBuy, setFirstBuy] = useState<boolean>(false);
  const [point, setPoint] = useState<number>(0);
  const [eventId, setEventId] = useState<number>(1);
  const [voucher, setVoucher] = useState<string>("");
  const [voucherStatus, setVoucherStatus] = useState<string>("");
  const [voucherCode, setVoucherCode] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  useEffect(() => {
    const ticketPrice = event.ticket_type[eventId - 1].price;
    setTotalPrice(ticketPrice - discount - point);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discount, point, eventId]);

  useEffect(() => {
    const checkFirstTime = async () => {
      const firstTime = await isFirstTime(session?.id);
      if (firstTime) {
        setFirstBuy(true);
        setFirstDiscount(event.ticket_type[eventId - 1].price * 0.1);
      }
    };
    checkFirstTime();
  }, [event.ticket_type, eventId, session?.id]);

  const handleVoucher = async (voucher: string) => {
    const promotion = await checkPromoCode(voucher);
    if (promotion) {
      setVoucherStatus("Voucher Applied");
      setVoucherCode(voucher);
      if (promotion.discount_type === "Percentage") {
        setDiscount(
          (event.ticket_type[eventId - 1].price * promotion.amount) / 100
        );
      } else {
        setDiscount(promotion.amount);
      }
    } else {
      setVoucherStatus("Voucher Not Found, Expired, or Quota Limit Reached");
    }
  };

  const applyVoucher = () => {
    handleVoucher(voucher);
  };

  const userId = session?.id;

  const form = useForm<z.infer<typeof purchaseFormSchema>>({
    resolver: zodResolver(purchaseFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof purchaseFormSchema>) => {
    values.id = (await getLastTicketId()) + 1;
    values.event_id = event.id;
    values.event_name = event.name;
    values.event_type_name = event.ticket_type[eventId - 1].name;
    values.organizer_id = event.organizer.id;
    values.user_id = userId;
    values.user_name = session?.name;
    values.email = session?.email;
    values.voucher = voucherCode;
    values.point = point;
    console.log(values);

    restPost("ticket_purchases", values);
    router.push("/dashboard/tickets");
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
                name="user_name"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Loading your name..."
                        label="Attendee Name"
                        disabled
                        {...field}
                        value={session?.name}
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
                        disabled
                        {...field}
                        value={session?.email}
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
                name="event_type_id"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <>
                        <Label>Ticket Tier</Label>
                        <select
                          className="input w-full border rounded-lg px-4 py-2"
                          {...field}
                          onChange={(e) => {
                            setEventId(Number(e.target.value));
                            field.onChange(e);
                          }}
                        >
                          <option value="">Select Ticket Tier...</option>
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
                name="point"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        label="Use Point"
                        min={0}
                        onBlur={(e) => setPoint(e.target.value)}
                      />
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
                      <>
                        <Input
                          placeholder="Admin#123"
                          label="Voucher Code"
                          onBlur={(e) => setVoucher(e.target.value)}
                        />
                        <Button size="sm" onClick={applyVoucher}>
                          Apply
                        </Button>
                        <span className="text-primary-500 ml-4">
                          {voucherStatus}
                        </span>
                      </>
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
                - Rp {discount},-
              </Label>
            </div>
            <div className={`${!firstBuy && "hidden"} grid grid-cols-2`}>
              <Heading
                size="h3"
                weight="medium"
                className="text-lg font-medium"
              >
                First Buy Discount
              </Heading>
              <Label className="w-full text-xl text-right">
                - Rp {firstDiscount},-
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
                - Rp {point},-
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
                Rp {totalPrice},-
              </Label>
            </div>
          </fieldset>
          <Button
            type="submit"
            className="w-fit mt-4"
            icon="Ticket"
            disabled={!session}
          >
            {session ? "Purchase Ticket" : "Login to Purchase"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PurchaseForm;
