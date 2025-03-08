import { useEffect } from 'react';

export const useBodyOverflow = (isOverflow: boolean) => {
  useEffect(() => {
    if (isOverflow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOverflow]);
};
