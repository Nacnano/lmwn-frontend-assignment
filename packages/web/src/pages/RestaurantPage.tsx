import { MoonLoader } from "react-spinners";
import RestaurantDetails from "../components/RestaurantDetails";
import useRestaurant from "../hooks/useRestaurant";
import MenuList from "../components/MenuList";
import { Restaurant } from "../common/types";
import { sidebarList } from "../data/sidebarList";
import CustomLink from "../components/CustomLink";

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

        <div className="fixed top-4 left-4 flex flex-col items-start gap-2">
          {sidebarList.map((item, index) => (
            <CustomLink
              to={item.path}
              className=" bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-gray-100 text-lg font-medium
          px-4 py-2 rounded-full transition border-2 border-gray-300 shadow-sm hover:shadow-md"
            >
              {item.text}
            </CustomLink>
          ))}
        </div>
      </div>
    </>
  );
}
