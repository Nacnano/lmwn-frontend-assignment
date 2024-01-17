import React, { useState, useEffect } from "react";
import { Menu, MenuType, MenuItemOption } from "../common/types";
import useMenu from "../hooks/useMenu";
import MenuModal from "./MenuModal";
import LoadingMenuDetails from "./LoadingMenuDetails";

interface MenuDetailsProps {
  menuName: string;
}

const MenuDetails = ({ menuName }: MenuDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menu = useMenu({ menuName, type: MenuType.Full }) as Menu;

  useEffect(() => {
    if (menu) {
    }
  }, [menu]);

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
            {menu?.largeImage ? (
              <div>
                <img
                  src={menu?.largeImage}
                  alt={menu?.name}
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
              <h2 className="text-xl font-bold mb-2">{menu?.name}</h2>
            </div>
          </div>

          <div className="px-4 flex flex-col justify-between h-auto">
            {menu?.discountedPercent > 0 && (
              <p className="mt-2 text-green-600">
                Discount: {menu?.discountedPercent}% off
              </p>
            )}

            {menu?.discountedTimePeriod && (
              <p className="text-gray-600">
                Discount valid from {menu?.discountedTimePeriod?.begin} to{" "}
                {menu?.discountedTimePeriod?.end}
              </p>
            )}

            <div className="my-2 flex justify-between">
              <p className="text-gray-700 text-left text-xl">
                {menu?.fullPrice}฿
              </p>

              {inStock ? (
                <p className="text-gray-600 text-right text-xl">
                  {inStock} Left
                </p>
              ) : (
                <div className="bg-red-100 text-red-300 font-semibold text-sm px-2 py-1 rounded-md">
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
