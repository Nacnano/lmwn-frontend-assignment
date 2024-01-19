import React, { useState, useEffect, useRef } from "react";
import MenuCard from "./MenuCard";
import useMenu from "../hooks/useMenu";
import { Menu, MenuType } from "../common/types";
import RangeSlider from "./RangeSlider";
import usePopularMenus from "../hooks/usePopularMenus";
import { debounce } from "lodash";
import PopularMenusList from "./PopularMenusList";

const defaultPriceRange = [0, 500];

interface MenuListProps {
  menuNames: string[];
}

const MenuList = ({ menuNames }: MenuListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleMenuCount, setVisibleMenuCount] = useState(12);
  const [priceFilter, setPriceFilter] = useState<number[]>(defaultPriceRange);
  const popularMenus = usePopularMenus();

  // Remove duplicate menu names
  menuNames = [...new Set(menuNames)];

  const menus = menuNames.map(
    (menuName) => useMenu({ menuName, type: MenuType.Full }) as Menu
  );
  const LoadedMenus = menus.filter((menu) => menu) as Menu[];

  const filteredMenus = LoadedMenus.filter(
    (menu) =>
      menu.name &&
      menu.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      menu.fullPrice >= priceFilter[0] &&
      menu.fullPrice <= priceFilter[1]
  );

  //TODO: Implement Debounce
  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleMenuCount(12);
    setSearchTerm(e.target.value);
  };

  const handlePriceFilterChange = (value: number | number[]) => {
    setVisibleMenuCount(12);
    setPriceFilter(value as number[]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollY + innerHeight >= scrollHeight) {
        setVisibleMenuCount((prevCount) => prevCount + 12);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full px-4">
      <div className="pt-4 pb-8 px-4 ">
        <hr id="popular-menus" className="mt-6 mb-12 border-gray-400" />
        <PopularMenusList popularMenus={popularMenus} />

        <hr id="all-menus" className="mt-6 mb-12 border-gray-400" />
        <h2 className="text-4xl font-bold mt-4 mb-4">All Menus</h2>

        <div className="flex flex-wrap items-center mb-4 justify-start gap-4">
          <input
            id="search-bar"
            type="text"
            placeholder="Search menu"
            value={searchTerm}
            onChange={(e) => handleSearchBarChange(e)}
            className="border border-gray-400 px-2 py-1  w-auto rounded-md mr-2 max-w-lg"
          />
          <div className="px-2 w-full md:w-1/3">
            <div className="w-3/4 md:w-4/5">
              <div className="text-md pb-1">
                Price {priceFilter[0]}฿ - {priceFilter[1]}฿
              </div>
              <RangeSlider
                value={priceFilter}
                onChange={(value) => handlePriceFilterChange(value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMenus.slice(0, visibleMenuCount).map((menu, index) => (
            <MenuCard key={index} menu={menu} />
          ))}
        </div>

        {searchTerm && filteredMenus.length === 0 ? (
          <h3 className="font-medium text-2xl text-center py-5">
            No menu found
          </h3>
        ) : visibleMenuCount < filteredMenus.length ||
          (menus.filter((menu) => menu).length < menuNames.length &&
            visibleMenuCount < menuNames.length) ? (
          <div className="pt-5 pb-60 flex flex-col items-center justify-center gap-2">
            {/* <MoonLoader size={40} /> */}
            <h1 className="text-2xl">Scroll More</h1>
          </div>
        ) : (
          <h3 className="font-medium text-2xl text-center pt-10 pb-10">
            End of the Menu
          </h3>
        )}
      </div>
    </div>
  );
};

export default MenuList;
