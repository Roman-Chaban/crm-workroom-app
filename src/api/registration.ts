import axios from 'axios';

import { RegistrationUserData } from '@/types/registration';

import { REQUESTS_METHODS } from '@/enums/requests-methods';

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
      `/registration`,
      userData
    );
    console.log('Response from server:', response.data);
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
