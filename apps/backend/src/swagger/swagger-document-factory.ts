import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_DOCUMENT_OPTIONS } from './swagger-options';

export const getDocumentFactory = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  return () => SwaggerModule.createDocument(app, config, SWAGGER_DOCUMENT_OPTIONS);
};
