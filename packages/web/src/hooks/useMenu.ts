import { useEffect, useState } from "react";
import { Menu, MenuType } from "../common/types";

interface UseMenuProps {
  menuName: string;
  type?: MenuType;
}

const useMenu = ({
  menuName,
  type = MenuType.Short,
}: UseMenuProps): Menu | null => {
  const [menuDetails, setMenuDetails] = useState<Menu | null>(null);

  useEffect(() => {
    const fetchMenuDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/restaurants/${import.meta.env.VITE_RESTAURANT_ID}/menus/${menuName}/${type}`
        );
        const data = await response.json();

        setMenuDetails(data);
      } catch (error) {
        setMenuDetails(null);
      }
    };

    fetchMenuDetails();
  }, [menuName]);

  return menuDetails;
};

export default useMenu;
