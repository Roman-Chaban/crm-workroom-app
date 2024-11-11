import type { FC, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './BodyWrapper.module.scss';

interface BodyWrapperProps {
  children: ReactNode;
}

export const BodyWrapper: FC<BodyWrapperProps> = ({ children }) => {
  const bodyWrapper = classNames(styles['bodyWrapper']);

  return <div className={bodyWrapper}>{children}</div>;
};
