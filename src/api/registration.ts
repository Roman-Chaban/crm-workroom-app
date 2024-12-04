import axios, { AxiosRequestConfig } from 'axios';

import { RegistrationUserData } from '@/types/registration';

import { REQUESTS_METHODS } from '@/enums/requestsMethods';
import { API_ENDPOINTS } from '@/enums/apiEndpoints';

const apiClient = axios.create({
  baseURL: `https://workflow-crm-server-staging.up.railway.app/api/auth`,
  headers: { 'Content-Type': 'application/json' },
});

const apiRequest = async <T>(
  method: REQUESTS_METHODS,
  endpoint: string,
  data: unknown = null,
  headers: AxiosRequestConfig['headers'] = {},
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      data,
      headers: { ...headers },
    };

    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An error occurred while making the request';
      console.error('Axios error:', errorMessage);
      throw new Error(errorMessage);
    }
    console.error('Unknown error:', error);
    throw new Error('Unknown error occurred during request');
  }
};

export const registerUser = async (
  userData: RegistrationUserData,
): Promise<RegistrationUserData> => {
  return apiRequest<RegistrationUserData>(
    REQUESTS_METHODS.POST,
    API_ENDPOINTS.REGISTRATION,
    userData,
  );
};
