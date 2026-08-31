import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    year: z.number().int().min(1990).max(2100),
    publisher: z.string(),
    isbn13: z.string().regex(/^\d{13}$/, "isbn13 must be 13 digits"),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    tags: z.array(z.string()).min(1),
    summary: z.string(),
    bestFor: z.string(),
    coverImage: z.string(),
    buyLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .min(1),
  }),
});

export const collections = { books };
