// RestaurantMenuList.tsx
import React from "react";
import MenuDetails from "./MenuDetails";

interface RestaurantMenuListProps {
  menus: Array<{
    name: string;
    fullPrice: number;
    // Add more fields as needed
  }>;
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
