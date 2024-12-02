import { ChangeEvent, FormEvent, FC } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import Select, { SingleValue } from 'react-select';
import { Input, SignInNav } from '@/components/index';
import customStyles from '@/components/ui/Select/selectStyles';

import { ServicesOption } from '@/interfaces/servicesSelect';

import { serviceBusinessOptions } from '@/constants/service-business';

import { ServiceDetailsFormButtons } from './ServiceDetailsFormButtons';

import { ServicesDetails } from '@/types/servicesDetails';

import { getServicesDetails } from '@/api/servicesDetails';

import toast from 'react-hot-toast';

import {
  setCompanyName,
  setSelectedBusinessDirection,
} from '@/store/slices/ServiceDetailsSlice';

import styles from './ServiceDetails.module.scss';

interface ServiceDetailsFormProps {
  currentStep: number;
}

export const ServiceDetailsForm: FC<ServiceDetailsFormProps> = ({
  currentStep,
}) => {
  const dispatch = useAppDispatch();
  const { companyName, selectedTeamSize, selectedBusinessDirection } =
    useAppSelector((state) => state.serviceDetails);

  const handleChangeCompanyName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompanyName(event.target.value));
  };

  const handleChangeBusinessDescriptionOption = (
    newValue: SingleValue<ServicesOption>
  ) => {
    if (newValue) {
      dispatch(setSelectedBusinessDirection(newValue));
    }
  };

  const serviceDetailsMutation = useMutation({
    mutationFn: getServicesDetails,
    onSuccess: () => {
      toast.success('Service details successfully chosen');
    },
    onError: (error: Error) => {
      toast.error(`Error fetching service details: ${error.message}`);
    },
  });

  const handleSubmitServiceDetailsForm = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!companyName || !selectedTeamSize || !selectedBusinessDirection) {
      toast.error('Please select all the required options');
      return;
    }

    const existingServiceDetails = JSON.parse(
      localStorage.getItem('service-details') || '{}'
    );

    const updatedServiceDetails = {
      ...existingServiceDetails,
      companyName,
      businessDirection: selectedBusinessDirection.value,
      teamPeopleRange: selectedTeamSize,
    };

    try {
      localStorage.setItem(
        'service-details',
        JSON.stringify(updatedServiceDetails)
      );
      toast.success('Service details saved successfully');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      toast.error('Error saving service details');
    }

    const serviceDetails: ServicesDetails = {
      usagePurpose: existingServiceDetails.usagePurpose || '',
      personBestDescriptor: existingServiceDetails.personBestDescriptor || '',
      companyName,
      businessDirection: selectedBusinessDirection.value,
      teamPeopleRange: selectedTeamSize,
    };

    serviceDetailsMutation.mutate(serviceDetails);
  };

  const isNextButtonDisabled =
    !companyName || !selectedTeamSize || !selectedBusinessDirection;

  return (
    <form
      className={styles['serviceDetailsForm']}
      onSubmit={handleSubmitServiceDetailsForm}
    >
      <Input
        htmlFor="Your Company’s Name"
        label="Your Company’s Name"
        name="Your Company’s Name"
        id="Your Company’s Name"
        placeholder="Company’s Name"
        type="text"
        classNames={{
          input: styles['serviceDetailsInput'],
          container: styles['serviceDetailsInputContainer'],
          label: styles['serviceDetailsLabel'],
        }}
        value={companyName}
        onChange={handleChangeCompanyName}
      />
      <label className={styles['businessDirectionLabel']}>
        Business Direction
        <Select
          styles={customStyles}
          options={serviceBusinessOptions}
          value={selectedBusinessDirection}
          onChange={handleChangeBusinessDescriptionOption}
        />
      </label>
      <ServiceDetailsFormButtons selectedTeamSize={selectedTeamSize} />
      <SignInNav
        currentStep={currentStep}
        isNextButtonDisabled={isNextButtonDisabled}
        classNames={{
          container: styles['multiStepsFooter'],
          nextBtn: styles['multiStepsNextButton'],
          prevBtn: styles['multiStepsPreviousButton'],
        }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};
