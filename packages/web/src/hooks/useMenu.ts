import { useEffect, useState } from "react";
import { Menu, MenuType } from "../common/types";
interface UseMenuDetailsProps {
  restaurantId: string;
  menuName: string;
  type?: MenuType;
}

const useMenuDetails = ({
  restaurantId,
  menuName,
  type = MenuType.Short,
}: UseMenuDetailsProps): Menu | null => {
  const [menuDetails, setMenuDetails] = useState<Menu | null>(null);

  useEffect(() => {
    const fetchMenuDetails = async () => {
      try {
        const response = await fetch(
          `${process.env._REACT_APP_API_URL}/restaurants/${restaurantId}/menus/${menuName}/${type}`
        );
        const data = await response.json();

        setMenuDetails(data);
      } catch (error) {
        setMenuDetails(null);
      }
    };

    fetchMenuDetails();
  }, [restaurantId, menuName]);

  return menuDetails;
};

export default useMenuDetails;
