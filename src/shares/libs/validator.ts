import { z } from "zod";

export const eventFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Event Name must be at least 3 characters" })
      .max(100, { message: "Event Name must be less than 100 characters" }),
    description: z
      .string()
      .min(3, { message: "Description must be at least 3 characters" }),
    location: z
      .string()
      .min(3, { message: "Location must be at least 3 characters" })
      .max(20, { message: "Location must be less than 20 characters" }),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    url: z.string().url().optional(),
    ticketTiers: z.array(
      z.object({
        tier_name: z
          .string()
          .min(3, { message: "Tier Name must be at least 3 characters" })
          .max(100, { message: "Tier Name must be less than 100 characters" }),
        price: z.coerce
          .number()
          .nonnegative({ message: "Price must be non-negative" }),
        quota: z.coerce
          .number()
          .nonnegative({ message: "Quota must be non-negative" }),
      })
    ),
  })
  .refine((data) => data.endDateTime > data.startDateTime, {
    message: "End date cannot be earlier than start date.",
  });

export const promoFormSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(3, { message: "Event Name must be at least 3 characters" })
    .max(100, { message: "Event Name must be less than 100 characters" }),
  type: z.string(),
  amount: z.coerce
    .number()
    .nonnegative({ message: "Amount must be non-negative" }),
  event_id: z.string().optional(),
  quota: z.coerce
    .number()
    .nonnegative({ message: "Quota must be non-negative" }),
  voucher_code: z
    .string()
    .min(3, { message: "Voucher Code must be at least 3 characters" })
    .max(100, { message: "Voucher Code must be less than 20 characters" }),
  expire_date: z.date(),
});

export const filterFormSchema = z.object({
  category: z.string().optional(),
  startPrice: z.coerce.number().optional(),
  endPrice: z.coerce.number().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

export const profileFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  bio: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  location: z.string(),
  profilePicture: z.string(),
});

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  referralCode: z.string().optional(),
});

export const purchaseFormSchema = z.object({
  id: z.string().optional(),
  event_id: z.string().optional(),
  event_name: z.string().optional(),
  event_type_id: z.string({ message: "Ticket type is required" }),
  event_type_name: z.string().optional(),
  organizer_id: z.string().optional(),
  user_id: z.string().optional(),
  user_name: z.string().optional(),
  email: z.string().optional(),
  voucher: z.string().optional(),
  point: z.coerce.number().optional(),
  // agreement: z.boolean().refine((val) => val === true, {
  //   message: "You must agree to terms and conditions",
  // }),
});
