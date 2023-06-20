import { MENU_ITEM_IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className=" w-64 mb-20 p-5 m-5">
      <img className="w-full h-40" src={MENU_ITEM_IMG_CDN_URL + imageId} />
      <div className="mt-3 text-base font-medium break-words">{name}</div>
      <div className="mt-1 text-xs over break-words text-gray-600">
        {price / 100}
      </div>
    </div>
  );
};

export default FoodItem;
