import React from "react";
import MenuDetails from "./MenuDetails";
import { FullMenu, ShortMenu } from "@common/types";

interface RestaurantMenuListProps {
  menus: ShortMenu[] | FullMenu[];
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
