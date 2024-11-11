import classNames from 'classnames';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const containerClassNames = {
  sidebar: styles['sidebar'],
  container: styles['sidebarContainer'],
  logo: styles['sidebarLogo'],
  logoIcon: styles['sidebarLogoIcon'],
  logoNavContainer: styles['sidebarLogoNavContainer'],
  sidebarNav: styles['sidebarNav'],
  navList: styles['sidebarNavList'],
  navListItem: styles['sidebarNavListItem'],
  navListItemLink: styles['sidebarNavListItemLink'],
  navListItemIcon: styles['sidebarNavListItemIcon'],
  logout: styles['sidebarLogout'],
  logoutImageBlock: styles['sidebarLogoutBlock'],
  logoutImage: styles['sidebarLogoutImage'],
  logoutLink: styles['sidebarLogoutLink'],
  logoutButton: styles['sidebarLogoutButton'],
  supportButton: styles['sidebarSupportButton']
};

export const sidebar = classNames(containerClassNames.sidebar);
export const container = classNames(containerClassNames.container);
export const logo = classNames(containerClassNames.logo);
export const logoIcon = classNames(containerClassNames.logoIcon);
export const logoNavContainer = classNames(containerClassNames.logoNavContainer);
export const nav = classNames(containerClassNames.sidebarNav);
export const navList = classNames(containerClassNames.navList);
export const navListItem = classNames(containerClassNames.navListItem);
export const navListItemLink = classNames(containerClassNames.navListItemLink);
export const navListItemIcon = classNames(containerClassNames.navListItemIcon);
export const logout = classNames(containerClassNames.logout);
export const logoutImageBlock = classNames(containerClassNames.logoutImageBlock);
export const logoutImage = classNames(containerClassNames.logoutImage);
export const logoutLink = classNames(containerClassNames.logoutLink);
export const logoutButton = classNames(containerClassNames.logoutButton);
export const supportButton = classNames(containerClassNames.supportButton);