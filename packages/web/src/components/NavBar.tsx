import { navbarList } from "../data/navbarList";
import CustomLink from "./CustomLink";

const NavBar = () => {
  return (
    <div className="w-auto flex items-end gap-2 lg:p-4 fixed top-4 right-4 shadow-none">
      {navbarList.map((item, index) => (
        <CustomLink
          key={index}
          to={item.path}
          className="bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-gray-100 text-lg font-medium
        px-4 py-2 rounded-full transition border-2 border-gray-300 shadow-sm hover:shadow-md opacity-90"
        >
          {item.text}
        </CustomLink>
      ))}
    </div>
  );
};

export default NavBar;
