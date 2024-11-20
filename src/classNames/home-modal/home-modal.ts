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
  textarea: styles['modalTextarea'],
  textareaLabel: styles['modalTextareaLabel'],
  modalSendButton: styles['modalSendButton'],
  selectLabel: styles['modalSelectLabel'],
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
export const textarea = classNames(containerClassNames.textarea);
export const textareaLabel = classNames(containerClassNames.textareaLabel);
export const sendButton = classNames(containerClassNames.modalSendButton);
export const selectLabel = classNames(containerClassNames.selectLabel);
