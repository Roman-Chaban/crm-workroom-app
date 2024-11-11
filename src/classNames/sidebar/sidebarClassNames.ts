import classNames from 'classnames';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const containerClassNames = {
  sidebar: [styles['sidebar']],
};

export const sidebar = classNames(containerClassNames.sidebar);
