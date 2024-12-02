import React, { type FC } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import { serviceDetailsButtons } from '@/constants/service-buttons';

import { Button } from '@/components/index';

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
    <div className={styles['serviceDetailsButtons']}>
      <label className={styles['serviceDetailsLabel']}>How many people in your team?</label>
      <div className={styles['serviceDetailsButtonsContainer']}>
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
      </div>
    </div>
  );
};
