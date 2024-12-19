import { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { Option } from '@/interfaces/SelectInterface';

export interface HomeModalProps {
  onCloseModal: () => void;
}

export interface HomeModalFieldsFormProps {
  selectedValue: string;
  areaDescription: string;
  handleSelectChange: (newValue: SingleValue<Option>) => void;
  handleChangeAreaDescription: (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}
