import axios from 'axios';

import { ServicesDetails, ServiceDetailsReturned } from '@/shared/types/ServicesDetailsTypes';

import { REQUESTS_METHODS } from '@/shared/enums/requestsMethods';
import { API_ENDPOINTS } from '@/shared/enums/apiEndpoints';

const apiClient = axios.create({
  baseURL: 'https://workflow-crm-server-staging.up.railway.app/api',
  headers: { 'Content-Type': 'application/json' },
  method: REQUESTS_METHODS.POST,
});

export const getServicesDetails = async (
  serviceDetails: ServicesDetails,
): ServiceDetailsReturned => {
  try {
    const response = await apiClient.post<ServicesDetails>(
      API_ENDPOINTS.SERVICE_DETAILS,
      serviceDetails,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch service details.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};
