import React from "react";
import { Menu, MenuItemOption } from "../common/types";

interface MenuModalProps {
  isOpen: boolean;
  menu: Menu | null;
}

const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  menu,
}: MenuModalProps) => {
  if (!isOpen || !menu) {
    return null;
  }

  return (
    <div className="fixed w-full h-full inset-0 flex items-center justify-center cursor-default">
      <div className="z-30 absolute inset-0 bg-gray-800 opacity-60" />
      <div className="z-[100] bg-white p-6 rounded-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">{menu.name}</h2>
        <p className="text-lg mb-4">Price: ${menu.fullPrice}</p>
        {menu.thumbnailImage && (
          <img
            src={menu.thumbnailImage}
            alt={menu.name}
            className="mb-4 rounded-md"
            style={{ maxWidth: "100%" }}
          />
        )}
        {menu.discountedPercent > 0 && (
          <p className="text-green-600 mb-4">
            Discount: {menu.discountedPercent}% off
          </p>
        )}
        {menu.discountedTimePeriod && (
          <p className="text-gray-600 mb-4">
            Discount valid from {menu.discountedTimePeriod.begin} to{" "}
            {menu.discountedTimePeriod.end}
          </p>
        )}

        {menu.options && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Options:</h3>
            {menu.options.map((option: MenuItemOption, index: number) => (
              <div key={index} className="mb-2">
                <ul className="list-disc pl-4">
                  {option.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex}>{choice.label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="  ">
          <a>Press anywhere to close</a>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
