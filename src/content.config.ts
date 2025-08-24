import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const post = defineCollection({
	loader: glob({ base: './src/posts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			author: z.string().optional(),
			keywords: z.string(),
			updatedAt: z.coerce.date().optional(),
			publishedAt: z.coerce.date(),
			image: image().optional(),
			lang: z.enum(['en', 'id']),
			readTime: z.coerce.number().min(1),
		}),
})

export const collections = { post }
