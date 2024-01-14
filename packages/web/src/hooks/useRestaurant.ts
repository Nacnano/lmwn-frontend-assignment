import { useState, useEffect } from "react";
import { Restaurant } from "common/types";

export const useRestaurant = (apiUrl: string) => {
  const [restaurantData, setRestaurantData] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { restaurantData, loading, error };
};
