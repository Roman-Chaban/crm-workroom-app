import classNames from 'classnames';

import styles from '@/components/ui-components/Select/Select.module.scss';

export const containerClassNames = {
  select: styles['select'],
  selectContainer: styles['selectContainer'],
  label: styles['selectLabel'],
  option: styles['selectOption'],
  defaultOption: styles['selectDefaultOption'],
};

export const select = classNames(containerClassNames.select);
export const selectContainer = classNames(containerClassNames.selectContainer);
export const label = classNames(containerClassNames.label);
export const option = classNames(containerClassNames.option);
export const defaultOption = classNames(containerClassNames.defaultOption);
