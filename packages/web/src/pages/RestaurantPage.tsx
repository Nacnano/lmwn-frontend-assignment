import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/MenuList";
import { Restaurant } from "../common/types";

export default function RestaurantPage() {
  const restaurant = useRestaurant() as Restaurant;

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full md:w-2/3 min-h-screen bg-white shadow-md rounded-md flex flex-col items-center justify-center">
          {restaurant ? (
            <>
              <RestaurantDetails restaurant={restaurant} />
              {restaurant.menus && <MenuList menuNames={restaurant.menus} />}
            </>
          ) : (
            <MoonLoader size={50} />
          )}
        </div>

        <Link
          to="/"
          className="fixed bottom-4 left-4 bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-gray-100 text-xl font-extrabold 
          px-4 py-2 rounded-full transition border-2 border-gray-300 shadow-sm hover:shadow-md"
        >
          &#x2190; Back
        </Link>
      </div>
    </>
  );
}
