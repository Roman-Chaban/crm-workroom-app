import { TasksNavButtons } from '@/shared/interfaces/TasksNavInterface';

export const tasksNavButtons: TasksNavButtons = [
  {
    id: 1,
    icon: '/icons/tasks-nav-icons/selected.svg',
    activeIcon: '/icons/tasks-nav-icons/selected-active.svg',
    alternativeText: '',
  },
  {
    id: 2,
    icon: '/icons/tasks-nav-icons/unselected.svg',
    activeIcon: '/icons/tasks-nav-icons/unselected-active.svg',
    alternativeText: ' ',
  },
  {
    id: 3,
    icon: '/icons/tasks-nav-icons/unselected-second.svg',
    activeIcon: '/icons/tasks-nav-icons/unselected-active-second.svg',
    alternativeText: '',
  },
];
