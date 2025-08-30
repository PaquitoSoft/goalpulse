import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // CORS configuration
  app.enableCors({
    origin: configService.get('CORS_ORIGIN') || 'http://localhost:5173',
    credentials: true,
  });

  // Global prefix for API routes
  app.setGlobalPrefix('api');

  // Swagger documentation setup
  const config = new DocumentBuilder()
    .setTitle('GoalPulse API')
    .setDescription('API for GoalPulse application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = configService.get('PORT') || 3001;
  await app.listen(port);
  
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation: http://localhost:${port}/api/docs`);
}
bootstrap();
