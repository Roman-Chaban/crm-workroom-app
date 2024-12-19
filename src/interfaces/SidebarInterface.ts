import { SidebarNavListItem } from '@/types/SidebarNavTypes';

export interface SidebarNavItemProps {
  item: SidebarNavListItem;
  isActive: boolean;
}

export interface SidebarProps {
  onOpenModal: () => void;
}
