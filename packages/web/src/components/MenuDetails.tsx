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

  const inStock = menu.totalInStock - menu.sold;

  return (
    <>
      <div
        className="border p-4 rounded-md shadow-md mb-4 hover:cursor-pointer hover:shadow-lg hover:bg-gray-25 transition"
        onClick={handleOpen}
      >
        <div className={`z-10 ${inStock === 0 ? "opacity-50" : ""}`}>
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

        <MenuModal
          isOpen={isModalOpen}
          onClose={handleClose}
          setIsModalOpen={setIsModalOpen}
          menu={menu}
        />
      </div>
    </>
  );
};

export default MenuDetails;
