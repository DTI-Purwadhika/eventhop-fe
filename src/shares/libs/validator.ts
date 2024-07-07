import { z } from "zod";

export const eventFormSchema = z.object({
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
  imageUrl: z
    .string()
    .min(10, { message: "Image URL must be at least 10 characters" }),
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
      price: z.number().nonnegative({ message: "Price must be non-negative" }),
      quota: z.number().nonnegative({ message: "Quota must be non-negative" }),
    })
  ),
});
