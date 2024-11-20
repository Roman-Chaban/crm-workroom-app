'use client';

import type { FC } from 'react';
import { ChangeEvent } from 'react';

import { Button, Textarea } from '@/components/index';

import Select, { SingleValue } from 'react-select';
import selectStyles from '@/components/ui-components/Select/selectStyles';

import {
  selectLabel,
  sendButton,
  textarea,
  textareaLabel,
} from '@/classNames/home-modal/home-modal';

import { options } from '@/static-data/request-options';
import { Option } from '@/interfaces/select';

interface HomeModalFieldsFormProps {
  selectedValue: string;
  areaDescription: string;
  handleSelectChange: (newValue: SingleValue<Option>) => void;
  handleChangeAreaDescription: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const HomeModalFieldsForm: FC<HomeModalFieldsFormProps> = ({
  selectedValue,
  areaDescription,
  handleSelectChange,
  handleChangeAreaDescription,
}) => {
  const description = 'description';

  return (
    <form autoComplete="off">
      <label className={selectLabel}>
        Request Subject
        <Select
          options={options}
          placeholder={selectedValue}
          styles={selectStyles}
          onChange={handleSelectChange}
        />
      </label>
      <Textarea
        className={textarea}
        htmlFor={description}
        id={description}
        value={areaDescription}
        onChange={handleChangeAreaDescription}
        labelClassName={textareaLabel}
        name={description}
        placeholder="Add some description of the request"
      >
        Description
      </Textarea>
      <Button type="button" className={sendButton}>
        Send Request
      </Button>
    </form>
  );
};
