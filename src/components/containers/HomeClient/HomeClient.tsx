"use client";

import { useRef, useState, type FC } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

import { Sidebar, HomeModal } from "@/components/index";

type IsOpenModal = boolean;
type ModalRef = null;

export const HomeClient: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<IsOpenModal>(false);
  const modalRef = useRef<ModalRef>(null);

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
        <HomeModal onCloseModal={handleToggleModal} ref={modalRef} />
      )}
    </>
  );
};
