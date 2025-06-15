import { SwaggerModule } from '@nestjs/swagger';
import { getDocumentFactory } from './swagger';
import { getApp } from './app';

async function bootstrap() {
  const app = await getApp();
  SwaggerModule.setup('api', app, getDocumentFactory(app));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
