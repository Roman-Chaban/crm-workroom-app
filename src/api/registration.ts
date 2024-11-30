import axios from 'axios';

import { RegistrationUserData } from '@/types/registration';

import { REQUESTS_METHODS } from '@/enums/requestsMethods';
import { API_ENDPOINTS } from '@/enums/apiEndpoints';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: { 'Content-Type': 'application/json' },
  method: REQUESTS_METHODS.POST,
});

export const registerUser = async (
  userData: RegistrationUserData
): Promise<RegistrationUserData> => {
  try {
    const response = await apiClient.post<RegistrationUserData>(
      API_ENDPOINTS.REGISTRATION,
      userData
    );
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
