import { mkdir, writeFile } from 'node:fs/promises'

import { z } from 'astro/zod'

import { SocialJSON } from './src/schema.ts'

const socialJsonSchema = z.toJSONSchema(SocialJSON)

await mkdir('src/data/.schema', { recursive: true })

await writeFile(
  'src/data/.schema/social.json',
  JSON.stringify(socialJsonSchema)
)
