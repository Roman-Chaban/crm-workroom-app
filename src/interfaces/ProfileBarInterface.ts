export interface ProfileBarItem {
  id: number;
  activeIcon: string;
  inactiveIcon: string;
  title: string;
}

export interface ProfileBarListClassNames {
  list: string;
  listItem: string;
}

export type ProfileBarItems = ProfileBarItem[];
