import { sidebarList } from "../data/sidebarList";
import { useState } from "react";
import CustomLink from "./CustomLink";

const MobileSidebar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50 flex flex-col items-end">
      <button
        className="bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-gray-100 text-lg font-medium
      px-4 py-2 rounded-full transition border-2 border-gray-300 shadow-sm mb-2"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        {showMobileNav ? "Close" : "Menu"}
      </button>

      {showMobileNav && (
        <div className="">
          <div className="flex flex-col items-end gap-2 mt-2">
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
      )}
    </div>
  );
};

export default MobileSidebar;
