import React, { type FC } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import { serviceDetailsButtons } from '@/constants/ServiceDetailsButtons';

import { Button, Div } from '@/index/index';

import { setSelectedTeamSize } from '@/store/slices/ServiceDetailsSlice';

import styles from './ServiceDetails.module.scss';

interface ServiceDetailsFormButtonsProps {
  selectedTeamSize: string;
}

export const ServiceDetailsFormButtons: FC<ServiceDetailsFormButtonsProps> = ({
  selectedTeamSize,
}) => {
  const dispatch = useAppDispatch();

  const handleSelectTeamSize = (value: string) => {
    dispatch(setSelectedTeamSize(value));
  };

  return (
    <Div className={styles['serviceDetailsButtons']}>
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
          >
            {button.label}
          </Button>
        ))}
      </Div>
    </Div>
  );
};
