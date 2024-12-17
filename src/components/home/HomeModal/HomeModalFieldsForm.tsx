'use client';

import React, { type FC } from 'react';
import { ChangeEvent } from 'react';

import { Button, Textarea } from '@/index/index';

import Select, { SingleValue } from 'react-select';

import { options } from '@/static/RequestOptions';
import { Option } from '@/interfaces/SelectInterface';

import styles from './HomeModal.module.scss';
import { selectStyles } from '@/styles/selectsStyles/SelectStyles';

interface HomeModalFieldsFormProps {
  selectedValue: string;
  areaDescription: string;
  handleSelectChange: (newValue: SingleValue<Option>) => void;
  handleChangeAreaDescription: (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export const HomeModalFieldsForm: FC<HomeModalFieldsFormProps> = ({
  selectedValue,
  areaDescription,
  handleSelectChange,
  handleChangeAreaDescription,
}) => {
  const description = 'description';

  const isSendButtonDisabled = !selectedValue || !areaDescription;

  return (
    <form autoComplete="off">
      <label className={styles['modalSelectLabel']}>
        Request Subject
        <Select
          className={styles['modalSelect']}
          options={options}
          placeholder={selectedValue}
          styles={selectStyles}
          onChange={handleSelectChange}
        />
      </label>
      <Textarea
        className={styles['modalTextarea']}
        htmlFor={description}
        id={description}
        value={areaDescription}
        onChange={handleChangeAreaDescription}
        labelClassName={styles['modalTextareaLabel']}
        name={description}
        placeholder="Add some description of the request"
      >
        Description
      </Textarea>
      <Button
        type="button"
        className={styles['modalSendButton']}
        disabled={isSendButtonDisabled}
      >
        Send Request
      </Button>
    </form>
  );
};
