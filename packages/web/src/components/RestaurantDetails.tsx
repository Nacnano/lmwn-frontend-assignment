// RestaurantDetails.tsx
import React from "react";

interface RestaurantDetailsProps {
  restaurant: {
    name: string;
    coverImage: string;
    // Add more fields as needed
  };
}

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant,
}) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.coverImage} alt={restaurant.name} />
      {/* Add more details here */}
    </div>
  );
};

export default RestaurantDetails;
