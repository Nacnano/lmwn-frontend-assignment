import { Restaurant } from "../common/types";
import useRestaurant from "../hooks/useRestaurant";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
}

const RestaurantCard = ({ id }: RestaurantCardProps) => {
  const restaurant = useRestaurant(id) as Restaurant;

  if (!restaurant) {
    return null;
  }

  const { name, coverImage } = restaurant;

  return (
    <Link to={`/${id}`} className="border p-4 rounded-md hover:bg-gray-200">
      {coverImage ? (
        <img
          src={coverImage}
          alt={name}
          className="mb-4 rounded-md w-full h-32 object-cover"
        />
      ) : (
        <div className="bg-gray-100 rounded-md w-full h-32 flex justify-center items-center">
          No Image
        </div>
      )}
      <h2 className="text-xl font-semibold">{name}</h2>
    </Link>
  );
};

export default RestaurantCard;
