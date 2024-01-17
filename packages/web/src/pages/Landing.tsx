import RestaurantDetails from "../components/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/MenuList";
import { Restaurant } from "../common/types";

export default function Landing() {
  const restaurantId = import.meta.env.VITE_RESTAURANT_ID || "227018";
  const restaurant = useRestaurant({ restaurantId }) as Restaurant;
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-md">
          {restaurant && <RestaurantDetails restaurant={restaurant} />}
          {restaurant?.menus && <MenuList menuNames={restaurant.menus} />}
        </div>
      </div>
    </>
  );
}
