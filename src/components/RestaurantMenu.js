import RestaurantNestedItemCAtegory from "./RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantItemCategory";
const RestaurantMenu = (restaurantMenu) => {
  const itemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const nestedItemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
  debugger;
  console.log(restaurantMenu);
  return (
    <div>
      <div className="restaurant_menu">
        {Object.values(restaurantMenu)?.map((groupedCards, index) => (
          <div key={index}>
            {groupedCards?.card?.card["@type"] === nestedItemCategory ||
            itemCategory ? (
              <div>
                {groupedCards?.card?.card?.categories ? (
                  <RestaurantNestedItemCAtegory {...groupedCards?.card?.card} />
                ) : (
                  <RestaurantItemCategory {...groupedCards?.card?.card} />
                )}
              </div>
            ) : (
              <div>Fail</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
