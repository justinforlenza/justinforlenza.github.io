import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'

import {
  ExperienceJSON,
  ExperienceSchema,
  SocialJSON,
  SocialSchema,
} from './schema'

const socials = defineCollection({
  loader: file('src/data/socials.json', {
    parser: async (raw) => {
      const parsed = JSON.parse(raw)

      const validated = SocialJSON.parse(parsed)

      return validated.records.map((r, i) => ({ ...r, id: i }))
    },
  }),
  schema: SocialSchema,
})

const experience = defineCollection({
  loader: file('src/data/experience.json', {
    parser: async (raw) => {
      try {
        const parsed = JSON.parse(raw)
        const validated = ExperienceJSON.parse(parsed)

        return validated.records.map((r, i) => ({ ...r, id: i }))
      } catch (e) {
        console.debug(e)
        throw new Error('')
      }
    },
  }),
  schema: ExperienceSchema,
})

export const collections = { socials, experience }
