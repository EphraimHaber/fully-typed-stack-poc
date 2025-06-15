import { AppApi, Configuration } from '../api-axios';

const configuration = new Configuration({
  basePath: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
});
export const apiInstance = new AppApi(configuration);
