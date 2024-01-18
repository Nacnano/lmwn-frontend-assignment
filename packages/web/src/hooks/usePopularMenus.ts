import { useState, useEffect } from "react";
import axios from "axios";
import { Menu } from "../common/types";
import { useParams } from "react-router";

const usePopularMenus = (restaurantId?: string) => {
  const [popularMenus, setPopularMenus] = useState<Menu[] | null>(null);

  if (!restaurantId) {
    restaurantId = useParams().restaurantId;
  }

  useEffect(() => {
    const fetchPopularMenus = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/restaurants/${restaurantId}/popular`
        );
        setPopularMenus(response.data);
      } catch (error) {
        console.error(
          "Error fetching popular menu from " + restaurantId,
          error
        );
      }
    };

    fetchPopularMenus();
  }, [restaurantId]);

  return popularMenus;
};

export default usePopularMenus;
