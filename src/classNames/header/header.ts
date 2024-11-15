import classNames from 'classnames';

import styles from '@/components/layout/Header/Header.module.scss';

export const containerClassNames = {
  home: styles['header'],
  container: styles['headerContainer'],
  searchInput: styles['headerSearchInput'],
  searchLabel: styles['headerSearchLabel'],
  searchContainer: styles['headerSearchContainer'],
  notification: styles['headerNotification'],
};

export const header = classNames(containerClassNames.home);
export const headerContainer = classNames(containerClassNames.container);
export const searchContainer = classNames(containerClassNames.searchContainer);
export const searchInput = classNames(containerClassNames.searchInput);
export const searchLabel = classNames(containerClassNames.searchLabel);
export const notification = classNames(containerClassNames.notification);
