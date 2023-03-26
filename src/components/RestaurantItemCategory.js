import RestaurantDish from "./RestaurantDish";
const RestaurantItemCategory = (itemCategory) => {
  return (
    <div>
      <h1>{itemCategory?.title}</h1>
      <div>
        <ul>
          {itemCategory?.itemCards?.map((dish, index) => {
            return (
              <div key={index}>
                <RestaurantDish {...dish.card.info} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantItemCategory;
