import { mkdir, writeFile } from 'node:fs/promises'

import { z } from 'astro/zod'

import { ExperienceJSON, SocialJSON } from './src/schema.ts'

const socialJsonSchema = z.toJSONSchema(SocialJSON)

const experienceJsonSchema = z.toJSONSchema(ExperienceJSON)

await mkdir('src/data/.schema', { recursive: true })

await writeFile(
  'src/data/.schema/social.json',
  JSON.stringify(socialJsonSchema)
)

await writeFile(
  'src/data/.schema/experience.json',
  JSON.stringify(experienceJsonSchema)
)
