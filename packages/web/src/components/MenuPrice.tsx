import { Menu } from "../common/types";

interface MenuPriceProps {
  menu: Menu;
}
const MenuPrice = ({ menu }: MenuPriceProps) => {
  const { discountedPercent, discountedTimePeriod, fullPrice } = menu;

  const calculateDiscountedPrice = (): number => {
    if (discountedPercent > 0 && discountedTimePeriod) {
      const currentTime = new Date();
      const beginTime = new Date(
        currentTime.toDateString() + " " + discountedTimePeriod.begin
      );
      const endTime = new Date(
        currentTime.toDateString() + " " + discountedTimePeriod.end
      );

      if (currentTime >= beginTime && currentTime <= endTime) {
        const discountMultiplier = 1 - discountedPercent / 100;
        return fullPrice * discountMultiplier;
      }
    }

    return fullPrice;
  };

  const finalPrice = calculateDiscountedPrice();

  return (
    <>
      <p className="text-gray-700 text-left text-xl">
        {menu.fullPrice === finalPrice ? (
          <span>{menu.fullPrice}฿</span>
        ) : (
          <div>
            <span className="line-through text-gray-400">
              {menu.fullPrice}฿
            </span>
            <span className="text-green-600">{finalPrice}฿</span>
          </div>
        )}
      </p>
    </>
  );
};

export default MenuPrice;
