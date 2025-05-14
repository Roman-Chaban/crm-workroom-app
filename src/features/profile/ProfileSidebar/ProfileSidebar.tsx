'use client';

import React, { type FC } from 'react';

import { useForm } from 'react-hook-form';

import {
  Aside,
  Container,
  ProfileSidebarInfo,
  ProfileSidebarMainInfo,
  ProfileSidebarContactInfo,
} from '@/index';

import { FormState } from '@/shared/interfaces/ProfileSidebarInterface';

import styles from '@/shared/styles/pages/Profile.module.scss';

export const ProfileSidebar: FC = () => {
  const { handleSubmit, register, watch } = useForm<FormState>({
    defaultValues: {
      formStateMain: {
        position: '',
        company: '',
        birthdayDate: '',
        location: '',
      },
      formStateContact: {
        email: '',
        mobileNumber: '',
        skype: '',
      },
    },
  });

  const formState = watch();

  const handleSubmitMainForm = (data: FormState) => {
    console.log('Main Form Data:', data.formStateMain);
  };

  const handleSubmitContactForm = (data: FormState) => {
    console.log('Contact Form Data:', data.formStateContact);
  };

  return (
    <Aside className={styles['profileSidebar']}>
      <Container className={styles['profileSidebarContainer']}>
        <ProfileSidebarInfo />
        <ProfileSidebarMainInfo
          formStateMain={formState.formStateMain}
          register={(name, options) => register(`formStateMain.${name}` as const, options)}
          handleSubmitMainForm={handleSubmit((data) => {
            handleSubmitMainForm(data);
          })}
        />
        <ProfileSidebarContactInfo
          formStateContact={formState.formStateContact}
          register={(name, options) => register(`formStateContact.${name}` as const, options)}
          handleSubmitContactForm={handleSubmit((data) => {
            handleSubmitContactForm(data);
          })}
        />
      </Container>
    </Aside>
  );
};
