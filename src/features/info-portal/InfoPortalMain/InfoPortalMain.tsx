import React, { type FC } from 'react';

import { Box, Container, Heading, Div, InfoPortalFolders, Paragraph, Span } from '@/index';

import styles from './InfoPortalMain.module.scss';

export const InfoPortalMain: FC = () => {
  return (
    <Container className={styles['infoPortalMain']}>
      <Box className={styles['infoPortalMainContainer']}>
        <Div className={styles['infoPortalMainBanner']}>
          <Div className={styles['infoPortalMainBannerInfo']}>
            <Heading
              tag="h4"
              className={styles['infoPortalMainBannerTitle']}
            >
              Your project data warehouse
            </Heading>
            <Paragraph className={styles['infoPortalMainBannerSubtitle']}>
              Add project data, create thematic pages, edit data, share information with team
              members
            </Paragraph>
          </Div>
        </Div>

        <Div className={styles['infoPortalMainSecondBanner']}>
          <Div className={styles['infoPortalMainSecondBannerContainer']}>
            {' '}
            <Heading
              tag="h5"
              className={styles['projectsTitle']}
            >
              Current Projects
            </Heading>
            <Div className={styles['projectsStatistic']}>
              <strong className={styles['projectsStatisticTitle']}>10</strong>
              <Span className={styles['projectsStatisticGrowth']}>Growth +3</Span>
            </Div>
            <Span className={styles['projectsStatisticSubtitle']}>
              Ongoing projects last month - 7
            </Span>
          </Div>
        </Div>
      </Box>

      <InfoPortalFolders />
    </Container>
  );
};
