import axios from 'axios';

import { ConfirmationPayload } from '@/types/registration';

import { REQUESTS_METHODS } from '@/enums/requests-methods';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  method: REQUESTS_METHODS.POST,
});

export const confirmUserRegistration = async (
  payload: ConfirmationPayload
): Promise<ConfirmationPayload> => {
  try {
    const response = await apiClient.post('/confirm-registration', payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Invalid code or registration failed.';
      console.error('Error during registration confirmation:', errorMessage);
      throw new Error(errorMessage);
    }
    throw new Error(
      'An unknown error occurred during registration confirmation'
    );
  }
};
