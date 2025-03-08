import React, { type FC } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { serviceDetailsButtons } from '@/shared/assets/static/ServiceDetailsButtons';

import { Button, Div } from '@/index';

import { setSelectedTeamSize } from '@/shared/store/slices/ServiceDetailsSlice';
import { ServiceDetailsFormButtonsProps } from '@/shared/interfaces/ServiceDetailsInterface';

import styles from '../ServiceDetails.module.scss';

export const ServiceDetailsFormButtons: FC<ServiceDetailsFormButtonsProps> = ({
  selectedTeamSize,
}) => {
  const dispatch = useAppDispatch();

  const handleSelectTeamSize = (value: string) => {
    dispatch(setSelectedTeamSize(value));
  };

  return (
    <Div
      role="group"
      aria-labelledby="team-size-label"
      className={styles['serviceDetailsButtons']}
    >
      <label className={styles['serviceDetailsLabel']}>
        How many people in your team?
      </label>
      <Div className={styles['serviceDetailsButtonsContainer']}>
        {serviceDetailsButtons.map((button) => (
          <Button
            onClick={() => handleSelectTeamSize(button.label)}
            type="button"
            key={button.id}
            className={`${styles['serviceDetailsButton']} ${
              selectedTeamSize === button.label ? styles['activeButton'] : ''
            }`}
            aria-pressed={selectedTeamSize === button.label}
          >
            {button.label}
          </Button>
        ))}
      </Div>
    </Div>
  );
};
