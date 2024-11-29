'use client';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

import { SingleValue } from 'react-select';

import {
  HomeModalHeader,
  HomeModalIllustration,
  HomeModalFieldsForm,
  Container,
} from '@/components/index';

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
      options[0].label
    );
    const [areaDescription, setAreaDescription] = useState<AreaValue>('');

    const handleSelectChange = (selectValue: SingleValue<Option>) => {
      if (selectValue) {
        setSelectedValue(selectValue.label);
      }
    };

    const handleChangeAreaDescription = (
      event: ChangeEvent<HTMLTextAreaElement>
    ) => {
      setAreaDescription(event.target.value);
    };

    return (
      <div className={styles['modal']}>
        <Container className={styles['modalContainer']} ref={ref}>
          <HomeModalHeader onCloseModal={onCloseModal} />
          <HomeModalIllustration />
          <HomeModalFieldsForm
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
            areaDescription={areaDescription}
            handleChangeAreaDescription={handleChangeAreaDescription}
          />
        </Container>
      </div>
    );
  }
);

HomeModal.displayName = 'HomeModal';
