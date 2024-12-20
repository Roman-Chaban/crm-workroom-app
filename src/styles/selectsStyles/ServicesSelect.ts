import { StylesConfig } from 'react-select';
import { ServiceOption } from '@/interfaces/ServicesSelectInterface';

import { COLORS } from '@/constants/colors';

export const customServicesSelect: StylesConfig<ServiceOption, false> = {
  container: (base) => ({
    ...base,
    width: '100%',
    maxWidth: '403px',
    height: '49px',
    marginBottom: '1rem',
  }),
  control: (base, state) => ({
    ...base,
    cursor: 'pointer',
    background: COLORS.colorWhitePrimary,
    boxShadow: state.isFocused
      ? `0 0 0 4px rgba(${COLORS.backgroundSupportPrimary}, 0.2)`
      : COLORS.shadowModal,
    border: `1.5px solid ${
      state.isFocused
        ? COLORS.backgroundSupportHover
        : COLORS.backgroundModalLight
    }`,
    borderRadius: 14,
    height: '49px',
    transition: 'all 0.3s ease-in-out',
    paddingInline: '10px',
    ':hover': {
      borderColor: COLORS.backgroundSupportHover,
      boxShadow: `0 0 0 4px rgba(${COLORS.backgroundSupportPrimary}, 0.1)`,
    },
  }),
  menu: (base, state) => ({
    ...base,
    marginTop: 4,
    borderRadius: 14,
    border: `1.5px solid ${COLORS.backgroundModalLight}`,
    boxShadow: `0px 4px 10px ${COLORS.shadowBoxLight}`,
    overflow: 'hidden',
    opacity: state.selectProps.menuIsOpen ? 1 : 0,
    animation: state.selectProps.menuIsOpen
      ? 'fadeIn 0.3s ease-in-out'
      : 'fadeOut 0.3s ease-in-out',
    transform: state.selectProps.menuIsOpen ? 'scale(1)' : 'scale(0.9)',
    animationFillMode: 'forwards',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
    width: '100%',
  }),
  menuList: (base) => ({
    ...base,
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '8px',
    maxHeight: '200px',
    overflowY: 'auto',
    paddingRight: '8px',
    scrollbarWidth: 'thin',
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: COLORS.backgroundSupportPrimary,
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: COLORS.backgroundSupportHover,
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: COLORS.backgroundModalLight,
    },
  }),
  option: (base, state) => ({
    ...base,
    padding: '12px',
    width: 'calc(100% - 24px)',
    margin: '0 auto',
    borderRadius: 12,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    backgroundColor: state.isSelected
      ? COLORS.backgroundSupportPrimary
      : state.isFocused
        ? COLORS.backgroundSupportHover
        : 'transparent',
    color:
      state.isSelected || state.isFocused
        ? COLORS.colorWhitePrimary
        : COLORS.colorGrayNeutral,
    ':hover': {
      backgroundColor: COLORS.backgroundSupportHover,
      color: COLORS.colorWhitePrimary,
      transform: 'scale(1.02)',
    },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: COLORS.colorGrayNeutral,
    transition: 'transform 0.3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    ':hover': {
      color: COLORS.backgroundSupportHover,
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  indicatorsContainer: (base) => ({
    ...base,
  }),
};
