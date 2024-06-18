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
  price: z.number(),
  url: z.string().url(),
});
