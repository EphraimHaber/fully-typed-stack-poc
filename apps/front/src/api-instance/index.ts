import { apiInstance } from './api-instance';

export const getHello = async () => {
  try {
    const { status, data } = await apiInstance.appControllerGetHello();
    if (status === 200) {
      return data;
    } else {
      throw new Error(`Unexpected response status: ${status}`);
    }
  } catch (error) {
    console.error('Error fetching hello:', error);
    throw error;
  }
};

export { apiInstance };
