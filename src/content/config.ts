import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})

const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    client: z.string().optional(),
    github: z.string().url().optional()
  }),
})


export const collections = {
  'blog': blogCollection,
  'projects': projectCollection
}