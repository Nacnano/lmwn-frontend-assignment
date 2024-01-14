// MenuDetails.tsx
import React from "react";

interface MenuDetailsProps {
  menu: {
    name: string;
    fullPrice: number;
    // Add more fields as needed
  };
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
