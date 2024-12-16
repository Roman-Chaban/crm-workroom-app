import { useState, useEffect } from 'react';

export const useParsedUserName = (sortedData: string | null): string | null => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (!sortedData || typeof sortedData !== 'string') {
      setUserName(null);
      return;
    }

    try {
      const parsedUserName = JSON.parse(sortedData);
      if (parsedUserName?.email) {
        const namePart = parsedUserName.email.split('@')[0];
        const [firstName, lastName] = namePart
          .split('.')
          .map((part: string) => part.replace(/\d+/g, '').trim());
        const validUserName = [firstName, lastName]
          .filter(Boolean)
          .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(' ');

        setUserName(validUserName || null);
      } else {
        console.warn('Email field is missing in parsed data.');
        setUserName(null);
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
      setUserName(null);
    }
  }, [sortedData]);

  return userName;
};
