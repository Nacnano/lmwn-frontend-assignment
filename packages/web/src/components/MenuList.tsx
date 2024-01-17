import { useState, useEffect, useRef } from "react";
import MenuDetails from "./MenuDetails";
import { MoonLoader } from "react-spinners";
import useMenu from "../hooks/useMenu";
import { Menu, MenuType } from "../common/types";

interface MenuListProps {
  menuNames: string[];
}

const MenuList = ({ menuNames }: MenuListProps) => {
  const menus = menuNames.map((menuName) => {
    return useMenu({ menuName, type: MenuType.Full }) as Menu;
  });

  const [visibleMenuCount, setVisibleMenuCount] = useState(12);
  const containerRef = useRef<HTMLDivElement>(null);
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
        <h2 className="text-2xl font-bold mb-4">Menu List</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menus.slice(0, visibleMenuCount).map((menu, index) => (
            <MenuDetails key={index} menu={menu} />
          ))}
        </div>

        {visibleMenuCount < menuNames.length ? (
          <div
            ref={containerRef}
            className="pt-5 pb-40 flex items-center justify-center"
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
