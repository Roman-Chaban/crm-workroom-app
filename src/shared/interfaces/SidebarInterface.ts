import { SidebarNavListItem } from '@/shared/types/SidebarNavTypes';
import { HTMLProps } from 'react';

export interface SidebarNavItemProps extends HTMLProps<HTMLLIElement> {
  item: SidebarNavListItem;
  isActive: boolean;
}

export interface SidebarProps {
  onOpenModal: () => void;
}
