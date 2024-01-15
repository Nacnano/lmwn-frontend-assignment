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
      {menuNames.map((menu, index) => (
        <MenuDetails key={index} menu={menu} />
      ))}
    </div>
  );
};

export default MenuList;
