import type { FC } from 'react';

import Image from 'next/image';

import {
  sidebar,
  container,
  logo,
  logoIcon,
  logoNavContainer,
} from '@/classNames/sidebar/sidebarClassNames';

import { SidebarNav, Container, SidebarLogout } from '@/components/index/index';

interface SidebarProps {
  onOpenModal: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ onOpenModal }) => {
  return (
    <aside className={sidebar}>
      <Container className={container}>
        <Container className={logoNavContainer}>
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
          <SidebarNav />
        </Container>
        <SidebarLogout onOpenModal={onOpenModal} />
      </Container>
    </aside>
  );
};
