export const enum TASKS_TABS {
  ACTIVE_TASKS = 1,
  BOARD_TASKS = 2,
  CALENDAR_TASKS = 3,
}

export interface TasksNavButton {
  id: number;
  icon: string;
  activeIcon: string;
  alternativeText: string;
}

export type TasksNavButtons = TasksNavButton[];
export type ActiveTab = number;
