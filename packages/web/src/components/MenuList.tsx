import React, { useState, useEffect, useRef } from "react";
import MenuDetails from "./MenuCard";
import { MoonLoader } from "react-spinners";
import useMenu from "../hooks/useMenu";
import { Menu, MenuType } from "../common/types";
import RangeSlider from "./RangeSlider";

const defaultPriceRange = [0, 500];

interface MenuListProps {
  menuNames: string[];
}

const MenuList = ({ menuNames }: MenuListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleMenuCount, setVisibleMenuCount] = useState(12);
  const [priceFilter, setPriceFilter] = useState<number[]>(defaultPriceRange);
  const containerRef = useRef<HTMLDivElement>(null);

  // Remove duplicate menu names
  menuNames = [...new Set(menuNames)];

  const menus = menuNames.map(
    (menuName) => useMenu({ menuName, type: MenuType.Full }) as Menu
  );
  const filteredMenus = menus.filter(
    (menu) =>
      menu &&
      menu.name &&
      menu.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      menu.fullPrice >= priceFilter[0] &&
      menu.fullPrice <= priceFilter[1]
  );

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleMenuCount(12);
    setSearchTerm(e.target.value);
  };

  const handlePriceFilterChange = (value: number | number[]) => {
    setVisibleMenuCount(12);
    setPriceFilter(value as number[]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleMenuCount((prevCount) => prevCount + 12);
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div className="w-full px-4">
      <div className="mt-4 pt-8 pb-8 px-4 border-t-2 border-gray-300">
        <div className="flex flex-wrap items-center mb-4 justify-start gap-4">
          <input
            type="text"
            placeholder="Search menu"
            value={searchTerm}
            onChange={(e) => handleSearchBarChange(e)}
            className="border border-gray-400 p-1 w-auto rounded-md mr-2 max-w-lg"
          />
          <div className="px-2 w-full md:w-1/3">
            <div className="w-3/4 md:w-4/5">
              <div className="text-sm pb-1">
                {priceFilter[0]}฿ - {priceFilter[1]}฿
              </div>
              <RangeSlider
                value={priceFilter}
                onChange={(value) => handlePriceFilterChange(value)}
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Menu List</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMenus.slice(0, visibleMenuCount).map((menu, index) => (
            <MenuDetails key={index} menu={menu} />
          ))}
        </div>

        {searchTerm && filteredMenus.length === 0 ? (
          <h3 className="font-medium text-2xl text-center py-5">
            No menu found
          </h3>
        ) : visibleMenuCount < filteredMenus.length ||
          (menus.filter((menu) => menu).length < menuNames.length &&
            visibleMenuCount < menuNames.length) ? (
          <div
            className="pt-5 pb-40 flex items-center justify-center"
            ref={containerRef}
          >
            <MoonLoader size={40} />
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
