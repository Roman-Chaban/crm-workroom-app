'use client';

import React, { useMemo, useState, type FC } from 'react';

import { EventType } from '@/types/signIn';

import { Button, Container, Input } from '@/components/index';

import {
  IsPasswordVisible,
  PhoneNumber,
  RegistrationUserData,
  SelectedCountryCode,
} from '@/types/registration';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import SendIcon from '@mui/icons-material/Send';

import { colors } from '@/constants/colors';

import { CountryOption, countryOptions } from '@/staticData/countryOptions';

import dynamic from 'next/dynamic';

import countrySelectStyles from '@/constants/country-select';

import styles from './UserDetails.module.scss';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
}) as typeof import('react-select').default<CountryOption, false>;

interface UserDetailsFieldsProps {
  registrationData: RegistrationUserData;
  handleInputChange: (event: EventType) => void;
  handleSubmitConfirmationData: () => void;
  isSubmitting: boolean;
}

export const UserDetailsFields: FC<UserDetailsFieldsProps> = ({
  registrationData,
  handleInputChange,
  handleSubmitConfirmationData,
  isSubmitting,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>('');

  const [isPasswordVisible, setIsPasswordVisible] = useState<IsPasswordVisible>(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState<SelectedCountryCode>(
    countryOptions[0],
  );

  const handleCountryChange = (selectedOption: CountryOption) => {
    if (selectedOption) {
      setSelectedCountryCode(selectedOption);
    }

    const countryCode = `+${selectedOption.value}`;
    if (!phoneNumber.startsWith(countryCode)) {
      setPhoneNumber(`${countryCode}`);
      handleInputChange({
        target: { name: 'phoneNumber', value: `${countryCode}` },
      } as EventType);
    }
  };

  const handlePhoneNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const countryCode = `+${selectedCountryCode.value}`;

    if (inputValue.startsWith(countryCode)) {
      setPhoneNumber(inputValue);
    } else {
      setPhoneNumber(`${countryCode}${inputValue.replace(/^\+\d+/, '')}`);
    }

    handleInputChange({
      target: { name: 'phoneNumber', value: inputValue },
    } as EventType);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibleState) => !prevVisibleState);
  };

  const isNextButtonDisabled = useMemo(() => {
    return (
      !registrationData.email || !registrationData.password || !phoneNumber || !selectedCountryCode
    );
  }, [registrationData.email, registrationData.password, registrationData.phoneNumber]);

  const changeVisibleIcon = isPasswordVisible ? (
    <VisibilityIcon style={{ color: colors.colorGrayNeutral, cursor: 'pointer' }} />
  ) : (
    <VisibilityOffIcon style={{ color: colors.colorGrayNeutral, cursor: 'pointer' }} />
  );

  return (
    <Container className={styles['containerFields']}>
      <Input
        classNames={{
          input: styles['signInFormBlockInput'],
          container: styles['signInFormBlockInputContainer'],
          label: styles['signInFormBlockLabel'],
        }}
        htmlFor="email"
        id="email"
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={registrationData.email}
        onChange={handleInputChange}
        isRequired
      />

      <Input
        classNames={{
          input: styles['signInFormBlockInput'],
          container: styles['signInFormBlockInputContainer'],
          label: styles['signInFormBlockLabel'],
          inputIcon: styles['signInFormBlockViewIcon'],
        }}
        htmlFor="password"
        id="password"
        label="Password"
        name="password"
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Create a secure password"
        value={registrationData.password}
        onChange={handleInputChange}
        onIconClick={togglePasswordVisibility}
        isRequired
        icon={changeVisibleIcon}
      />

      <div className={styles['phoneInputContainer']}>
        <Select
          options={countryOptions}
          value={selectedCountryCode}
          onChange={handleCountryChange}
          inputId="country-code-select"
          instanceId="country-code-instance"
          className={styles['countryCodeSelect']}
          placeholder="Select country code"
          getOptionLabel={(event: CountryOption) => event.label}
          getOptionValue={(event: CountryOption) => event.value}
          styles={countrySelectStyles}
        />

        <Input
          classNames={{
            input: `${styles['signInFormBlockInput']} ${styles['signInFormBlockPhoneInputContainer']} `,
            container: `${styles['signInFormBlockInputContainer']} ${styles['signInFormBlockPhoneInputContainer']}`,
            label: styles['signInFormBlockLabel'],
          }}
          htmlFor="phoneNumber"
          id="phoneNumber"
          label="Mobile Number"
          name="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberInputChange}
          isRequired
        />
      </div>

      <Button
        type="submit"
        onClick={handleSubmitConfirmationData}
        className={styles['sendCodeButton']}
        disabled={isNextButtonDisabled}
      >
        {isSubmitting ? 'Sending...' : 'Send code'}
        <SendIcon
          fontSize="medium"
          className={styles['sendIcon']}
        />
      </Button>
    </Container>
  );
};
