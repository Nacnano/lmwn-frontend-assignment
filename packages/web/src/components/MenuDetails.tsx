import { useState } from "react";
import { Menu, MenuType, MenuItemOption } from "../common/types";
import useMenu from "../hooks/useMenu";
import MenuModal from "./MenuModal";

interface MenuDetailsProps {
  menuName: string;
}

const MenuDetails = ({ menuName }: MenuDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menu = useMenu({ menuName, type: MenuType.Full }) as Menu;
  if (!menu) {
    return null;
  }

  const inStock = menu.totalInStock - menu.sold;
  const handleModal = () => {
    if (inStock === 0) return;
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <>
      <div
        className={`border p-4 rounded-md mb-4  transition flex flex-col items-start justify-between
        ${inStock ? "hover:cursor-pointer hover:shadow-lg hover:bg-gray-50 shadow-md" : "z-0 cursor-default"}`}
        onClick={handleModal}
      >
        <div className={` ${inStock === 0 ? "opacity-50" : ""}`}>
          <h2 className="text-xl font-bold mb-2">{menu?.name}</h2>
          <p className="text-gray-700">{menu?.fullPrice}฿</p>
          {menu?.thumbnailImage && (
            <img
              src={menu?.thumbnailImage}
              alt={menu?.name}
              className="mt-2 rounded-md"
              style={{ maxWidth: "100%" }}
            />
          )}
          {menu?.discountedPercent > 0 && (
            <p className="mt-2 text-green-600">
              Discount: {menu?.discountedPercent}% off
            </p>
          )}

          {menu?.discountedTimePeriod && (
            <p className="text-gray-600">
              Discount valid from {menu?.discountedTimePeriod.begin} to{" "}
              {menu?.discountedTimePeriod.end}
            </p>
          )}

          {menu?.options && (
            <div>
              <h3 className="text-md font-medium my-2">See Options</h3>
            </div>
          )}
        </div>

        <div>
          {inStock ? (
            <p className="mt-2 text-gray-600"> {inStock} Left</p>
          ) : (
            <div className="bg-red-100 text-red-300 font-bold text-xl py-3 rounded-md">
              <p className="text-center">OUT OF ORDER</p>
            </div>
          )}
        </div>

        <MenuModal isOpen={isModalOpen} menu={menu} />
      </div>
    </>
  );
};

export default MenuDetails;
