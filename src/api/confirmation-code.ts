import axios from 'axios';

import { ConfirmationPayload } from '@/types/registration';

import { REQUESTS_METHODS } from '@/enums/requests-methods';

axios.defaults.baseURL =
  'https://workflow-crm-server-staging.up.railway.app/api/auth';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.method = REQUESTS_METHODS.POST;

export const confirmUserRegistration = async (
  payload: ConfirmationPayload
): Promise<void> => {
  try {
    const response = await axios.post('/confirm-registration', payload);

    if (response.status === 200) {
      console.log('Registration confirmed successfully:', response.data);
    } else {
      throw new Error('Invalid code or registration failed.');
    }
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
