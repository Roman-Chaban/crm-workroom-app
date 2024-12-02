export interface SidebarNavListItem {
  id: number;
  href: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
}

export type SidebarNav = SidebarNavListItem[];
