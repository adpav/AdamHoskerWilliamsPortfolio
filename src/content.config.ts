import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notebook = defineCollection({
  loader: glob({ base: './src/content/notebook', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    type: z.enum(['writing', 'note', 'collection', 'experiment']),
    tags: z.array(z.string()).default([]),
    theme: z.string().default('default'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notebook };
