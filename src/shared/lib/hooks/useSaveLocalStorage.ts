import { useCallback } from 'react';

export const useSaveLocalStorage = () => {
  const saveToLocalStorage = useCallback((key: string, value: string) => {
    try {
      const currentData = JSON.parse(localStorage.getItem(key) || '{}');

      const updatedData = {
        ...currentData,
        [key]: value,
      };

      localStorage.setItem(key, JSON.stringify(updatedData));
    } catch (error) {
      console.error(`Error saving to localStorage (${key}):`, error);
    }
  }, []);

  return { saveToLocalStorage };
};
