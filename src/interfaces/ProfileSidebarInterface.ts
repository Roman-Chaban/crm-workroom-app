export interface FormStateMain {
  position: string;
  company: string;
  location: string;
  birthdayDate: string;
}

export interface RegisterInputClassNames {
  label: string;
  input: string;
}

export interface FormStateContact {
  email: string;
  mobileNumber: string;
  skype: string;
}

export interface FormState extends FormStateContact {
  formStateMain: FormStateMain;
  formStateContact: FormStateContact;
}
