import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  schema: './src/database/schema/*',
  out: './drizzle',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'file:./local.db',
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
