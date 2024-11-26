import axios from 'axios';

import { REQUESTS_METHODS } from '@/enums/requests-methods';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  method: REQUESTS_METHODS.DELETE,
});

export const LogoutUser = async (userId: number, authToken: string) => {
  try {
    axios.defaults.headers['Authorization'] = `Bearer ${authToken}`;
    const response = await apiClient.delete(`/logout/${userId}`);
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
