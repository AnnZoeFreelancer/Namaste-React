export function filterData(searchText,restaurants){
    // return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
    const filterData=restaurants.filter((restaurant)=>restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
     return filterData;
}
 