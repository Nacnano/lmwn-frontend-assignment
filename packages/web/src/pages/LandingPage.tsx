// LandingPage.js

import { restaurantList } from "../data/restaurantList";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-8">Select a Restaurant</h1>
        <div className="grid grid-cols-2 gap-4">
          {restaurantList.map((restaurant, index) => (
            <Link
              to={`/${restaurant.id}`}
              className="border p-4 rounded-md hover:bg-gray-200"
            >
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
