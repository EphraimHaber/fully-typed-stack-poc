import { type SwaggerDocumentOptions } from '@nestjs/swagger';

export const SWAGGER_DOCUMENT_OPTIONS: SwaggerDocumentOptions = {
  autoTagControllers: true,
} as const;
