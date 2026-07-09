import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'

import {
  ExperienceJSON,
  ExperienceSchema,
  PostSchema,
  ProjectJSON,
  ProjectSchema,
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

const projects = defineCollection({
  loader: file('src/data/projects.json', {
    parser: async (raw) => {
      try {
        const parsed = JSON.parse(raw)
        const validated = ProjectJSON.parse(parsed)

        return validated.records.map((r, i) => ({ ...r, id: i }))
      } catch (e) {
        console.debug(e)
        throw new Error('')
      }
    },
  }),
  schema: ProjectSchema,
})

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
  schema: PostSchema,
})

export const collections = { socials, experience, projects, posts }
