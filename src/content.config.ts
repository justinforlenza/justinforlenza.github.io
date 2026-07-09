import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'

import { z } from 'astro/zod'

const SocialSchema = z.object({
  name: z.string(),
  url: z.url(),
})

const SocialJSON = z.object({
  records: SocialSchema.array(),
})

const socials = defineCollection({
  loader: file('src/data/socials.json', {
    parser: async (raw) => {
      const parsed = JSON.parse(raw)

      const validated = SocialJSON.parse(parsed)

      return validated.records.map((r, i) => ({ ...r, id: i }))
    },
  }),
  schema: SocialSchema
})

export const collections = { socials }
