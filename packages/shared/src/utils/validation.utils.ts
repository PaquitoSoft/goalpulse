import { z } from 'zod';

/**
 * Utility function to validate data against a Zod schema
 * @param schema - Zod schema to validate against
 * @param data - Data to validate
 * @returns Parsed data if valid, throws error if invalid
 */
export function validateSchema<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

/**
 * Safe validation that returns success/error result instead of throwing
 * @param schema - Zod schema to validate against
 * @param data - Data to validate
 * @returns SafeParseResult containing success boolean and data or error
 */
export function safeValidateSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): z.SafeParseReturnType<unknown, T> {
  return schema.safeParse(data);
}

/**
 * Extract error messages from Zod validation errors
 * @param error - ZodError instance
 * @returns Array of error messages
 */
export function getValidationErrors(error: z.ZodError): string[] {
  return error.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
}
