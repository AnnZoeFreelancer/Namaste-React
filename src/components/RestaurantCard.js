import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  deliveryTime,
  costForTwo,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className=" w-64 mb-20">
      <img className="w-full h-40" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="mt-3 text-base font-medium break-words">{name}</div>
      <div className="mt-1 text-xs over break-words text-gray-600">
        {cuisines.join(",")}
      </div>
      <div className=" flex  justify-between font-normal mt-4 text-xs text-gray-700 ">
        <div className="text-white  bg-green-600 flex  justify-evenly pr-2 pl-2 pb-1 pt-1 font-bold mb-2 border-b border-solid ring-offset-purple-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="mr-1 h-4 w-4 text-warning"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          {avgRating}
        </div>
        <span>.</span>
        <span>{deliveryTime} MINS</span>
        <span>.</span>
        <span>₹{costForTwo / 100} FOR TWO</span>
      </div>
      <div className="pt-3 mt-3 text-orange-800 text-center font-semibold border-t border-solid ring-offset-gray-300">
        <span>{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
