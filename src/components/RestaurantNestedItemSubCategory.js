import RestaurantDish from "./RestaurantDish";
import { useState } from "react";
const RestaurantNestedItemSubCategory = (groupedSubCategory) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-gray-800 text-lg font-normal">
          {groupedSubCategory?.title}({groupedSubCategory?.itemCards?.length})
        </h2>
        {isVisible ? (
          <>
            <button
              onClick={() => {
                setIsVisible(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="border border-solid ring-offset-1 ring-offset-gray-100 h-px my-5 mx-0"></div>
      {isVisible && (
        <ol>
          {groupedSubCategory?.itemCards?.map((dish, index) => (
            <div key={index}>
              <RestaurantDish {...dish?.card?.info} />
              {/* <p>{dish?.card?.info?.description}</p> */}
            </div>
          ))}
        </ol>
      )}
      <div className="border-8 border-solid ring-offset-8 ring-offset-gray-100 h-px my-5 mx-0"></div>
    </>
  );
};

export default RestaurantNestedItemSubCategory;
