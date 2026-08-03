import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(["zh", "en"]).default("en"),
    /** Slug of this post's counterpart in the other language, if any. */
    translation: z.string().optional(),
    /** Short byline shown under the post title. */
    byline: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Audio sample that represents the post, relative to /public. */
    audio: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
