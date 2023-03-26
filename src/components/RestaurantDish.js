debugger;
const RestaurantDish = (dish) => {
  return (
    <div>
      <li>{dish.name}</li>
      {console.log(dish)}
    </div>
  );
};
export default RestaurantDish;
