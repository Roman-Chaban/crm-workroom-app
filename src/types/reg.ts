export type UserStatuses = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface RegistrationUserData {
  email: string;
  phoneNumber: string;
  password: string;
}

export interface InitialState {
  user: RegistrationUserData | null;
  status: UserStatuses;
  error: string | null;
}
