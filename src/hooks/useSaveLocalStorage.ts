import { useCallback } from 'react';

export const useSaveLocalStorage = () => {
  const saveToLocalStorage = useCallback((name: string, value: string) => {
    const serviceDetails = JSON.parse(
      localStorage.getItem('service-details') || '{}'
    );
    const updatedServiceDetails = {
      ...serviceDetails,
      [name]: value,
    };

    try {
      localStorage.setItem(
        'service-details',
        JSON.stringify(updatedServiceDetails)
      );
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, []);

  return { saveToLocalStorage };
};
