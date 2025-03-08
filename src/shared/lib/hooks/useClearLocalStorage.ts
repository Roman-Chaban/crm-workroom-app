import { useCallback } from 'react';

export const useClearLocalStorage = () => {
  const removeItems = useCallback((keys: Array<string>) => {
    if (!Array.isArray(keys)) {
      console.error('Keys must be an array.');
      return;
    }

    keys.forEach((key: string) => {
      localStorage.removeItem(key);
    });
  }, []);

  return removeItems;
};
