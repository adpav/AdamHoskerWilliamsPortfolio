import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { entryTypes, topics, type EntryType } from './notebook';

const notebook = defineCollection({
  loader: glob({ base: './src/content/notebook', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    type: z.enum(Object.keys(entryTypes) as [EntryType, ...EntryType[]]),
    tags: z.array(z.enum(topics)).max(2).default([]),
    theme: z.string().default('default'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notebook };
