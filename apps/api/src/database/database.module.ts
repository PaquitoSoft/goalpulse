import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

@Global()
@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL') || 'file:./local.db';
        const authToken = configService.get<string>('DATABASE_AUTH_TOKEN');

        const client = createClient({
          url: databaseUrl,
          authToken: authToken,
        });

        return drizzle(client, { schema });
      },
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
