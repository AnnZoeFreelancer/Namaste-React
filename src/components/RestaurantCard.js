import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="restaurant-card-name">{name}</div>
      <div className="restaurant-card-cuisines">{cuisines.join(",")}</div>
      <div className="restaurant-card-last-mile-travel-string">
        {lastMileTravelString}
      </div>
    </div>
  );
};

export default RestaurantCard;
