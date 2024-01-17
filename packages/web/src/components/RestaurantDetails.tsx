import { Restaurant } from "../common/types";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  const { open, close } = restaurant.activeTimePeriod;

  const isOpenNow = (): boolean => {
    const currentTime = new Date();
    const openTime = new Date(currentTime.toDateString() + " " + open);
    const closeTime = new Date(currentTime.toDateString() + " " + close);

    return currentTime >= openTime && currentTime <= closeTime;
  };

  return (
    <div className="w-full">
      <img
        src={restaurant.coverImage}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="max-w-3xl mx-4 py-4 bg-white rounded">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <div className="flex flex-wrap gap-2 justify-start items-baseline">
          <p
            className={`text-xl font-semibold ${isOpenNow() ? "text-green-600" : "text-red-600"}`}
          >
            {isOpenNow() ? "Open" : "Closed"}
          </p>
          <h2 className="text-lg text-gray-400 font-normal">
            {" ⋅ "}
            {open} - {close}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
