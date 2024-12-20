import { StylesConfig } from 'react-select';

import { ProjectsOption } from '@/interfaces/ProjectsInterface';

import { COLORS } from '@/constants/Colors';

export const selectStyles: StylesConfig<ProjectsOption, false> = {
  container: (base) => ({
    ...base,
  }),
  control: (base) => ({
    ...base,
    maxWidth: 173,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    position: 'relative',
    borderRadius: 0,
  }),
  placeholder: (base) => ({
    ...base,
  }),
  menu: (base) => ({
    ...base,
    margin: 0,
    position: 'absolute',
    top: 85,
    left: 0,
    border: 'none',
    boxShadow: 'none',
  }),
  menuList: (base) => ({
    ...base,
    overflowY: 'auto',
    padding: '8px 0',
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: COLORS.colorGrayNeutral,
      borderRadius: '4px',
    },
  }),

  option: (base) => ({
    ...base,
    paddingBlock: 16,
    cursor: 'pointer',
    transition: '.2s ease 0s',
    width: 'auto',
    borderRadius: 14,
    margin: 10,
    ':hover': {
      fontWeight: 700,
    },
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: 16,
    color: COLORS.colorBlackDeep,
    lineHeight: '150%',
    fontWeight: 700,
    width: 'auto',
    margin: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 18,
    maxHeight: 18,
    padding: 0,
    color: COLORS.colorBlackDeep,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    ':hover': {
      color: COLORS.backgroundSupportHover,
    },
  }),
  indicatorsContainer: (base) => ({
    ...base,
  }),
  input: (base) => ({
    ...base,
    display: 'none',
  }),
};
