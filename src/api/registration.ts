import axios from 'axios';
import { RegistrationUserData } from '@/types/reg';

axios.defaults.baseURL =
  'https://workflow-crm-server-staging.up.railway.app/api/auth';
axios.defaults.headers['Content-Type'] = 'application/json';

export const registerUser = async (
  userData: RegistrationUserData
): Promise<RegistrationUserData> => {
  try {
    const response = await axios.post<RegistrationUserData>(
      '/registration',
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
