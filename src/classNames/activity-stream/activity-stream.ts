import classNames from 'classnames';

import styles from '@/components/home/ActivityStream/ActivityStream.module.scss';

export const containerClassNames = {
  activityStream: styles['activityStream'],
  activityStreamContainer: styles['activityStreamContainer'],
  activityStreamTitle: styles['activityStreamTitle'],
};

export const activityStream = classNames(containerClassNames.activityStream);
export const activityStreamContainer = classNames(
  containerClassNames.activityStreamContainer
);
export const activityStreamTitle = classNames(
  containerClassNames.activityStreamTitle
);
