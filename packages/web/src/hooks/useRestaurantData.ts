// useRestaurantData.ts
import { useState, useEffect } from "react";

export const useRestaurantData = (apiUrl: string) => {
  const [restaurantData, setRestaurantData] = useState<any | null>(null);
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
