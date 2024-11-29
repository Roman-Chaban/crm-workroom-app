'use client';

import type { FC } from 'react';
import { ChangeEvent } from 'react';

import { Button, Textarea } from '@/components/index';

import Select, { SingleValue } from 'react-select';
import selectStyles from '@/components/ui/Select/selectStyles';

import { options } from '@/staticData/requestOptions';
import { Option } from '@/interfaces/select';

import styles from './HomeModal.module.scss';

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
      <label className={styles['modalSelectLabel']}>
        Request Subject
        <Select
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
      <Button type="button" className={styles['modalSendButton']}>
        Send Request
      </Button>
    </form>
  );
};
