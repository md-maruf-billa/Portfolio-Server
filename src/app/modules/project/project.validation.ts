import { z } from 'zod'

const createProjectValidation = z.object({
  projectImage: z
    .string()
    .url({ message: 'Invalid URL for project image' })
    .optional(),
  projectName: z.string().min(1, { message: 'Project name is required' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' }),
  slogun: z.string().min(1, { message: 'Slogun is required' }),
  technologies: z
    .array(z.string().min(1))
    .min(1, { message: 'At least one technology is required' }),
  features: z
    .array(z.string().min(1))
    .min(1, { message: 'At least one feature is required' }),
  frontEndGitRepo: z.string(),
  backEndGitRepo: z.string(),
  liveLink: z.string(),
  isDeleted: z.boolean().optional()
})

export const projectValidations = {
  createProjectValidation
}
