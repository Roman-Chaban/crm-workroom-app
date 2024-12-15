'use client';

import React, { type FC } from 'react';

import { Div, Textarea } from '@/index';

import { useForm, Controller } from 'react-hook-form';

import { RegisterInput } from '../RegisterInput/RegisterInput';

import Select from 'react-select';

import customStyles from '../Select/selectStyles';
import {
  EventOption,
  eventOptions,
  PriorityOption,
  priorityOptions,
} from '@/interfaces/EventOptionsInterface';

import styles from './EventModal.module.scss';

interface EventFormState {
  eventName: string;
  event: EventOption | null;
  priority: PriorityOption | null;
  description: string;
}

export const EventModalForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<EventFormState>({
    defaultValues: {
      eventName: '',
      event: null,
      priority: null,
      description: '',
    },
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

      <Div className={styles['modalEventBlock']}>
        <label
          htmlFor="event"
          className={styles['modalFormLabel']}
        >
          Event Category
          <Controller
            name="event"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={eventOptions}
                placeholder={eventOptions[0].label}
                isClearable
                name="event"
                id={'event'}
                inputId={'event'}
                className={styles['modalEventSelect']}
                styles={customStyles}
              />
            )}
          />
        </label>
      </Div>

      <Div className={styles['modalPriorityBlock']}>
        <label
          htmlFor="priority"
          className={styles['modalFormLabel']}
        >
          Priority
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={priorityOptions}
                placeholder={priorityOptions[0].label}
                isClearable
                name="priority"
                id={'priority'}
                inputId={'priority'}
                className={styles['modalPrioritySelect']}
                styles={customStyles}
              />
            )}
          />
        </label>
      </Div>

      <Textarea
        className={styles['modalDescriptionArea']}
        htmlFor="description"
        id="description"
        labelClassName={styles['modalDescriptionLabel']}
        name="description"
        placeholder="Add some description of the event"
        register={register('description', {})}
      >
        Description
      </Textarea>
    </form>
  );
};
