import { Restaurant } from "../common/types";
import React from "react";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.coverImage} alt={restaurant.name} />
      {/* Add more details here */}
    </div>
  );
};

export default RestaurantDetails;
