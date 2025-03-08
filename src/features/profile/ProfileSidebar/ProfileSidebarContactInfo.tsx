'use client';

import React, { HTMLProps, type FC } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import { Container, Heading, RegisterInput } from '@/index';

import { FormStateContact } from '@/shared/interfaces/ProfileSidebarInterface';

import { registerInputClassNames } from './ProfileSidebarMainInfo';

import { Form } from '@/shared/ui/Form/Form';

import styles from '@/shared/styles/pages/Profile.module.scss';

interface ProfileSidebarContactInfoProps extends HTMLProps<HTMLDivElement> {
  formStateContact: FormStateContact;
  register: (
    name: keyof FormStateContact,
    options?: object,
  ) => UseFormRegisterReturn;
  handleSubmitContactForm: () => void;
}

export const ProfileSidebarContactInfo: FC<ProfileSidebarContactInfoProps> = ({
  register,
  handleSubmitContactForm,
}) => {
  return (
    <Container className={styles['profileSidebarMainInfo']}>
      <Heading
        tag="h5"
        className={styles['profileSidebarMainInfoHeading']}
      >
        Contact Info
      </Heading>
      <Form
        className={styles['profileSidebarMainInfoForm']}
        onSubmit={handleSubmitContactForm}
      >
        <RegisterInput
          id="email"
          label="Email"
          name="email"
          placeholder="evanyates@gmail.com"
          register={register('email', { required: true })}
          type="text"
          classNames={registerInputClassNames}
        />

        <RegisterInput
          id="mobileNumber"
          label="Mobile Number"
          name="mobileNumber"
          placeholder="+1 675 346 23-10"
          register={register('mobileNumber', { required: true })}
          type="text"
          classNames={registerInputClassNames}
        />

        <RegisterInput
          id="skype"
          label="Skype"
          name="skype"
          placeholder="Evan 2256"
          register={register('skype', { required: true })}
          type="text"
          classNames={registerInputClassNames}
        />
      </Form>
    </Container>
  );
};
