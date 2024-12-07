export interface TasksNavButton {
  id: number;
  icon: string;
  activeIcon: string;
  alternativeText: string;
}

export type TasksNavButtons = TasksNavButton[];

export type ActiveNavButton = number;
