import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const grants = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/grants" }),
  schema: z.object({
    title: z.string(),
    fundingBody: z.string(),
    period: z.string().optional(),
    amount: z.string().optional(),
    role: z.string().optional(),
    status: z.enum(["active", "completed"]).default("active"),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/talks" }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    date: z.string(),
    location: z.string().optional(),
    link: z.string().url().optional(),
    type: z.enum(["invited", "conference", "upcoming"]).default("invited"),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/tools" }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      "variant-interpretation",
      "genomic-analysis",
      "ai",
      "other",
    ]),
    link: z.string().url().optional(),
    status: z.enum(["active", "development", "planned"]).default("active"),
  }),
});

export const collections = { publications, grants, talks, tools };
