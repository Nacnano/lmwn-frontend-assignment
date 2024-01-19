import { MoonLoader } from "react-spinners";
import { Menu } from "../../common/types";
import MenuCard from "./MenuCard";

interface PopularMenusListProps {
  popularMenus: Menu[] | null;
}

const PopularMenusList = ({ popularMenus }: PopularMenusListProps) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Popular Menus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularMenus &&
          popularMenus.map((menu, index) => (
            <MenuCard key={index} menu={menu} />
          ))}
      </div>
      {!popularMenus && (
        <div className="pt-5 pb-20 flex w-full items-center justify-center">
          <MoonLoader size={40} />
        </div>
      )}
    </div>
  );
};

export default PopularMenusList;
