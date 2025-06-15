import { AppApi, Configuration } from '@repo/backend-api-client';

const configuration = new Configuration({
  basePath: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
});
export const apiInstance = new AppApi(configuration);
