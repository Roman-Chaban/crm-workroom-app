'use client';

import React, { type FC } from 'react';

import styled, { css } from 'styled-components';

import Image from 'next/image';

import { colors } from '@/constants/colors';

const ViewLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 1px;
`;
const ViewLinkIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
const viewLinkMixin = css`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${colors.backgroundSupportPrimary};
  font-size: size.$font-size-lg;
  font-weight: 600;
  position: relative;

  transition: color 0.5s ease-in-out 0s;
  &:hover {
    color: ${colors.backgroundSupportHover};
  }

  &:active {
    color: ${colors.backgroundSupportActive};
  }
`;

const ViewLinkItem = styled.a`
  ${viewLinkMixin}
`;

export const ViewLink: FC = () => {
  return (
    <ViewLinkContainer>
      <ViewLinkIconWrapper>
        <Image
          src={'icons/activity-stream-icons/arrow-down.svg'}
          alt="Arrow Down Icon"
          width={24}
          height={24}
          loading="lazy"
        />
      </ViewLinkIconWrapper>
      <ViewLinkItem href={'/'}>View more</ViewLinkItem>
    </ViewLinkContainer>
  );
};
