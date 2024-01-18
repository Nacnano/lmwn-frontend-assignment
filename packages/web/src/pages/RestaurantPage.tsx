import { MoonLoader } from "react-spinners";
import RestaurantDetails from "../components/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/MenuList";
import { Restaurant } from "../common/types";
import { sidebarList } from "../data/sidebarList";
import CustomLink from "../components/CustomLink";
import MobileSidebar from "../components/MobileSidebar";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function RestaurantPage() {
  const restaurant = useRestaurant() as Restaurant;

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center relative">
        <div className="lg:w-2/3 min-h-screen bg-white shadow-md rounded-md flex flex-col items-center justify-center">
          {restaurant ? (
            <>
              <RestaurantDetails restaurant={restaurant} />
              {restaurant.menus && <MenuList menuNames={restaurant.menus} />}
            </>
          ) : (
            <MoonLoader size={50} />
          )}
        </div>

        <div className="lg:w-1/4 lg:fixed lg:top-4 lg:right-4 lg:shadow-none">
          <div className="hidden lg:flex flex-col items-end gap-2 p-4 lg:p-0">
            {sidebarList.map((item, index) => (
              <CustomLink
                key={index}
                to={item.path}
                className="bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-gray-100 text-lg font-medium
                px-4 py-2 rounded-full transition border-2 border-gray-300 shadow-sm hover:shadow-md"
              >
                {item.text}
              </CustomLink>
            ))}
          </div>
        </div>

        <MobileSidebar />

        <ScrollToTopButton />
      </div>
    </>
  );
}
