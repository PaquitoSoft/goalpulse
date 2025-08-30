import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
});

export const updateUserSchema = z.object({
  email: z.string().email('Invalid email format').optional(),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long').optional(),
});

export const userIdSchema = z.object({
  id: z.coerce.number().int().positive('User ID must be a positive integer'),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
export type UserIdSchema = z.infer<typeof userIdSchema>;
