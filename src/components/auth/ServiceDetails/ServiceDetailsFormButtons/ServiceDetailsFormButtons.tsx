import React, { type FC } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import { serviceDetailsButtons } from '@/static/ServiceDetailsButtons';

import { Button, Div } from '@/index/index';

import { setSelectedTeamSize } from '@/store/slices/ServiceDetailsSlice';
import { ServiceDetailsFormButtonsProps } from '@/interfaces/ServiceDetailsInterface';

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
