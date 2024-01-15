import React from "react";
import MenuDetails from "./MenuDetails";

interface MenuListProps {
  menuNames: string[];
}

const MenuList: React.FC<MenuListProps> = ({ menuNames }) => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Menu List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuNames.map((menuName, index) => (
            <MenuDetails key={index} menuName={menuName} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuList;
