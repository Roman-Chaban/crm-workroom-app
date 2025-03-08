'use client';

import React, { useRef, useState } from 'react';

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import { useBodyOverflow } from '@/shared/lib/hooks/useBodyOverflow';

import { Sidebar, HomeModal } from '@/index';

type IsOpenModal = boolean;
type ModalRef = null;

export const HomeClient = () => {
  const modalRef = useRef<ModalRef>(null);
  const [isOpenModal, setIsOpenModal] = useState<IsOpenModal>(false);

  useBodyOverflow(isOpenModal);

  useClickOutside(modalRef, () => {
    setIsOpenModal(false);
  });

  const handleToggleModal = () => {
    setIsOpenModal((prevModalState) => !prevModalState);
  };

  return (
    <>
      <Sidebar onOpenModal={handleToggleModal} />
      {isOpenModal && (
        <HomeModal
          onCloseModal={handleToggleModal}
          ref={modalRef}
        />
      )}
    </>
  );
};
