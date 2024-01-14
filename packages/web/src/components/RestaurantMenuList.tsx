import React from "react";
import MenuDetails from "./MenuDetails";
import { Menu } from "../common/types";

interface RestaurantMenuListProps {
  menus: Menu[];
}

const RestaurantMenuList: React.FC<RestaurantMenuListProps> = ({ menus }) => {
  return (
    <div>
      <h2>Menu List</h2>
      {menus.map((menu, index) => (
        <MenuDetails key={index} menu={menu} />
      ))}
    </div>
  );
};

export default RestaurantMenuList;
