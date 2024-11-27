'use client';

import { useState, type FC } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';

import { MultiStepsSignUpEnteringHeader } from '@/components/index';

import Select from 'react-select';

import { customServicesSelect } from '@/constants/services-select';
import {
  optionsForWhy,
  optionsForDescription,
  ServicesOption,
} from '@/interfaces/services-select';

import styles from './MultiStepsSignUpAbout.module.scss';

export const MultiStepsSignUpAboutForm: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  const [selectedForWhyOption, setSelectForWhyOption] =
    useState<ServicesOption | null>(
      optionsForWhy.find((option) => option.value === 'work') || null
    );

  const [selectedDescriptionOption, setSelectedDescriptionOption] =
    useState<ServicesOption | null>(
      optionsForDescription.find(
        (option) => option.value === 'business_owner'
      ) || null
    );

  const handleChangeServicesForWhyOption = (option: ServicesOption | null) => {
    setSelectForWhyOption(option);
  };

  const handleChangeDescriptionOption = (option: ServicesOption | null) => {
    setSelectedDescriptionOption(option);
  };

  return (
    <form className={styles['stepForm']}>
      <MultiStepsSignUpEnteringHeader
        title="Tell about yourself"
        stepTitle={`Step ${currentStep}/4`}
        classNames={{
          header: styles['stepFormHeader'],
          headerTitle: styles['stepFormHeaderTitle'],
          stepsFigures: styles['stepFormHeaderStepsFigures'],
        }}
      />
      <label className={styles['servicesLabel']}>
        Why will you use the service?
        <Select
          styles={customServicesSelect}
          options={optionsForWhy}
          defaultValue={selectedForWhyOption}
          onChange={handleChangeServicesForWhyOption}
        />
      </label>
      <label className={styles['servicesLabel']}>
        What describes you best?
        <Select
          styles={customServicesSelect}
          options={optionsForDescription}
          defaultValue={selectedDescriptionOption}
          onChange={handleChangeDescriptionOption}
        />
      </label>
    </form>
  );
};
