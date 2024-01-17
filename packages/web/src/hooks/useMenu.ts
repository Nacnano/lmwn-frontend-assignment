import { useEffect, useState } from "react";
import { Menu, MenuType } from "../common/types";
import { useParams } from "react-router";

interface UseMenuDetailsProps {
  menuName: string;
  type?: MenuType;
}

const useMenu = ({
  menuName,
  type = MenuType.Short,
}: UseMenuDetailsProps): Menu | null => {
  const [menuDetails, setMenuDetails] = useState<Menu | null>(null);

  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchMenuDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/restaurants/${restaurantId}/menus/${menuName}/${type}`
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
