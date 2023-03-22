import { useState, useEffect } from "react";
export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    //check with id in url 126915, 21471
    const json = await data.json();
    console.log("restaurant: ", json);
    const menuItemList =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    const menu = menuItemList.map((item) => {
      if (item.card.card["@type"] === itemCategory || nestedItemCategory) {
        return item?.card?.card;
      }
    });
    const modifiedData = {
      info: json?.data?.cards[0]?.card?.card?.info,
      menu: menu.filter((value) => value != undefined),
      // menu:json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.item?.card?.card
    };
    setRestaurant(modifiedData);
    // setRestaurant(json?.data);
    console.log("restaurant: ", restaurant);
    //console.log("restaurant-END");

    //     fetch(
    //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId=" +
    //         resId +
    //         "&submitAction=ENTER"
    //     )
    //       .then((response) => response.json())
    //       .then((data) => {
    //         debugger;
    //         const x = data?.data?.cards[0]?.card?.card?.info;

    //         setRestaurant(x);
    //         console.log("NEWF", restaurant);
    //       });
  }
  return restaurant;
};

// export const useRestaurantMenu = (resId)=>{
//     const [restaurantMenuList, setRestaurantMenuList]= useState(null);
//     useEffect(()=>{
//         getRestaurantMenuInfo();
//     },[]);
//     async function getRestaurantMenuInfo(){
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId="+resId+"&submitAction=ENTER");
//         //check with id in url 126915, 21471
//         const json =await data.json();
//         console.log(json);
//         setRestaurantMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);

//         // setRestaurant(json?.data);
//         console.log("restaurantMenuList: ",restaurantMenuList);
//         console.log("restaurantMenuList-END");
//     }
//     return restaurantMenuList;

// }
export default useRestaurant;
