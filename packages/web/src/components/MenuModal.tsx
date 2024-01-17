import { Menu, MenuItemOption } from "../common/types";
import MenuPrice from "./MenuPrice";

interface MenuModalProps {
  isOpen: boolean;
  menu: Menu | null;
}

const MenuModal = ({ isOpen, menu }: MenuModalProps) => {
  if (!isOpen || !menu) {
    return null;
  }

  return (
    <div className="z-20 fixed w-full h-full inset-0 flex items-center justify-center cursor-default">
      <div className="z-30 absolute inset-0 bg-gray-800 opacity-60" />
      <div className="z-50 bg-white rounded-md w-4/5 lg:w-1/3 h-5/6">
        {menu.largeImage && (
          <img
            src={menu.largeImage}
            alt={menu.name}
            className="rounded-t-md w-full h-1/4 object-cover"
          />
        )}
        <div className="p-4 flex flex-col justify-around items-start gap-2 h-3/4">
          <div className="w-full h-5/6">
            <h2 className="text-3xl font-bold mb-4">{menu.name}</h2>
            <MenuPrice menu={menu} />

            {menu.options && menu.options.length > 0 ? (
              <div className="h-1/2 md:h-3/5 mt-2">
                <h3 className="text-xl font-semibold mb-2">Options:</h3>
                <div className="mb-2 h-full overflow-y-auto bg-gray-50 rounded-md p-1">
                  <div className="list-disc pl-4">
                    {menu.options.map(
                      (option: MenuItemOption, index: number) => (
                        <div key={index} className="mb-2">
                          <h4 className="text-lg font-medium text-gray-800">
                            {option.label}
                          </h4>
                          <ul className="list-disc pl-4">
                            {option.choices.map((choice, choiceIndex) => (
                              <li key={choiceIndex} className="text-gray-600">
                                {choice.label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="text-xl font-medium my-2"> No option</h3>
            )}
          </div>

          <div className="w-full">
            <div className="text-gray-800 opacity-60 text-center ">
              Press anywhere to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
