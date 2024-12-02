'use client';

import React, { useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useBodyOverflow } from '@/hooks/useBodyOverflow';

import { Sidebar, HomeModal } from '@/components/index';

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
