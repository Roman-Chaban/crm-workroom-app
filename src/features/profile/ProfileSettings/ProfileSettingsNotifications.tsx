'use client';

import React, { type FC } from 'react';

import { useForm } from 'react-hook-form';

import { Container, Div, Heading, Notification } from '@/index';
import {
  NotificationClassNames,
  NotificationItem,
} from '@/shared/interfaces/NotificationInterface';

import { CheckBox } from '@/shared/ui/CheckBox/CheckBox';

import { notificationItems } from '@/shared/assets/static/NotificationItems';

import { CheckBoxClassNames } from '@/shared/interfaces/CheckBoxInterface';

import styles from '@/shared/styles/pages/Profile.module.scss';

const notificationClassNames: NotificationClassNames = {
  main: styles['notificationMain'],
  container: styles['notificationContainer'],
  paragraph: styles['notificationParagraph'],
  heading: styles['notificationHeading'],
  switcher: {
    button: styles['notificationContainerButton'],
    circle: styles['notificationContainerButtonCircle'],
    active: styles['active'],
  },
};

const checkboxClassNames: CheckBoxClassNames = {
  checkbox: styles['customCheckbox'],
  label: styles['customCheckboxLabel'],
};

export const ProfileSettingsNotifications: FC = () => {
  const { register } = useForm();

  return (
    <Container className={styles['profileSettingsNotifications']}>
      <Container className={styles['profileSettingsNotificationsContainer']}>
        <Heading
          tag="h2"
          className={styles['profileSettingsNotificationsHeading']}
        >
          Notifications
        </Heading>

        <Div className={styles['profileSettingsNotificationsList']}>
          {notificationItems.map((item: NotificationItem) => (
            <Notification
              key={item.id}
              heading={item.heading}
              paragraph={item.paragraph}
              classNames={notificationClassNames}
            />
          ))}
        </Div>
        <CheckBox
          classNames={checkboxClassNames}
          id="notificationSend"
          label="Don't send me notifications after 9:00 PM"
          register={register('notificationSend')}
          htmlFor={'notificationSend'}
        />
      </Container>
    </Container>
  );
};
