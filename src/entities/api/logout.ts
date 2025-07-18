import axios from 'axios';

import { REQUESTS_METHODS } from '@/shared/enums/requestsMethods';
import { API_ENDPOINTS } from '@/shared/enums/apiEndpoints';

type LogoutReturned = Promise<void>;

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  method: REQUESTS_METHODS.DELETE,
});

export const LogoutUser = async (): LogoutReturned => {
  try {
    const response = await apiClient.delete(API_ENDPOINTS.LOGOUT);

    if (response.status === 200) {
      console.log('User logged out successfully');
      localStorage.removeItem('registration');
      sessionStorage.clear();
    } else {
      console.warn('Logout completed with unexpected status:', response.status);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Failed to delete account`, error.response?.data || error.message);
    }
  }
};
