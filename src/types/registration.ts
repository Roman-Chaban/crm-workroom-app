import { CountryOption } from '@/staticData/countryOptions';

export interface RegistrationUserData {
  id?: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface InitialState {
  user: RegistrationUserData | null;
  status: UserStatuses;
  error: string | null;
}

export interface SmsCodeProperties {
  index: number;
  value: string;
}

export interface ConfirmationPayload {
  email: string;
  confirmationCode: string;
  accessToken: string;
  refreshToken: string;
}

export interface ConfirmationResponse {
  accessToken: string;
  refreshToken: string;
}

export type SmsCode = string[];
export type IsConfirmationMessageVisible = boolean;
export type IsTimerActive = boolean;
export type SmsTimer = number;
export type IsPasswordVisible = boolean;
export type UserStatuses = 'idle' | 'loading' | 'succeeded' | 'failed';
export type SelectedCountryCode = CountryOption;
export type PhoneNumber = string;
export type IsSmsCompleted = boolean;
export type IsSubmitting = boolean;
