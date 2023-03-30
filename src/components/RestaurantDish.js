import { MENU_ITEM_IMG_CDN_URL } from "../constants";
const RestaurantDish = (dish) => {
  return (
    <>
      <div className="dish_Container">
        <div className="dish_Details">
          <h3 className="dish_SubHeader">{dish.name}</h3>
          <h2>{dish.price ? dish.price / 100 : dish.defaultPrice / 100}</h2>
          <p className="dish_Description">{dish.description}</p>
        </div>
        <div className="dish_ImageContainer">
          {dish.imageId ? (
            <img
              className="dish_Image"
              src={MENU_ITEM_IMG_CDN_URL + dish.imageId}
            />
          ) : (
            <div>No Image Available</div>
          )}
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};
export default RestaurantDish;
