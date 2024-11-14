import classNames from 'classnames';

import styles from '@/components/home/HomeModal/HomeModal.module.scss';

export const containerClassNames = {
  modal: styles['modal'],
  modalContainer: styles['modalContainer'],
  modalHeader: styles['modalHeader'],
  modalHeaderButton: styles['modalHeaderButton'],
  modalHeaderTitle: styles['modalHeaderTitle'],
  closeIcon: styles['modalCloseIcon'],
  modalHeaderParagraph: styles['modalHeaderParagraph'],
  modalBannerImage: styles['modalBannerImage'],
};

export const modal = classNames(containerClassNames.modal);
export const modalContainer = classNames(containerClassNames.modalContainer);
export const modalHeader = classNames(containerClassNames.modalHeader);
export const modalHeaderButton = classNames(
  containerClassNames.modalHeaderButton
);
export const modalHeaderTitle = classNames(
  containerClassNames.modalHeaderTitle
);
export const modalHeaderParagraph = classNames(
  containerClassNames.modalHeaderParagraph
);
export const modalBannerImage = classNames(
  containerClassNames.modalBannerImage
);

export const closeIcon = classNames(containerClassNames.closeIcon);
