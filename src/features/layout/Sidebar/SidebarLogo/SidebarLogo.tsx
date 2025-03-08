import React, { type FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Div } from '@/index';

import { NAV_PATHS } from '@/shared/enums/navPaths';

import styles from '@/features/layout/Sidebar/Sidebar.module.scss';

export const SidebarLogo: FC = () => {
  return (
    <Div
      role="container"
      className={styles['sidebarLogo']}
    >
      <Link
        role="link"
        href={NAV_PATHS.DASHBOARD}
        className={styles['sidebarLogoLink']}
      >
        <Image
          role="img"
          src={'/icons/sidebar-icons/Logo.svg'}
          alt="Workroom Logo"
          width={50}
          height={50}
          priority
          className={styles['sidebarLogoIcon']}
        />
      </Link>
    </Div>
  );
};
