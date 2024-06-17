import { NestFactory } from '@nestjs/core';
import { DiscussionsModule } from './discussions.module';

async function bootstrap() {
  const app = await NestFactory.create(DiscussionsModule);
  await app.listen(process.env.PORT || 3003);
}
bootstrap();
