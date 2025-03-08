import axios from 'axios';

import { LoginData, QueryParams } from '@/shared/types/LoginTypes';

import { API_ENDPOINTS } from '@/shared/enums/apiEndpoints';
import { REQUESTS_METHODS } from '@/shared/enums/requestsMethods';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api/auth',
  headers: { 'Content-Type': 'application/json' },
  method: REQUESTS_METHODS.POST,
});

export const LoginUser = async (
  loginData: LoginData,
  queryParams: QueryParams,
) => {
  try {
    const response = await apiClient.post(
      `${API_ENDPOINTS.LOGIN}?remember=${queryParams.remember}`,
      loginData,
    );

    const { email, id, isAccountVerified, refreshToken } = response.data;

    return { email, id, isAccountVerified, refreshToken };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Registration failed';
      throw new Error(errorMessage);
    }
    throw new Error('Unknown error occurred during registration');
  }
};
