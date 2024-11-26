import { REQUESTS_METHODS } from '@/enums/requests-methods';
import { LoginData } from '@/types/login';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: { 'Content-Type': 'application/json' },
  method: REQUESTS_METHODS.POST,
});

export const LoginUser = async (loginData: LoginData) => {
  try {
    const response = await apiClient.post('/login', loginData);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Registration failed';
      throw new Error(errorMessage);
    }
    throw new Error('Unknown error occurred during registration');
  }
};
