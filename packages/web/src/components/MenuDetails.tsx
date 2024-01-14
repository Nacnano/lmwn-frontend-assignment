import React from "react";
import { Menu } from "../common/types";

interface MenuDetailsProps {
  menu: Menu;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ menu }) => {
  return (
    <div>
      <h2>{menu.name}</h2>
      <p>Price: ${menu.fullPrice}</p>
      {/* Add more details here */}
    </div>
  );
};

export default MenuDetails;
