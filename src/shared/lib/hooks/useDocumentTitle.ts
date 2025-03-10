'use client';

import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string) => {
  const defaultTitle = useRef<string>(document.title);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (title && document.title !== title) {
        document.title = title;
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.title = defaultTitle.current;
      }
    };
  }, [title]);
};
