import { z } from 'astro/zod'

export const SocialSchema = z.object({
  name: z.string(),
  url: z.url(),
})

export const SocialJSON = z.object({
  $schema: z.string(),
  records: SocialSchema.array(),
})

export const ExperienceSchema = z.object({
  start: z.iso.date(),
  end: z.iso.date().optional(),
  consultant: z.boolean().default(false).optional(),
  role: z.string(),
  org: z.string(),
  highlights: z.array(z.string()),
})

export const ExperienceJSON = z.object({
  $schema: z.string(),
  records: ExperienceSchema.array(),
})

export type Experience = z.infer<typeof ExperienceSchema>
