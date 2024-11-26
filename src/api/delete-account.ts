import axios from 'axios';

import { REQUESTS_METHODS } from '@/enums/requests-methods';

axios.defaults.baseURL =
  'https://workflow-crm-server-staging.up.railway.app/api/auth';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.method = REQUESTS_METHODS.DELETE;

export const DeleteUserAccount = async (userId: number, authToken: string) => {
  try {
    axios.defaults.headers['Authorization'] = `Bearer ${authToken}`;
    const response = await axios.delete(`/logout/${userId}`);
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
