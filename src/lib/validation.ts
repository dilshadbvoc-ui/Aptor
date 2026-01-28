import { z } from 'zod';

// Contact form validation
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be less than 15 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters')
});

// User validation
export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(100, 'Password must be less than 100 characters'),
  role: z.enum(['admin', 'editor', 'viewer']).optional()
});

// Login validation
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required')
});

// Blog validation
export const blogSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200, 'Title must be less than 200 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters').max(300, 'Excerpt must be less than 300 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }).optional()
});

// University validation
export const universitySchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  establishedYear: z.number().min(1800, 'Established year must be after 1800').max(new Date().getFullYear(), 'Established year cannot be in the future'),
  type: z.enum(['public', 'private']),
  ranking: z.number().min(1).optional(),
  website: z.string().url('Please enter a valid website URL').optional(),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  featured: z.boolean().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }).optional()
});

// College validation
export const collegeSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters'),
  establishedYear: z.number().min(1800, 'Established year must be after 1800').max(new Date().getFullYear(), 'Established year cannot be in the future'),
  type: z.enum(['engineering', 'medical', 'arts', 'science', 'commerce', 'law', 'other']),
  affiliation: z.string().optional(),
  website: z.string().url('Please enter a valid website URL').optional(),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  featured: z.boolean().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }).optional()
});

// Event validation
export const eventSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200, 'Title must be less than 200 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  startDate: z.string().refine((date) => new Date(date) > new Date(), 'Start date must be in the future'),
  endDate: z.string().refine((date) => new Date(date) > new Date(), 'End date must be in the future'),
  location: z.string().min(3, 'Location must be at least 3 characters'),
  type: z.enum(['workshop', 'seminar', 'webinar', 'conference', 'fair', 'other']),
  capacity: z.number().min(1, 'Capacity must be at least 1').optional(),
  registrationDeadline: z.string().optional(),
  fee: z.string().optional(),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  featured: z.boolean().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }).optional()
});

// Internship validation
export const internshipSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200, 'Title must be less than 200 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(100, 'Company name must be less than 100 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters'),
  type: z.enum(['remote', 'onsite', 'hybrid']),
  duration: z.string().min(3, 'Duration must be specified'),
  stipend: z.string().min(1, 'Stipend information is required'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  requirements: z.array(z.string()).min(1, 'At least one requirement must be specified'),
  applicationDeadline: z.string().refine((date) => new Date(date) > new Date(), 'Application deadline must be in the future'),
  startDate: z.string().refine((date) => new Date(date) > new Date(), 'Start date must be in the future'),
  applicationUrl: z.string().url('Please enter a valid application URL').optional(),
  contactEmail: z.string().email('Please enter a valid contact email').optional(),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  featured: z.boolean().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }).optional()
});

// Helper function to validate data
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; errors: string[] } {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
      return { success: false, errors };
    }
    return { success: false, errors: ['Validation failed'] };
  }
}

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}