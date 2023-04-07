import { IMG_FEE_CDN_URL } from "../constants";
const RestaurantInfo = (restaurant) => {
  console.log("info", restaurant);
  return (
    <div className="text-sm text-gray-600 max-w-[800px] min-h-[200px] mt-2 mx-auto mb-0">
      <div className="rounded-md text-center p-2 float-right ml-8 border ring-offset-1 border-solid ring-offset-purple-50">
        <div className="text-green-600 pb-2 font-bold mb-2 block border-b border-solid ring-offset-purple-50">
          {restaurant.avgRating}
        </div>

        <div className="text-gray-600 font-semibold text-sm font-sans">
          {restaurant.totalRatingsString}
        </div>
      </div>
      {/* <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img> */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {restaurant.name}
      </h2>
      <div className="text-sm text-gray-600 overflow-hidden mb-1 whitespace-no-wrap">
        {restaurant?.cuisines}
      </div>
      <div>
        {restaurant.areaName},{restaurant?.sla?.lastMileTravelString}
      </div>
      <div className="flex mt-5">
        <img className="float-right mr-2 h-4 w-4" src={IMG_FEE_CDN_URL} />
        <span className="flex-grow">{restaurant?.feeDetails?.message}</span>
      </div>
      <hr className="mt-5 border border-dashed ring-offset-1 ring-offset-slate-50"></hr>

      <div className="flex text-gray-800 text-sm font-bold my-5 mx-0">
        <svg
          className="align-bottom mr-2"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            r="8.35"
            transform="matrix(-1 0 0 1 9 9)"
            stroke="#3E4152"
            stroke-width="1.3"
          ></circle>
          <path
            d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
            fill="#3E4152"
          ></path>
        </svg>
        <span className="mr-5">{restaurant?.sla?.slaString}</span>
        <svg
          className="align-bottom mr-2"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            cx="9"
            cy="9"
            r="8.25"
            stroke="#3E4152"
            strokeWidth="1.5"
          ></circle>
          <path
            d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
            fill="#3E4152"
          ></path>
        </svg>
        <span>{restaurant.costForTwoMessage}</span>
      </div>
      {/* <div>{restaurant.groupedCards[0].card.card.categories[0].title}</div> */}
    </div>
  );
};

export default RestaurantInfo;
