import { StylesConfig } from 'react-select';

import { keyframes } from '@emotion/react';

import { Option } from '@/interfaces/select';

import { colors } from '@/constants/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customStyles: StylesConfig<Option, false> = {
  container: (base) => ({
    ...base,
    display: 'flex',
    flexDirection: 'column',
    marginBlockStart: 0,
    position: 'relative',
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
  control: (base) => ({
    ...base,
    border: `2px solid ${colors.backgroundModalLight}`,
    boxShadow: colors.shadowModal,
    borderRadius: 14,
    minHeight: 49,
    cursor: 'pointer',
    transition: 'all 0.3s',
    ':hover': {
      borderColor: colors.backgroundSupportHover,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    fontSize: 14,
    lineHeight: '171%',
    transition: 'opacity 0.3s',
    fontWeight: 400,
  }),
  menu: (base) => ({
    ...base,
    animation: `${fadeIn} 0.3s ease-in-out`,
    opacity: 0,
    animationFillMode: 'forwards',
    borderRadius: 14,
    boxShadow: colors.shadowBoxLight,
    background: colors.colorWhitePrimary,
    border: `2px solid ${colors.backgroundModalLight}`,
    maxHeight: '240px',
    overflowY: 'auto',
    scrollbarWidth: 'none',
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base) => ({
    ...base,
    padding: '11px',
    color: colors.colorGrayNeutral,
    fontSize: 16,
    margin: 10,
    fontWeight: 400,
    maxHeight: 46,
    maxWidth: '95%',
    borderRadius: 14,
    lineHeight: '171%',
    background: colors.colorWhitePrimary,
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    ':hover': {
      backgroundColor: colors.optionBackground,
      color: colors.colorBlackDeep,
      fontWeight: 700,
    },
    ':active': {
      backgroundColor: colors.backgroundSupportActive,
      color: colors.colorWhitePrimary,
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    paddingInlineEnd: 10,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
  }),
};

export default customStyles;
