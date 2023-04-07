import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className=" w-64 mb-20">
      <img className="w-full h-40" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="mt-3 text-base font-medium break-words">{name}</div>
      <div className="mt-1 text-xs over break-words text-gray-600">
        {cuisines.join(",")}
      </div>
      <div className="text-sm font-normal inline-block text-center">
        {lastMileTravelString}
      </div>
    </div>
  );
};

export default RestaurantCard;
