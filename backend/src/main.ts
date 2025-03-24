import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { exec } from 'child_process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
	await app.listen(process.env.PORT ?? 4000)

  const url = 'http://localhost:3000';
  const command = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
  exec(command);
}
bootstrap();
