import { SidebarNav } from "@/types/sidebar-nav";

import { SidebarNavPaths } from "@/enums/sidebar-nav";

export const sidebarNav: SidebarNav = [
  {
    id: 1,
    href: SidebarNavPaths.DASHBOARD,
    label: "Dashboard",
    activeIcon: "/icons/sidebar-icons/active-dashboard.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-dashboard.svg",
  },
  {
    id: 2,
    href: SidebarNavPaths.PROJECTS,
    label: "Projects",
    activeIcon: "/icons/sidebar-icons/active-projects.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-projects.svg",
  },
  {
    id: 3,
    href: SidebarNavPaths.CALENDAR,
    label: "Calendar",
    activeIcon: "/icons/sidebar-icons/active-calendar.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-calendar.svg",
  },
  {
    id: 4,
    href: SidebarNavPaths.VACATIONS,
    label: "Vacations",
    activeIcon: "/icons/sidebar-icons/active-vacations.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-vacations.svg",
  },
  {
    id: 5,
    href: SidebarNavPaths.EMPLOYEES,
    label: "Employees",
    activeIcon: "/icons/sidebar-icons/active-employees.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-employees.svg",
  },
  {
    id: 6,
    href: SidebarNavPaths.MESSENGER,
    label: "Messenger",
    activeIcon: "/icons/sidebar-icons/active-messenger.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-messenger.svg",
  },
  {
    id: 7,
    href: SidebarNavPaths.INFO_PORTAL,
    label: "Info Portal",
    activeIcon: "/icons/sidebar-icons/active-info_portal.svg",
    inactiveIcon: "/icons/sidebar-icons/inactive-info_portal.svg",
  },
];
