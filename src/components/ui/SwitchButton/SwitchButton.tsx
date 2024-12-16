import React, { HTMLProps, useState, type FC } from 'react';

import { Button } from '@/index';

type IsActive = boolean;

interface SwitchButtonProps extends HTMLProps<HTMLButtonElement> {
  classNames: {
    button: string;
    circle: string;
    active: string;
  };
}

export const SwitchButton: FC<SwitchButtonProps> = ({ classNames }) => {
  const [isActive, setIsActive] = useState<IsActive>(false);

  const handleToggleSwitcher = () => {
    setIsActive((prevSwitcherState) => !prevSwitcherState);
  };

  return (
    <Button
      type="button"
      className={`${classNames.button} ${isActive ? classNames.active : ''}`}
      onClick={handleToggleSwitcher}
    >
      <span
        className={`${classNames.circle} ${isActive ? classNames.active : ''} `}
      ></span>
    </Button>
  );
};
