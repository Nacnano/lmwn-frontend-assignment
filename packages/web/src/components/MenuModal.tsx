import React from "react";
import { Menu } from "../common/types";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  menu: Menu | null;
}

const MenuModal = ({ isOpen, onClose, menu }: MenuModalProps) => {
  if (!isOpen || !menu) {
    return null;
  }

  return (
    <div className="fixed w-full h-full inset-0 flex items-center justify-center">
      <div
        className="absolute z-10 inset-0 bg-gray-800 opacity-75 cursor-pointer"
        onClick={onClose}
      ></div>
      <div className="z-50 bg-white p-6 rounded-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">{menu.name}</h2>
        <p className="text-lg mb-4">Price: ${menu.fullPrice}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
