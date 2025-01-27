import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  if (!process.env.CLIENT_URL) {
    throw new Error('CLIENT_URL environment variable is not defined');
  }

  app.enableCors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  });

  await app.listen(process.env.PORT);
}
bootstrap();
