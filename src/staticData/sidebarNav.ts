import { SidebarNav } from '@/types/sidebarNav';

import { NavPaths } from '@/enums/navPaths';

export const sidebarNav: SidebarNav = [
  {
    id: 1,
    href: NavPaths.DASHBOARD,
    label: 'Dashboard',
    activeIcon: '/icons/sidebar-icons/active-dashboard.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-dashboard.svg',
  },
  {
    id: 2,
    href: NavPaths.PROJECTS,
    label: 'Projects',
    activeIcon: '/icons/sidebar-icons/active-projects.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-projects.svg',
  },
  {
    id: 3,
    href: NavPaths.CALENDAR,
    label: 'Calendar',
    activeIcon: '/icons/sidebar-icons/active-calendar.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-calendar.svg',
  },
  {
    id: 4,
    href: NavPaths.VACATIONS,
    label: 'Vacations',
    activeIcon: '/icons/sidebar-icons/active-vacations.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-vacations.svg',
  },
  {
    id: 5,
    href: NavPaths.EMPLOYEES,
    label: 'Employees',
    activeIcon: '/icons/sidebar-icons/active-employees.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-employees.svg',
  },
  {
    id: 6,
    href: NavPaths.MESSENGER,
    label: 'Messenger',
    activeIcon: '/icons/sidebar-icons/active-messenger.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-messenger.svg',
  },
  {
    id: 7,
    href: NavPaths.INFO_PORTAL,
    label: 'Info Portal',
    activeIcon: '/icons/sidebar-icons/active-info_portal.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-info_portal.svg',
  },
];
