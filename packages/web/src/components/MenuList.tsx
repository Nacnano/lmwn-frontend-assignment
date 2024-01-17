import React, { useState, useEffect, useRef } from "react";
import MenuDetails from "./MenuDetails";

interface MenuListProps {
  menuNames: string[];
}

const MenuList = ({ menuNames }: MenuListProps) => {
  const [visibleMenuCount, setVisibleMenuCount] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleMenuCount((prevCount) => prevCount + 3);
        }
      },
      { threshold: 0.5 }
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
    <div className="px-4">
      <div
        ref={containerRef}
        className="mt-4 pt-8 px-4 border-t-2 border-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4">Menu List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuNames.slice(0, visibleMenuCount).map((menuName, index) => (
            <MenuDetails key={index} menuName={menuName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
