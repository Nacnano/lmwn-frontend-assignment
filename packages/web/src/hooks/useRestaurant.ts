import { useState, useEffect } from "react";
import axios from "axios";
import { Restaurant } from "../common/types";
import { useParams } from "react-router";

const useRestaurant = (restaurantId?: string) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  if (!restaurantId) {
    restaurantId = useParams().restaurantId;
  }

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
