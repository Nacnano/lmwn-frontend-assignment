import { MoonLoader } from "react-spinners";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/Menu/MenuList";
import { Restaurant } from "../common/types";
import { MobileSidebar } from "../components";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NavBar from "../components/NavBar";

export default function RestaurantPage() {
  const restaurant = useRestaurant() as Restaurant;

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center relative">
        <div className="w-full  min-h-screen bg-white shadow-md rounded-md flex flex-col items-center justify-center">
          {restaurant ? (
            <>
              <RestaurantDetails restaurant={restaurant} />
              {restaurant.menus && <MenuList menuNames={restaurant.menus} />}
            </>
          ) : (
            <MoonLoader size={50} />
          )}
        </div>

        <NavBar />
        {/* <MobileSidebar /> */}

        <ScrollToTopButton />
      </div>
    </>
  );
}
