import type { FC } from 'react';

import { header, headerContainer } from '@/classNames/header/headerClassNames';

export const Header: FC = () => {
  return (
    <header className={header}>
      <div className={headerContainer}>Header</div>
    </header>
  );
};
