import { SidebarNav } from '@/types/sidebarNav';

import { NAV_PATHS } from '@/enums/navPaths';

export const sidebarNav: SidebarNav = [
  {
    id: 1,
    href: NAV_PATHS.DASHBOARD,
    label: 'Dashboard',
    title: 'Dashboard',
    activeIcon: '/icons/sidebar-icons/active-dashboard.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-dashboard.svg',
  },
  {
    id: 2,
    href: NAV_PATHS.PROJECTS,
    label: 'Projects',
    title: 'Projects',
    activeIcon: '/icons/sidebar-icons/active-projects.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-projects.svg',
  },
  {
    id: 3,
    href: NAV_PATHS.CALENDAR,
    label: 'Calendar',
    title: 'Calendar',
    activeIcon: '/icons/sidebar-icons/active-calendar.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-calendar.svg',
  },
  {
    id: 4,
    href: NAV_PATHS.VACATIONS,
    label: 'Vacations',
    title: 'Vacations',
    activeIcon: '/icons/sidebar-icons/active-vacations.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-vacations.svg',
  },
  {
    id: 5,
    href: NAV_PATHS.EMPLOYEES,
    label: 'Employees',
    title: 'Employees',
    activeIcon: '/icons/sidebar-icons/active-employees.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-employees.svg',
  },
  {
    id: 6,
    href: NAV_PATHS.MESSENGER,
    label: 'Messenger',
    title: 'Messenger',
    activeIcon: '/icons/sidebar-icons/active-messenger.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-messenger.svg',
  },
  {
    id: 7,
    href: NAV_PATHS.INFO_PORTAL,
    label: 'Info Portal',
    title: 'Info Portal',
    activeIcon: '/icons/sidebar-icons/active-info_portal.svg',
    inactiveIcon: '/icons/sidebar-icons/inactive-info_portal.svg',
  },
];
