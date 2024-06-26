import { RestaurantCard } from "../components/Restaurant";
import { restaurantList } from "../data/restaurantList";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-4/5 lg:w-2/3 xl:w-2/4 bg-white shadow-md rounded-md p-8">
        <h2 className="text-center pb-2 text-lg font-medium">
          LINEMAN Wongnai Frontend Assignment
        </h2>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Select a Restaurant
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurantList.map((restaurant, index) => (
            <RestaurantCard key={index} id={restaurant.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
