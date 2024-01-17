import { useState } from "react";
import { Menu, MenuType } from "../common/types";
import useMenu from "../hooks/useMenu";
import MenuModal from "./MenuModal";
import LoadingMenuDetails from "./LoadingMenuDetails";
import MenuPrice from "./MenuPrice";

interface MenuDetailsProps {
  menuName: string;
}

const MenuDetails = ({ menuName }: MenuDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menu = useMenu({ menuName, type: MenuType.Full }) as Menu;

  if (!menu) {
    return <LoadingMenuDetails />;
  }

  const inStock = menu.totalInStock - menu.sold;
  const handleModal = () => {
    if (inStock === 0) return;
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <>
      <div
        className={`border rounded-md mb-4  transition  items-start justify-between
        ${inStock ? "hover:cursor-pointer hover:shadow-lg hover:bg-gray-50 shadow-md" : "z-0 cursor-default"}`}
        onClick={handleModal}
      >
        <div
          className={`flex flex-col justify-between w-full h-full ${inStock === 0 ? "opacity-50" : ""}`}
        >
          <div>
            {menu.largeImage ? (
              <div>
                <img
                  src={menu.largeImage}
                  alt={menu.name}
                  className="mb-4 rounded-t-md w-full h-40 object-cover"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            ) : (
              <div className="bg-gray-100 rounded-md w-full h-40 flex justify-center items-center">
                No Image
              </div>
            )}
            <div className="px-4">
              <h2 className="text-xl font-bold mb-2">{menu.name}</h2>
            </div>
          </div>

          <div className="px-4 flex flex-col justify-between h-auto">
            <div className="my-2 flex justify-between items-baseline">
              <MenuPrice menu={menu} />

              {inStock ? (
                <p className="text-gray-500 text-right text-lg">
                  {inStock} Left
                </p>
              ) : (
                <div className="bg-red-100 text-red-300 font-semibold text-sm px-2 py-1 rounded-md w-1/2 flex items-center justify-center">
                  <p className="text-center">OUT OF ORDER</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <MenuModal isOpen={isModalOpen} menu={menu} />
      </div>
    </>
  );
};

export default MenuDetails;
