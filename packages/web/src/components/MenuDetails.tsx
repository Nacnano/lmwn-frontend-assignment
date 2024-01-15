import { useState } from "react";
import { Menu, MenuType } from "../common/types";
import useMenu from "../hooks/useMenu";
import MenuModal from "./MenuModal";

interface MenuDetailsProps {
  menuName: string;
}

const MenuDetails = ({ menuName }: MenuDetailsProps) => {
  const menu = useMenu({ menuName, type: MenuType.Full }) as Menu;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  if (!menu) {
    return null;
  }

  const isOutofOrder = menu.totalInStock - menu.sold === 0;

  return (
    <>
      <div
        className="border p-4 rounded-md shadow-md mb-4"
        onClick={handleOpen}
      >
        {isOutofOrder && (
          <div className="relative  ">
            <div className="inset-5 bg-gray-200 text-red-500 font-bold">
              <p className="text-center">OUT OF ORDER</p>
            </div>
          </div>
        )}
        <div className={isOutofOrder ? "opacity-50" : ""}>
          <h2 className="text-xl font-bold mb-2">{menu?.name}</h2>
          <p className="text-gray-700">Price: ${menu?.fullPrice}</p>
          {menu?.thumbnailImage && (
            <img
              src={menu?.thumbnailImage}
              alt={menu?.name}
              className="mt-2 rounded-md"
              style={{ maxWidth: "100%" }}
            />
          )}
          {/* {menu?.options && (
            <div className="mt-2">
              <h3 className="text-lg font-bold mb-2">Options:</h3>
              <ul>
                {menu.options.map((option, index) => (
                  <li key={index}>
                    <span className="font-bold">{option.label}:</span>{" "}
                    {option.choices.map((choice, choiceIndex) => (
                      <span key={choiceIndex}>{choice.label}</span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
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
          <p className="mt-2 text-gray-600">
            Sold: {menu?.sold} | Total in Stock: {menu?.totalInStock}
          </p>
        </div>
        <MenuModal isOpen={isModalOpen} onClose={handleClose} menu={menu} />
      </div>
    </>
  );
};

export default MenuDetails;
