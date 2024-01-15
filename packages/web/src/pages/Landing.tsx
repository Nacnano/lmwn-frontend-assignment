import useMenu from "../hooks/useMenu";
import RestaurantDetails from "../components/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/MenuList";
import { Restaurant } from "../common/types";

export default function Landing() {
  const restaurantId = import.meta.env.VITE_RESTAURANT_ID || "227018";
  const restaurant = useRestaurant({ restaurantId }) as Restaurant;
  return (
    <>
      <div>
        <h1>LINE MAN Wongnai Frontend Assignment!</h1>
        {restaurant && <RestaurantDetails restaurant={restaurant} />}
        {restaurant?.menus && <MenuList menuNames={restaurant.menus} />}
      </div>
    </>
  );
}
