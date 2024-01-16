import React from "react";
import MenuDetails from "./MenuDetails";

interface MenuListProps {
  menuNames: string[];
}

const MenuList = ({ menuNames }: MenuListProps) => {
  return (
    <>
      <div className="px-4">
        <div className="mt-4 pt-8 px-4 border-t-2 border-gray-300">
          <h2 className="text-2xl font-bold mb-4">Menu List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuNames.map((menuName, index) => (
              <MenuDetails key={index} menuName={menuName} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuList;
