import React from "react";
import { Menu } from "../common/types";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  menu: Menu | null;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, menu }) => {
  if (!isOpen || !menu) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-800 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-md max-w-md">
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
