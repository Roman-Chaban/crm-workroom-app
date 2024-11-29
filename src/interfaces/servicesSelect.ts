export interface ServicesOption {
  value: string;
  label: string;
}

export const optionsForWhy: ServicesOption[] = [
  { value: 'work', label: 'Work' },
  { value: 'education', label: 'Education' },
  { value: 'personal', label: 'Personal Use' },
  { value: 'research', label: 'Research' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'other', label: 'Other' },
];

export const optionsForDescription: ServicesOption[] = [
  { value: 'business_owner', label: 'Business Owner' },
  { value: 'student', label: 'Student' },
  { value: 'freelancer', label: 'Freelancer' },
  { value: 'employee', label: 'Employee' },
  { value: 'retired', label: 'Retired' },
  { value: 'other', label: 'Other' },
];
