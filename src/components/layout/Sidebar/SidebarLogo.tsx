import React, { type FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NAV_PATHS } from '@/enums/navPaths';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const SidebarLogo: FC = () => {
  return (
    <div className={styles['sidebarLogo']}>
      <Link href={NAV_PATHS.DASHBOARD}>
        <Image
          src={'/icons/sidebar-icons/Logo.svg'}
          alt="Workroom Logo"
          width={50}
          height={50}
          priority
          className={styles['sidebarLogoIcon']}
        />
      </Link>
    </div>
  );
};
