import { useState, useEffect } from 'react';

export const useParsedUserName = (sortedData: string | null): string | null => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (sortedData) {
      try {
        const parsedUserName = JSON.parse(sortedData);
        if (parsedUserName && parsedUserName.email) {
          const namePart = parsedUserName.email.split('@')[0];
          const [firstName, lastName] = namePart
            .split('.')
            .map((part: string) => part.replace(/\d+/g, '').trim());
          const validUserName = [firstName, lastName]
            .filter(Boolean)
            .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
            .join(' ');

          setUserName(validUserName || null);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [sortedData]);

  return userName;
};
