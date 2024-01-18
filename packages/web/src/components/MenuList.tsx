import React, { useState, useEffect, useRef } from "react";
import MenuDetails from "./MenuCard";
import { MoonLoader } from "react-spinners";
import useMenu from "../hooks/useMenu";
import { Menu, MenuType } from "../common/types";
import Slider from "react-slider";

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
        <div className="flex items-center mb-4 justify-start">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => handleSearchBarChange(e)}
            className="border border-gray-400 p-2 w-full rounded-md mr-2 max-w-xl"
          />
          <div className="w-full max-w-xl flex justify-around items-center text-gray-600 gap-2">
            <span className="w-1/6 text-right">{priceFilter[0]}</span>
            <div className="w-3/4 h-4">
              <Slider
                className="slider"
                thumbClassName="h-4 w-4 bg-blue-500 rounded-full"
                trackClassName="h-4 bg-blue-300 rounded-full"
                minDistance={50}
                pearling={true}
                value={priceFilter}
                min={defaultPriceRange[0]}
                max={defaultPriceRange[1]}
                onChange={(value) => setPriceFilter(value as number[])}
              />
            </div>
            <span className="w-1/6 text-left">{priceFilter[1]}</span>
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
        ) : menus.filter((menu) => menu).length < menuNames.length &&
          visibleMenuCount < menuNames.length ? (
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
