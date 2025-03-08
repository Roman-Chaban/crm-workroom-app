import { EventType } from '@/shared/types/SignInTypes';

export interface SignInHeaderProps {
  stepTitle: string;
  title: string;
  classNames: {
    header: string;
    stepsFigures: string;
    headerTitle: string;
  };
}

export interface SignInNavProps {
  isNextButtonDisabled: boolean;
  currentStep: number;
  classNames: {
    container: string;
    nextBtn: string;
    prevBtn?: string;
  };
}

export interface SignInFormFieldsProps {
  email: string;
  password: string;
  handleInputChange: (event: EventType) => void;
}

export interface SignInFormSubmitProps {
  isSubmitting: boolean;
  isButtonDisabled: boolean;
}

export interface SignInFormRememberProps {
  remember: boolean;
  handleCheckedRemember: () => void;
}
