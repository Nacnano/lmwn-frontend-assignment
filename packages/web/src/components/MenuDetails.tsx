import React from "react";
import { Menu } from "../common/types";
import useMenu from "../hooks/useMenu";

interface MenuDetailsProps {
  menuName: string;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ menuName }) => {
  const menu = useMenu({ menuName }) as Menu;
  return (
    <div>
      <h2>{menu?.name}</h2>
      <p>Price: ${menu?.fullPrice}</p>
      {/* Add more details here */}
    </div>
  );
};

export default MenuDetails;
