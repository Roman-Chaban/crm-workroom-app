import classNames from 'classnames';

import styles from '@/styles/pages/home.module.scss';

export const containerClassNames = {
  home: [styles['home']],
  container: [styles['homeContainer']],
};

export const home = classNames(containerClassNames.home);
export const homeContainer = classNames(containerClassNames.container);
