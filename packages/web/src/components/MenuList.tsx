import React from "react";
import MenuDetails from "./MenuDetails";
import { Menu } from "../common/types";

interface MenuListProps {
  menuNames: string[];
}

const MenuList: React.FC<MenuListProps> = ({ menuNames }) => {
  return (
    <div>
      <h2>Menu List</h2>
      {menuNames.map((menuName, index) => (
        <MenuDetails key={index} menuName={menuName} />
      ))}
    </div>
  );
};

export default MenuList;
