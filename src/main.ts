import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { observeNotification } from 'rxjs/internal/Notification';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // this config to enable validation
  // this is mandatory
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted: true
  }))
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
