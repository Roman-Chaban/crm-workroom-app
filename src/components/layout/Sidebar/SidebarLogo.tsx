import { FC } from 'react';

import Image from 'next/image';

import { logo, logoIcon } from '@/classNames/sidebar/sidebarClassNames';

export const SidebarLogo: FC = () => {
  return (
    <div className={logo}>
      <Image
        src={'/icons/sidebar-icons/Logo.svg'}
        alt="Workroom Logo"
        width={50}
        height={50}
        priority
        className={logoIcon}
      />
    </div>
  );
};
