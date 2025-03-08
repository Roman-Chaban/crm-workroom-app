'use client';

import React, { type FC } from 'react';

import { Button, Label, Textarea } from '@/index';

import { Form } from '@/shared/ui/Form/Form';

import Select from 'react-select';

import { options } from '@/shared/assets/static/RequestOptions';

import { HomeModalFieldsFormProps } from '@/shared/interfaces/HomeModalInterface';

import selectStyles from '@/shared/styles/selectsStyles/ServiceSelectStyles';

import styles from './HomeModal.module.scss';

export const HomeModalFieldsForm: FC<HomeModalFieldsFormProps> = ({
  selectedValue,
  areaDescription,
  handleSelectChange,
  handleChangeAreaDescription,
}) => {
  const description = 'description';

  const isSendButtonDisabled = !selectedValue || !areaDescription;

  return (
    <Form autoComplete="off">
      <Label className={styles['modalSelectLabel']}>
        Request Subject
        <Select
          className={styles['modalSelect']}
          options={options}
          placeholder={selectedValue}
          styles={selectStyles}
          onChange={handleSelectChange}
        />
      </Label>
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
    </Form>
  );
};
