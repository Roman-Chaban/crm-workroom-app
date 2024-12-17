'use client';

import React, { type FC } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import { Container, Heading, RegisterInput } from '@/index';

import {
  FormStateMain,
  RegisterInputClassNames,
} from '@/interfaces/ProfileSidebarInterface';

import styles from '@/styles/pages/profile.module.scss';

export const registerInputClassNames: RegisterInputClassNames = {
  input: styles['registerInput'],
  label: styles['registerLabel'],
};

interface ProfileSidebarMainInfoProps {
  formStateMain: FormStateMain;
  register: (
    name: keyof FormStateMain,
    options?: object,
  ) => UseFormRegisterReturn;
  handleSubmitMainForm: () => void;
}

export const ProfileSidebarMainInfo: FC<ProfileSidebarMainInfoProps> = ({
  handleSubmitMainForm,
  register,
}) => {
  return (
    <Container
      className={styles['profileSidebarMainInfo']}
      style={{ paddingBlockEnd: 0 }}
    >
      <Heading
        tag="h5"
        className={styles['profileSidebarMainInfoHeading']}
      >
        Main Info
      </Heading>
      <form
        className={styles['profileSidebarMainInfoForm']}
        onSubmit={handleSubmitMainForm}
      >
        <RegisterInput
          id="position"
          label="Position"
          name="position"
          placeholder="UI/UX Designer"
          register={register('position', { required: true })}
          type="text"
          classNames={registerInputClassNames}
        />

        <RegisterInput
          id="company"
          label="Company"
          name="company"
          placeholder="Cadabra"
          register={register('company', { required: true })}
          type="text"
          classNames={registerInputClassNames}
        />

        <RegisterInput
          id="location"
          label="Location"
          name="location"
          placeholder="NYC, New York, USA"
          register={register('location', { required: true })}
          type="text"
          classNames={registerInputClassNames}
          isIcon
          iconPath={'/icons/form-icons/location.svg'}
          iconClassName={styles['inputIcon']}
        />

        <RegisterInput
          id="birthdayDate"
          label="Birthday Date"
          name="birthdayDate"
          placeholder="May 19, 1996"
          register={register('birthdayDate', { required: true })}
          type="text"
          classNames={registerInputClassNames}
          isIcon
          iconPath={'/icons/form-icons/calendar.svg'}
          iconClassName={styles['inputIcon']}
        />
      </form>
    </Container>
  );
};
