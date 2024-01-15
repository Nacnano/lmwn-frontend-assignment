import { Restaurant } from "../common/types";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant,
}) => {
  return (
    <div>
      <img
        src={restaurant.coverImage}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="max-w-3xl mx-4 py-4 bg-white rounded">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-normal">
              Open: {restaurant.activeTimePeriod.open} -{" "}
              {restaurant.activeTimePeriod.close}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
