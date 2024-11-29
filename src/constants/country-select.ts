import { StylesConfig } from 'react-select';
import { keyframes } from '@emotion/react';

import { colors } from './colors';

import { CountryOption } from '@/staticData/countryOptions';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customSelectStyles: StylesConfig<CountryOption, false> = {
  container: (base) => ({
    ...base,
    marginBlockStart: 11,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '150px',
  }),
  control: (base, state) => ({
    ...base,
    height: 48,
    border: `2px solid ${
      state.isFocused
        ? colors.backgroundSupportPrimary
        : colors.backgroundModalLight
    }`,
    boxShadow: state.isFocused
      ? `0 4px 10px ${colors.shadowBoxSupport}`
      : colors.shadowModal,
    borderRadius: 12,
    transition: 'all 0.3s ease',
    backgroundColor: colors.colorWhitePrimary,
    ':hover': {
      borderColor: colors.backgroundSupportHover,
      opacity: '0.5',
    },
    cursor: 'pointer',
  }),
  placeholder: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    fontSize: '14px',
    fontWeight: 400,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 8,
    boxShadow: colors.shadowBoxLight,
    backgroundColor: colors.colorWhitePrimary,
    animation: `${fadeIn} 0.3s ease-in-out`,
    marginTop: 8,
    overflow: 'hidden',
    padding: '10px 5px',
    border: `2px solid ${colors.backgroundModalOverlay}`,
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '260px',
    overflowY: 'auto',
    padding: '8px 0',
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: colors.colorGrayNeutral,
      borderRadius: '4px',
    },
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: 10,
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    padding: '12px',
    fontSize: '14px',
    fontWeight: isSelected ? 600 : 400,
    borderRadius: '6px',
    backgroundColor: isSelected
      ? colors.backgroundSupportActive
      : isFocused
      ? colors.optionBackground
      : colors.colorWhitePrimary,
    color:
      isSelected || isFocused
        ? colors.colorWhitePrimary
        : colors.colorGrayNeutral,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: colors.backgroundSupportHover,
      color: colors.colorWhitePrimary,
    },
    maxWidth: '95%',
  }),
  singleValue: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    fontSize: '14px',
    fontWeight: 500,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused
      ? colors.backgroundSupportPrimary
      : colors.colorGrayNeutral,
    ':hover': {
      color: colors.backgroundSupportHover,
    },
  }),
  indicatorsContainer: (base) => ({
    ...base,
    paddingInlineEnd: 10,
  }),
  input: (base) => ({
    ...base,
    display: 'none',
  }),
};

export default customSelectStyles;
