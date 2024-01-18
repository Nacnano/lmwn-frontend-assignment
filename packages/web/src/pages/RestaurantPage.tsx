import { MoonLoader } from "react-spinners";
import RestaurantDetails from "../components/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/MenuList";
import { Restaurant } from "../common/types";
import { navbarList } from "../data/navbarList";
import CustomLink from "../components/CustomLink";
import MobileSidebar from "../components/MobileSidebar";
import ScrollToTopButton from "../components/ScrollToTopButton";

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

        <div className="w-auto flex items-end gap-2 lg:p-4 fixed top-4 right-4 shadow-none">
          {navbarList.map((item, index) => (
            <CustomLink
              key={index}
              to={item.path}
              className="bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-gray-100 text-lg font-medium
              px-4 py-2 rounded-full transition border-2 border-gray-300 shadow-sm hover:shadow-md opacity-90"
            >
              {item.text}
            </CustomLink>
          ))}
        </div>

        {/* <MobileSidebar /> */}

        <ScrollToTopButton />
      </div>
    </>
  );
}
