'use client';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

import { SingleValue } from 'react-select';

import {
  HomeModalHeader,
  HomeModalIllustration,
  HomeModalFieldsForm,
} from '@/components/index';

import {
  modal,
  modalContainer,
} from '@/classNames/home-modal/homeModalClassNames';

import { Option, SelectedValue } from '@/interfaces/select';

import { AreaValue } from '@/types/textarea';

interface HomeModalProps {
  onCloseModal: () => void;
}

export const HomeModal = forwardRef<HTMLDivElement, HomeModalProps>(
  ({ onCloseModal }, ref: ForwardedRef<HTMLDivElement>) => {
    const [selectedValue, setSelectedValue] =
      useState<SelectedValue>('Choose an option');
    const [areaDescription, setAreaDescription] = useState<AreaValue>('');

    const handleSelectChange = (newValue: SingleValue<Option>) => {
      if (newValue) {
        setSelectedValue(newValue.label);
      }
    };

    const handleChangeAreaDescription = (
      event: ChangeEvent<HTMLTextAreaElement>
    ) => {
      setAreaDescription(event.target.value);
    };

    return (
      <div className={modal}>
        <div className={modalContainer} ref={ref}>
          <HomeModalHeader onCloseModal={onCloseModal} />
          <HomeModalIllustration />
          <HomeModalFieldsForm
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
            areaDescription={areaDescription}
            handleChangeAreaDescription={handleChangeAreaDescription}
          />
        </div>
      </div>
    );
  }
);

HomeModal.displayName = 'HomeModal';
