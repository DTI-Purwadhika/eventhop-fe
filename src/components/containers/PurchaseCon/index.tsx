"use client";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/typhographies";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const schema = z.object({
  ticketType: z.string({ message: "Ticket type is required" }),
  name: z.string({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  telephone: z.string({ message: "Telephone number is required" }),
  useMyInfo: z.boolean(),
  agreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to terms and conditions",
  }),
});

type FormData = z.infer<typeof schema>;

const PurchaseForm = () => {
  const { data: session } = useSession();
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      ticketType: "",
      name: "",
      email: "",
      telephone: "",
      useMyInfo: false,
      agreement: false,
    },
  });

  const useMyInfo = watch("useMyInfo");

  useEffect(() => {
    if (useMyInfo && session?.user) {
      setValue("name", session.user.name || "");
      setValue("email", session.user.email || "");
    }
  }, [useMyInfo, session, setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="ticketType"
            className="block text-sm font-medium text-gray-700"
          >
            Ticket Type
          </label>
          <Controller
            name="ticketType"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select a ticket</option>
                <option value="standard">Standard</option>
                <option value="vip">VIP</option>
              </select>
            )}
          />
          {errors.ticketType && (
            <p className="text-red-500 text-xs mt-1">
              {errors.ticketType.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone Number
          </label>
          <Controller
            name="telephone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            )}
          />
          {errors.telephone && (
            <p className="text-red-500 text-xs mt-1">
              {errors.telephone.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <Controller
              name="useMyInfo"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={field.value ? "true" : "false"}
                  className="form-checkbox text-indigo-600 border-gray-300 rounded"
                />
              )}
            />
            <span className="ml-2">Use my information</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <Controller
              name="agreement"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={field.value ? "true" : "false"}
                  className="form-checkbox text-indigo-600 border-gray-300 rounded"
                />
              )}
            />
            <span className="ml-2">
              I agree to the{" "}
              <Dialog>
                <DialogTrigger>terms and conditions</DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>Ticket Terms and Conditions</DialogTitle>
                    <DialogDescription className=" max-h-[85vh] overflow-y-auto">
                      <Text>
                        Before you jump into the fun, let&apos;s bounce through
                        these super serious terms and conditions. Read them
                        carefully, or just hop along like a rabbit on a sunny
                        day. Either way, you&apos;re bound by these terms, so
                        don&apos;t say we didn&apos;t warn you!
                      </Text>
                      <br />

                      <Label>1. Ticket Purchase</Label>
                      <Text>
                        When you buy a ticket from one of our delightful host
                        partners, you’re entering a world of wonder, excitement,
                        and potential disappointment. We just sell the tickets;
                        we&apos;re not the event planners. If the event turns
                        out to be a big, fluffy scam, that&apos;s between you
                        and the sneaky scammer. We’re just the bunny in the
                        middle.
                      </Text>
                      <br />

                      <Label>2. Event Authenticity</Label>
                      <Text>
                        We try our best to ensure our host partners are as real
                        as a rabbit hole. However, some of them might be
                        trickier than a hare on a sugar rush. If you find
                        yourself at a non-existent event, don&apos;t come
                        hopping to us. We’re not liable for any fake events, and
                        we won’t reimburse you with carrots or cash.
                      </Text>
                      <br />

                      <Label>3. Refunds and Cancellations</Label>
                      <Text>
                        Refunds are as rare as a rabbit with a top hat. If the
                        event is canceled, you might get a refund, or you might
                        get a virtual pat on the back. If the event is fake, you
                        get the honor of learning a valuable life lesson. Either
                        way, keep your expectations lower than a rabbit’s
                        burrow.
                      </Text>
                      <br />

                      <Label>4. User Responsibility</Label>
                      <Text>
                        When you buy a ticket, you’re responsible for making
                        sure the event is legit. Do your research, or risk being
                        duped by a devious hare. If you fall for a scam, just
                        remember: every bunny makes mistakes.
                      </Text>
                      <br />

                      <Label>5. Limitation of Liability</Label>
                      <Text>
                        Our liability is limited to the number of hops it takes
                        a bunny to cross a meadow. In other words, we’re not
                        responsible for any losses, damages, or emotional
                        distress caused by attending (or not attending) an
                        event. If things go south, you&apos;ll need to hop on
                        over to the scammer.
                      </Text>
                      <br />

                      <Label>6. Privacy and Data</Label>
                      <Text>
                        We respect your privacy like a rabbit respects its
                        warren. We’ll only share your data with our partners to
                        make your event experience as smooth as a bunny’s fur.
                        But if your data ends up in a rabbit hole, don’t blame
                        us. We’re not magicians, just ticket sellers.
                      </Text>
                      <br />

                      <Label>7. Contact Us</Label>
                      <Text>
                        If you have any questions, complaints, or just want to
                        share a funny rabbit joke, feel free to contact us.
                        We’ll do our best to respond quicker than a jackrabbit
                        on a hot day.
                      </Text>
                      <br />

                      <Text>
                        Remember, life’s a hop, skip, and a jump. Enjoy the
                        ride, watch out for sneaky rabbits, and always look
                        before you leap.
                      </Text>
                      <br />

                      <Text>
                        By purchasing a ticket, you acknowledge that you’ve
                        read, understood, and agreed to these terms and
                        conditions. If you didn&apos;t read them, well,
                        that&apos;s a hare-brained move, but you’re still bound
                        by them. Happy hopping!
                      </Text>
                      <br />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </span>
          </label>
          {errors.agreement && (
            <p className="text-red-500 text-xs mt-1">
              {errors.agreement.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
