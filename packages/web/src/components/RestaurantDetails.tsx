import { Restaurant } from "../common/types";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <img
        src={restaurant.coverImage}
        alt={restaurant.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
          <p>
            Open: {restaurant.activeTimePeriod.open} - Close:{" "}
            {restaurant.activeTimePeriod.close}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
