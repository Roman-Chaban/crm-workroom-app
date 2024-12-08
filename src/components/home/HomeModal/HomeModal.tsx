'use client';

import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { SingleValue } from 'react-select';

import {
  HomeModalHeader,
  HomeModalIllustration,
  HomeModalFieldsForm,
  Container,
  Div,
} from '@/index/index';

import { Option, SelectedValue } from '@/interfaces/select';

import { AreaValue } from '@/types/textarea';

import { options } from '@/staticData/requestOptions';

import styles from './HomeModal.module.scss';

interface HomeModalProps {
  onCloseModal: () => void;
}

export const HomeModal = forwardRef<HTMLDivElement, HomeModalProps>(
  ({ onCloseModal }, ref: ForwardedRef<HTMLDivElement>) => {
    const [selectedValue, setSelectedValue] = useState<SelectedValue>(
      options[0].label,
    );
    const [areaDescription, setAreaDescription] = useState<AreaValue>('');

    const [portalContainer, setPortalContainer] = useState<Element | null>(
      null,
    );

    useEffect(() => {
      const modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
        const newModalRoot = document.createElement('div');
        newModalRoot.setAttribute('id', 'modal-root');
        document.body.appendChild(newModalRoot);
        setPortalContainer(newModalRoot);
      } else {
        setPortalContainer(modalRoot);
      }

      return () => {
        if (!document.getElementById('modal-root') && portalContainer) {
          portalContainer.remove();
        }
      };
    }, []);

    const handleSelectChange = (selectValue: SingleValue<Option>) => {
      if (selectValue) {
        setSelectedValue(selectValue.label);
      }
    };

    const handleChangeAreaDescription = (
      event: ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setAreaDescription(event.target.value);
    };

    if (!portalContainer) return null;

    return createPortal(
      <Div className={styles['modal']}>
        <Container
          className={styles['modalContainer']}
          ref={ref}
        >
          <HomeModalHeader onCloseModal={onCloseModal} />
          <HomeModalIllustration />
          <HomeModalFieldsForm
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
            areaDescription={areaDescription}
            handleChangeAreaDescription={handleChangeAreaDescription}
          />
        </Container>
      </Div>,
      portalContainer,
    );
  },
);

HomeModal.displayName = 'HomeModal';
