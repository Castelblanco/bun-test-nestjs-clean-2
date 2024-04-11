import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const PORT = Bun.env.PORT || 4000;

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.listen(PORT);
    console.log(`Server Nestjs in Port ${PORT}`);
})();
