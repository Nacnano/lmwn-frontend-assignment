import RestaurantCard from "../components/RestaurantCard";
import { restaurantList } from "../data/restaurantList";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Select a Restaurant
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {restaurantList.map((restaurant, index) => (
            <RestaurantCard key={index} id={restaurant.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
