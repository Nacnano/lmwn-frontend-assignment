import { useEffect, useState } from "react";
import { Menu } from "../common/types";
interface UseMenuDetailsProps {
  restaurantId: string;
  menuName: string;
}

interface UseMenuDetailsResult {
  menuDetails: Menu | null;
  error: Error | null;
}

const useMenuDetails = ({
  restaurantId,
  menuName,
}: UseMenuDetailsProps): UseMenuDetailsResult => {
  const [menuDetails, setMenuDetails] = useState<MenuDetails | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMenuDetails = async () => {
      try {
        const response = await fetch(
          `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/full.json`
        );
        const data = await response.json();

        setMenuDetails(data);
        setError(null);
      } catch (error) {
        setMenuDetails(null);
        setError(error);
      }
    };

    fetchMenuDetails();
  }, [restaurantId, menuName]);

  return { menuDetails, error };
};

export default useMenuDetails;
