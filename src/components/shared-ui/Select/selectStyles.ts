import { StylesConfig } from 'react-select';

import { keyframes } from '@emotion/react';

import { Option } from '@/interfaces/SelectInterface';

import { COLORS } from '@/constants/Colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customStyles: StylesConfig<Option, false> = {
  container: (base) => ({
    ...base,
    width: '100%',
    maxWidth: '403px',
    display: 'flex',
    flexDirection: 'column',
    marginBlockStart: 0,
    position: 'relative',
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
  control: (base) => ({
    ...base,
    border: `2px solid ${COLORS.backgroundModalLight}`,
    boxShadow: COLORS.shadowModal,
    borderRadius: 14,
    minHeight: 49,
    cursor: 'pointer',
    transition: 'all 0.3s',
    ':hover': {
      borderColor: COLORS.backgroundSupportHover,
      outline: `2px solid rgba(${COLORS.backgroundSupportPrimary}, 0.11)`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: COLORS.colorGrayNeutral,
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
    boxShadow: COLORS.shadowBoxLight,
    background: COLORS.colorWhitePrimary,
    border: `2px solid ${COLORS.backgroundModalLight}`,
    maxHeight: '240px',
    overflowY: 'auto',
    scrollbarWidth: 'none',
  }),

  option: (base) => ({
    ...base,
    cursor: 'pointer',
    fontWeight: 500,
    ':hover': {
      fontWeight: 700,
      color: COLORS.colorBlackDeep,
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: COLORS.colorGrayNeutral,
    fontWeight: 400,
    paddingInlineStart: 10,
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
    color: COLORS.colorGrayNeutral,
    transition: 'transform 0.3s ease, color 0.3s ease',
    ':hover': {
      color: COLORS.backgroundSupportHover,
      transform: 'rotate(180deg)',
    },
  }),

  input: (base) => ({
    ...base,
    display: 'none',
  }),
};

export default customStyles;
