import { getApp } from '../src/app';
import { getDocumentFactory } from '../src/swagger';
import * as fs from 'fs';

const saveSwaggerToFile = (document: string, filePath: string) => {
  fs.writeFileSync(filePath, document, 'utf8');
  console.log(`Swagger document saved to ${filePath}`);
};

const generateSwagger = async () => {
  const app = await getApp();
  const documentFactory = getDocumentFactory(app);
  const document = documentFactory();
  const swaggerDocumentString = JSON.stringify(document, null, 2);
  const outputFilePath = 'swagger.json';
  saveSwaggerToFile(swaggerDocumentString, outputFilePath);
};

generateSwagger().catch((error) => {
  console.error('Error generating Swagger document:', error);
  process.exit(1);
});
