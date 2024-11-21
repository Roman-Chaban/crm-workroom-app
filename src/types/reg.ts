export type UserStatuses = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface RegistrationUserData {
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

export type SmsCode = string[];
export type IsConfirmationMessageVisible = boolean;
export type IsTimerActive = boolean;
export type SmsTimer = number;
