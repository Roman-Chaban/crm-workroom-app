import axios from 'axios';

import { RegistrationUserData } from '@/types/reg';

axios.defaults.baseURL =
  'https://workflow-crm-server-staging.up.railway.app/api/auth/registration';

export const registerUser = async (
  userData: RegistrationUserData
): Promise<RegistrationUserData> => {
  try {
    const response = await axios.post<RegistrationUserData>(
      '/register',
      userData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error during registration:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
    console.error('Unknown error:', error);
    throw new Error('Unknown error occurred during registration');
  }
};
