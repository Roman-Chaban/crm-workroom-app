import classNames from 'classnames';

import styles from '@/components/layout/Main/Main.module.scss';

export const containerClassNames = {
  main: [styles['main']],
};

export const main = classNames(containerClassNames.main);
