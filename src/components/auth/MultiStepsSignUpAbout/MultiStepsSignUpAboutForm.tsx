'use client';

import { FormEvent, useState, type FC } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useMutation } from '@tanstack/react-query';

import {
  MultiStepsSignUpEnteringHeader,
  MultiStepsSignUpEnteringStepsFooter,
} from '@/components/index';

import { getServicesDetails } from '@/api/servicesDetails';

import Select from 'react-select';

import { customServicesSelect } from '@/constants/services-select';
import {
  optionsForWhy,
  optionsForDescription,
  ServicesOption,
} from '@/interfaces/servicesSelect';

import { toast } from 'react-hot-toast';

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

  const serviceDetailsMutation = useMutation({
    mutationFn: getServicesDetails,
    onSuccess: (response) => {
      toast.success('Service details successfully chosen');

      const {
        usagePurpose,
        personBestDescriptor,
        companyName,
        businessDirection,
        teamPeopleRange,
      } = response;
      try {
        if (response && usagePurpose && personBestDescriptor) {
          localStorage.setItem(
            'service-details',
            JSON.stringify({
              usagePurpose,
              personBestDescriptor,
              companyName,
              businessDirection,
              teamPeopleRange,
            })
          );
          console.log({ usagePurpose, personBestDescriptor });
        }
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
    onError: (error) => {
      toast.error('Error fetching service details');
      console.error('Error:', error);
    },
  });

  const handleChangeServicesForWhyOption = (option: ServicesOption | null) => {
    setSelectForWhyOption(option);
  };

  const handleChangeDescriptionOption = (option: ServicesOption | null) => {
    setSelectedDescriptionOption(option);
  };

  const handleSubmitAboutForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedForWhyOption && selectedDescriptionOption) {
      const serviceDetails = {
        usagePurpose: selectedForWhyOption.value,
        personBestDescriptor: selectedDescriptionOption.value,
        companyName: '',
        businessDirection: '',
        teamPeopleRange: '',
      };

      serviceDetailsMutation.mutate(serviceDetails);
    }
  };

  const isNextButtonDisabled =
    !selectedForWhyOption || !selectedDescriptionOption;

  return (
    <>
      <form className={styles['stepForm']} onSubmit={handleSubmitAboutForm}>
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
            value={selectedForWhyOption}
            onChange={handleChangeServicesForWhyOption}
          />
        </label>
        <label className={styles['servicesLabel']}>
          What describes you best?
          <Select
            styles={customServicesSelect}
            options={optionsForDescription}
            defaultValue={selectedDescriptionOption}
            value={selectedDescriptionOption}
            onChange={handleChangeDescriptionOption}
          />
        </label>
      </form>
      <MultiStepsSignUpEnteringStepsFooter
        classNames={{
          container: styles['multiStepsFooter'],
          nextBtn: styles['multiStepsNextButton'],
          prevBtn: styles['multiStepsPreviousButton'],
        }}
        currentStep={currentStep}
        isNextButtonDisabled={isNextButtonDisabled}
      />
    </>
  );
};
