import React, { useState, useEffect, useRef } from "react";
import MenuDetails from "./MenuDetails";
import { MoonLoader } from "react-spinners";
import useMenu from "../hooks/useMenu";
import { Menu, MenuType } from "../common/types";

interface MenuListProps {
  menuNames: string[];
}

const MenuList = ({ menuNames }: MenuListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleMenuCount, setVisibleMenuCount] = useState(12);
  const containerRef = useRef<HTMLDivElement>(null);

  menuNames = [...new Set(menuNames)];
  const filteredMenus = menuNames
    .map((menuName) => useMenu({ menuName, type: MenuType.Full }) as Menu)
    .filter(
      (menu) =>
        menu && menu.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => {
              handleSearchBarChange(e);
            }}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
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
        ) : visibleMenuCount < menuNames.length ? (
          <div
            className="pt-5 pb-40 flex items-center justify-center"
            ref={containerRef}
          >
            <MoonLoader size={40} />
          </div>
        ) : (
          <h3 className="font-medium text-2xl text-center py-5">
            End of the Menu
          </h3>
        )}
      </div>
    </div>
  );
};

export default MenuList;
