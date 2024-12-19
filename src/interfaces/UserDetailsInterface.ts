import { RegistrationUserData, SmsCode } from '@/types/RegistrationTypes';
import { EventType } from '@/types/SignInTypes';
import { StepItem } from '@/types/StepItemTypes';

export interface UserDetailsConfirmationProps {
  smsCode: SmsCode;
  handleSmsCodeChange: (index: number, value: string) => void;
}

export interface UserDetailsFieldsProps {
  registrationData: RegistrationUserData;
  isSubmitting: boolean;
  handleInputChange: (event: EventType) => void;
  handleSubmitConfirmationData: () => void;
}

export interface UserDetailsMessageProps {
  userEmail: string;
  isTimerActive: boolean;
  isSubmitting: boolean;
  onSmsCodeComplete: (isComplete: boolean) => void;
  setIsSubmitting: (value: boolean) => void;
}

export interface StepsListProps {
  currentStep: number;
}

export interface StepsListItemProps {
  step: StepItem;
  currentStep: number;
}

export interface UserDetailsSidebarProps {
  currentStep: number;
}
