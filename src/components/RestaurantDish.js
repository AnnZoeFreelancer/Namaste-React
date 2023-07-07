import { useDispatch } from "react-redux";
import { MENU_ITEM_IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
const RestaurantDish = (dish) => {
  const dispatch = useDispatch();
  const addFoodItem = (dish) => {
    dispatch(addItem(dish));
  };
  return (
    <>
      <div className="flex justify-between  mx-auto pb-4">
        <div className="min-w-[118px]">
          <h3
            data-testid="menu"
            className="mr-1 text-xl font-medium text-gray-800 mt-1 break-words"
          >
            {dish.name}
          </h3>
          <h2>₹{dish.price ? dish.price / 100 : dish.defaultPrice / 100}</h2>
          <p className="mt-3 break-words w-9/12">{dish.description}</p>
        </div>
        <div className="relative">
          {dish.imageId ? (
            <div>
              <img
                className="w-[118px] h-[96px] z-20 rounded-md "
                src={MENU_ITEM_IMG_CDN_URL + dish.imageId}
              />
            </div>
          ) : (
            <div>No Image Available</div>
          )}
          <button
            data-testid="addBtn"
            className="bg-green-50"
            onClick={() => addFoodItem(dish)}
          >
            Add
          </button>
        </div>
      </div>
      <hr className="h-px my-4 border-b-slate-50 border-solid ring-offset-1"></hr>
    </>
  );
};
export default RestaurantDish;
