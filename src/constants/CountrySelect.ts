import { StylesConfig } from 'react-select';
import { Keyframes, keyframes } from '@emotion/react';

import { COLORS } from './Colors';

import { CountryOption } from '@/static/CountryOptions';

const fadeIn: Keyframes = keyframes`
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
        ? COLORS.backgroundSupportPrimary
        : COLORS.backgroundModalLight
    }`,
    boxShadow: state.isFocused
      ? `0 4px 10px ${COLORS.shadowBoxSupport}`
      : COLORS.shadowModal,
    borderRadius: 12,
    transition: 'all 0.3s ease',
    backgroundColor: COLORS.colorWhitePrimary,
    ':hover': {
      borderColor: COLORS.backgroundSupportHover,
      opacity: '0.5',
    },
    cursor: 'pointer',
  }),
  placeholder: (base) => ({
    ...base,
    color: COLORS.colorGrayNeutral,
    fontSize: '14px',
    fontWeight: 400,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 8,
    boxShadow: COLORS.shadowBoxLight,
    backgroundColor: COLORS.colorWhitePrimary,
    animation: `${fadeIn} 0.3s ease-in-out`,
    marginTop: 8,
    overflow: 'hidden',
    padding: '10px 5px',
    border: `2px solid ${COLORS.backgroundModalOverlay}`,
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
      backgroundColor: COLORS.colorGrayNeutral,
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
      ? COLORS.backgroundSupportActive
      : isFocused
        ? COLORS.optionBackground
        : COLORS.colorWhitePrimary,
    color:
      isSelected || isFocused
        ? COLORS.colorWhitePrimary
        : COLORS.colorGrayNeutral,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: COLORS.backgroundSupportHover,
      color: COLORS.colorWhitePrimary,
    },
    maxWidth: '95%',
  }),
  singleValue: (base) => ({
    ...base,
    color: COLORS.colorGrayNeutral,
    fontSize: '14px',
    fontWeight: 500,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused
      ? COLORS.backgroundSupportPrimary
      : COLORS.colorGrayNeutral,
    ':hover': {
      color: COLORS.backgroundSupportHover,
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
