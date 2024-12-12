'use client';

import React, { type FC } from 'react';

import { useForm } from 'react-hook-form';

import { RegisterInput } from '../RegisterInput/RegisterInput';

// import Select from 'react-select';

import styles from './EventModal.module.scss';

interface EventFormState {
  eventName: string;
  corporateEvent: string;
}

export const EventModalForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventFormState>({
    defaultValues: { eventName: '', corporateEvent: '' },
  });

  const handleSubmitForm = (data: EventFormState) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className={styles['modalForm']}
    >
      <RegisterInput
        register={register('eventName', {
          maxLength: {
            value: 150,
            message: 'Event name must be less than 150 characters',
          },
        })}
        classNames={{
          input: styles['modalFormInput'],
          label: styles['modalFormLabel'],
        }}
        id="eventName"
        name="eventName"
        placeholder="Katy’s Birthday"
        type="text"
        errorMessage={errors.eventName?.message}
        label="Event Name"
      />
      {/* <Select
        options={[]}
        {...register('corporateEvent')}
      /> */}
    </form>
  );
};
