import type { FC } from 'react';

import {
  sidebar,
  container,
  logoNavContainer,
} from '@/classNames/sidebar/sidebar';

import {
  SidebarNav,
  Container,
  SidebarLogout,
  SidebarLogo,
} from '@/components/index/index';

interface SidebarProps {
  onOpenModal: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ onOpenModal }) => {
  return (
    <aside className={sidebar}>
      <Container className={container}>
        <Container className={logoNavContainer}>
          <SidebarLogo />
          <SidebarNav />
        </Container>
        <SidebarLogout onOpenModal={onOpenModal} />
      </Container>
    </aside>
  );
};
