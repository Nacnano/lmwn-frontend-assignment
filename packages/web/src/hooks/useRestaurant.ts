import { useState, useEffect } from "react";
import axios from "axios";
import { Restaurant } from "../common/types";

interface UseRestaurantProps {
  restaurantId: number;
}

const useRestaurant = ({ restaurantId }: UseRestaurantProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const restaurantResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}`
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

  return { restaurant };
};

export default useRestaurant;
