import classNames from 'classnames';

import styles from '@/components/layout/Header/Header.module.scss';

export const containerClassNames = {
  home: [styles['header']],
  container: [styles['header__container']],
};

export const header = classNames(containerClassNames.home);
export const headerContainer = classNames(containerClassNames.container);
