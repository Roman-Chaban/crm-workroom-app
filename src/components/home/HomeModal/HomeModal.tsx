'use client';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

import Image from 'next/image';

import Select, { SingleValue } from 'react-select';

import { Button, HomeModalHeader, Textarea } from '@/components/index';

import {
  modal,
  modalBannerImage,
  modalContainer,
  modalHeaderParagraph,
  sendButton,
  textarea,
  textareaLabel,
} from '@/classNames/home-modal/homeModalClassNames';

import { options } from '@/static-data/request-options';

import selectStyles from '@/components/ui-components/Select/selectStyles';

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
          <Image
            alt="Modal Illustration"
            src="/images/modal/modal-illustration.svg"
            width={464}
            height={192}
            className={modalBannerImage}
          />
          <p className={modalHeaderParagraph}>
            Describe your question and our specialists will answer you within 24
            hours.
          </p>
          <Select
            options={options}
            placeholder={selectedValue}
            styles={selectStyles}
            onChange={handleSelectChange}
          />
          <Textarea
            className={textarea}
            htmlFor="description"
            id="description"
            value={areaDescription}
            onChange={handleChangeAreaDescription}
            labelClassName={textareaLabel}
            name="description"
            placeholder="Add some description of the request"
          >
            Description
          </Textarea>
          <Button type="button" className={sendButton}>
            Send Request
          </Button>
        </div>
      </div>
    );
  }
);

HomeModal.displayName = 'HomeModal';
