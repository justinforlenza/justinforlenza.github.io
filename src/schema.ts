import { z } from 'astro/zod'

export const SocialSchema = z.object({
  name: z.string(),
  url: z.url(),
})

export const SocialJSON = z.object({
  $schema: z.string(),
  records: SocialSchema.array(),
})
