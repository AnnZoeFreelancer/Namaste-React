import { useState } from "react";
import RestaurantDish from "./RestaurantDish";
const RestaurantItemCategory = (itemCategory) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-6 text-gray-800 font-extrabold text-xl">
          {itemCategory?.title}({itemCategory?.itemCards.length})
        </h1>
        {show ? (
          <>
            <button
              onClick={() => {
                setShow(false);
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
              setShow(true);
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
      {show && (
        <div id={itemCategory?.customid}>
          <ul>
            {itemCategory?.itemCards?.map((dish, index) => {
              return (
                <div key={index}>
                  <RestaurantDish {...dish?.card?.info} />
                </div>
              );
            })}
          </ul>
        </div>
      )}
      <div className="border-8 border-solid ring-offset-8 ring-offset-gray-100 h-px my-5 mx-0"></div>
    </div>
  );
};
export default RestaurantItemCategory;
