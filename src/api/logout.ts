import axios from 'axios';

import { REQUESTS_METHODS } from '@/enums/requests-methods';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  method: REQUESTS_METHODS.DELETE,
});

export const LogoutUser = async () => {
  try {
    const response = await apiClient.delete(`/logout`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `Failed to delete account`,
        error.response?.data || error.message
      );
    }
  }
};
