import React from "react";
import { Menu } from "../common/types";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menu: Menu | null;
}

const MenuModal = ({
  isOpen,
  onClose,
  menu,
  setIsModalOpen,
}: MenuModalProps) => {
  if (!isOpen || !menu) {
    return null;
  }

  const handleClick = () => {
    console.log("handleClick");
    onClose();
    setIsModalOpen(false);
  };

  return (
    <div className="fixed w-full h-full inset-0 flex items-center justify-center">
      <div
        className="z-30 absolute inset-0 bg-gray-800 opacity-60"
        // onClick={onClose}
        onClick={handleClick}
      />
      <div className="z-[100] bg-white p-6 rounded-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">{menu.name}</h2>
        <p className="text-lg mb-4">Price: ${menu.fullPrice}</p>
      </div>
    </div>
  );
};

export default MenuModal;
