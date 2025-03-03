import { z } from "zod";

export const productFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long"),
  price: z
    .number()
    .min(1, "The price is required")
    .max(1000, "The price must not exceed 1000"),
  description: z.string().min(1, "The description is required"),
  image: z.any(),
  category: z.string().min(1, "The category is required"),
});

export type ProductFormValueType = typeof productFormSchema;
