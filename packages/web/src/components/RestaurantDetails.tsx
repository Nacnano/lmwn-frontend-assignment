import { Restaurant } from "../common/types";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  return (
    <div className="w-full">
      <img
        src={restaurant.coverImage}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="max-w-3xl mx-4 py-4 bg-white rounded">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <h2 className="text-xl font-normal">
          Open: {restaurant.activeTimePeriod.open}
          {" - "}
          {restaurant.activeTimePeriod.close}
        </h2>
      </div>
    </div>
  );
};

export default RestaurantDetails;
