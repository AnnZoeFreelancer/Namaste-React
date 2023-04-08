import RestaurantNestedItemSubCategory from "./RestaurantNestedItemSubCategory";
const RestaurantCategory = (category) => {
  return (
    <div>
      <h1 className="mb-6 text-gray-800 font-extrabold text-xl">
        {category?.title}
      </h1>
      {category?.categories?.map((groupedSubCategory, index) => (
        <div key={index}>
          <RestaurantNestedItemSubCategory {...groupedSubCategory} />
        </div>
      ))}
    </div>
  );
};
export default RestaurantCategory;
