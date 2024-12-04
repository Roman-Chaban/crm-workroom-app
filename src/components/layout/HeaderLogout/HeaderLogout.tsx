'use client';

import React, { useState, type FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { Button } from '@/components/index';

import { LogoutUser } from '@/api/logout';

import { toast, Toaster } from 'react-hot-toast';

import { IsVisibleMenu, UserName } from '@/types/header';

import styles from '@/components/layout/Header/Header.module.scss';

interface HeaderLogoutProps {
  validateUserName: UserName;
}

export const HeaderLogout: FC<HeaderLogoutProps> = ({ validateUserName }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<IsVisibleMenu>(false);

  const handleShowMenu = () => {
    setIsVisibleMenu((prevVisibleState) => !prevVisibleState);
  };

  const userLogoutMutation = useMutation({
    mutationFn: LogoutUser,
    onSuccess: () => {
      toast.success('User is logout!');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('registration');

      window.location.reload();
    },
    onError: (error) => {
      toast.error(error.message || 'An error occurred during logout');
    },
  });

  const handleLogoutUser = () => {
    userLogoutMutation.mutate();
  };

  return (
    <>
      <Toaster />
      <div
        title="Open menu"
        className={`${styles['headerUserLogout']} ${isVisibleMenu ? styles['visibleMenu'] : ''} `}
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
          <div className={styles['dropdownMenu']}>
            <Button
              title="Profile"
              type="button"
              className={styles['dropdownItem']}
            >
              <AccountBoxIcon />
              Profile
            </Button>
            <Button
              title="Logout"
              type="button"
              className={styles['dropdownItem']}
              onClick={handleLogoutUser}
            >
              <LogoutIcon />
              Logout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
