'use client';

import { useState, type FC } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Button } from '@/components/index';

import styles from '@/components/layout/Header/Header.module.scss';

interface LogoutCurrentUserProps {
  validateUserName: string | null;
}

export const LogoutCurrentUser: FC<LogoutCurrentUserProps> = ({
  validateUserName,
}) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsVisibleMenu((prevVisibleState) => !prevVisibleState);
  };

  return (
    <div
      className={`${styles['headerUserLogout']} ${
        isVisibleMenu ? styles['visibleMenu'] : ''
      } `}
    >
      {validateUserName && (
        <Button
          type="button"
          onClick={handleShowMenu}
          className={styles['headerUserLoginButton']}
        >
          <h5 className={styles['headerUserLoginBanner']}>
            {validateUserName}
            <span
              id={styles['rotateIconContainer']}
              className={
                isVisibleMenu
                  ? `${styles['rotateIcon']} ${styles['rotate']}`
                  : styles['rotateIcon']
              }
            >
              <ExpandMoreIcon />
            </span>
          </h5>
        </Button>
      )}
      {isVisibleMenu && (
        <div className={styles['headerUserLoginMenu']}>
          <Button type="button" className={styles['headerLogoutButton']}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};
