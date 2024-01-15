import { useState, useEffect } from "react";
import axios from "axios";
import { Restaurant } from "../common/types";

interface UseRestaurantProps {
  restaurantId: string;
}

const useRestaurant = ({ restaurantId }: UseRestaurantProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const restaurantResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/restaurants/${restaurantId}`
        );
        setRestaurant(restaurantResponse.data);
      } catch (error) {
        console.error(
          "Error fetching restaurant data from " + restaurantId,
          error
        );
      }
    };

    fetchRestaurantData();
  }, [restaurantId]);

  return restaurant;
};

export default useRestaurant;
