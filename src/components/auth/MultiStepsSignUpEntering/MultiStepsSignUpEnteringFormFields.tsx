'use client';

import { useMemo, useState, type FC } from 'react';

import { EventType } from '@/types/signIn';

import { Button, Container, Input } from '@/components/index';

import {
  IsPasswordVisible,
  PhoneNumber,
  RegistrationUserData,
  SelectedCountryCode,
} from '@/types/reg';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import SendIcon from '@mui/icons-material/Send';

import { colors } from '@/constants/colors';

import { CountryOption, countryOptions } from '@/static-data/country-options';

import styles from './MultiStepsSignUpEntering.module.scss';

import dynamic from 'next/dynamic';
import countrySelectStyles from '@/constants/country-select';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
}) as typeof import('react-select').default<CountryOption, false>;

interface MultiStepsSignUpEnteringFormFieldsProps {
  registrationData: RegistrationUserData;
  handlePhoneNumberChange: (event: EventType) => void;
  handleEmailChange: (event: EventType) => void;
  handlePasswordChange: (event: EventType) => void;
  handleSubmitConfirmationData: () => void;
}

export const MultiStepsSignUpEnteringFormFields: FC<
  MultiStepsSignUpEnteringFormFieldsProps
> = ({
  registrationData,
  handleEmailChange,
  handlePasswordChange,
  handlePhoneNumberChange,
  handleSubmitConfirmationData,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] =
    useState<IsPasswordVisible>(false);
  const [selectedCountryCode, setSelectedCountryCode] =
    useState<SelectedCountryCode>(countryOptions[0]);
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>('');

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountryCode(selectedOption);

    const countryCode = `+${selectedOption.value}`;
    if (!phoneNumber.startsWith(countryCode)) {
      setPhoneNumber(`${countryCode}`);
      handlePhoneNumberChange({
        target: { name: 'phoneNumber', value: `${countryCode}` },
      } as EventType);
    }
  };

  const handlePhoneNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    const countryCode = `+${selectedCountryCode.value}`;

    if (inputValue.startsWith(countryCode)) {
      setPhoneNumber(inputValue);
    } else {
      setPhoneNumber(`${countryCode}${inputValue.replace(/^\+\d+/, '')}`);
    }

    handlePhoneNumberChange({
      target: { name: 'phoneNumber', value: inputValue },
    } as EventType);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibleState) => !prevVisibleState);
  };

  const isNextButtonDisabled = useMemo(() => {
    return (
      !registrationData.email ||
      !registrationData.password ||
      !phoneNumber ||
      !selectedCountryCode
    );
  }, [
    registrationData.email,
    registrationData.password,
    registrationData.phoneNumber,
  ]);

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
        onChange={handleEmailChange}
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
        onChange={handlePasswordChange}
        onIconClick={togglePasswordVisibility}
        icon={
          isPasswordVisible ? (
            <VisibilityIcon style={{ color: colors.colorGrayNeutral }} />
          ) : (
            <VisibilityOffIcon style={{ color: colors.colorGrayNeutral }} />
          )
        }
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
        />
      </div>
      <Button
        type="submit"
        onClick={handleSubmitConfirmationData}
        className={styles['sendCodeButton']}
        disabled={isNextButtonDisabled}
      >
        Send Code <SendIcon fontSize="medium" className={styles['sendIcon']} />
      </Button>
    </Container>
  );
};
