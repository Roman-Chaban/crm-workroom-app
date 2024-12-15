export interface SidebarNavListItem {
  id: number;
  title: string;
  href: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
}

export type SidebarNav = SidebarNavListItem[];
