export interface NotificationItem {
  id: number;
  heading: string;
  paragraph: string;
}

export interface SwitcherButtonClassNames {
  button: string;
  circle: string;
  active: string;
}

export interface NotificationClassNames {
  main: string;
  container: string;
  paragraph: string;
  heading: string;
  switcher: SwitcherButtonClassNames;
}

export type NotificationItems = NotificationItem[];
