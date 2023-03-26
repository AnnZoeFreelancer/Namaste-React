import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantDetails = () => {
  //to read a dynamic url params
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  console.log(restaurant);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <RestaurantInfo {...restaurant?.info} />
      <RestaurantMenu {...restaurant?.groupedCards} />
    </div>
  );
};

export default RestaurantDetails;
