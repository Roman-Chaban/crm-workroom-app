'use client';

import React, { type FC, FormEvent } from 'react';

import { useSaveLocalStorage } from '@/hooks/useSaveLocalStorage';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import { Container, SignInNav } from '@/index/index';

import Select, { SingleValue } from 'react-select';

import {
  optionsForWhy,
  optionsForDescription,
  ServiceOption,
} from '@/interfaces/servicesSelect';

import { toast, Toaster } from 'react-hot-toast';

import customStyles from '@/components/ui/Select/selectStyles';

import {
  setPersonDescriptor,
  setUsagePurpose,
} from '@/store/slices/ServiceSelectionSlice';

import styles from './ServiceSelection.module.scss';

interface ServiceSelectionFormProps {
  currentStep: number;
}

export const ServiceSelectionForm: FC<ServiceSelectionFormProps> = ({
  currentStep,
}) => {
  const dispatch = useAppDispatch();

  const { saveToLocalStorage } = useSaveLocalStorage();

  const { usagePurpose, personBestDescriptor } = useAppSelector(
    (state) => state.serviceSelection,
  );

  const handleChangeServicesForWhyOption = (
    newValue: SingleValue<ServiceOption>,
  ) => {
    if (newValue) {
      dispatch(setUsagePurpose(newValue.value));
      saveToLocalStorage('usagePurpose', newValue.value);
    }
  };

  const handleChangeDescriptionOption = (
    newValue: SingleValue<ServiceOption>,
  ) => {
    if (newValue) {
      dispatch(setPersonDescriptor(newValue.value));
      saveToLocalStorage('personBestDescriptor', newValue.value);
    }
  };

  const handleSubmitAboutForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!usagePurpose || !personBestDescriptor) {
      toast.error('Please select all the required options');
      return;
    }

    const registrationData = JSON.parse(
      localStorage.getItem('registration') || '{}',
    );
    if (!registrationData.id) {
      toast.error('User not found. Please complete the registration process.');
      return;
    }

    const existingServiceDetails = JSON.parse(
      localStorage.getItem('service-details') || '{}',
    );
    const updatedServiceDetails = {
      ...existingServiceDetails,
      usagePurpose,
      personBestDescriptor,
    };

    try {
      localStorage.setItem(
        'service-details',
        JSON.stringify(updatedServiceDetails),
      );
      toast.success('Service details updated successfully');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      toast.error('Error saving service details');
    }
  };

  const isNextButtonDisabled = !usagePurpose || !personBestDescriptor;

  return (
    <>
      <Toaster />
      <form
        className={styles['stepForm']}
        onSubmit={handleSubmitAboutForm}
      >
        <label className={styles['servicesLabel']}>
          Why will you use the service?
          <Select
            placeholder={optionsForWhy[0].label}
            options={optionsForWhy}
            value={{
              value: usagePurpose,
              label: usagePurpose || optionsForWhy[0].label,
            }}
            styles={customStyles}
            onChange={handleChangeServicesForWhyOption}
          />
        </label>

        <label className={styles['servicesLabel']}>
          What describes you best?
          <Select
            placeholder={optionsForDescription[0].label}
            options={optionsForDescription}
            value={{
              value: personBestDescriptor,
              label: personBestDescriptor || optionsForDescription[0].label,
            }}
            styles={customStyles}
            onChange={handleChangeDescriptionOption}
          />
        </label>
      </form>
      <Container className={styles['multiStepsFooterContainer']}>
        <SignInNav
          classNames={{
            container: styles['multiStepsFooter'],
            nextBtn: styles['multiStepsNextButton'],
            prevBtn: styles['multiStepsPreviousButton'],
          }}
          currentStep={currentStep}
          isNextButtonDisabled={isNextButtonDisabled}
        />
      </Container>
    </>
  );
};
