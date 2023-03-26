import RestaurantDish from "./RestaurantDish";
const RestaurantCategory = (category) => {
  return (
    <div>
      <h1>{category.title}</h1>
      {category.categories?.map((groupedSubCategory, index) => (
        <div key={index}>
          <h2>{groupedSubCategory.title}</h2>
          <ol>
            {groupedSubCategory?.itemCards?.map((dish, index) => (
              <div key={index}>
                <RestaurantDish {...dish.card.info} />
                <p>{dish.card.info.description}</p>
              </div>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};
export default RestaurantCategory;
