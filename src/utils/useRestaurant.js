import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) => {
  const [restro, setRestro] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    //check with id in url 126915, 21471
    const json = await data.json();
    const menuItemList = json?.data?.cards?.find((o) => o?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const modifiedData = {
      info: json?.data?.cards[0]?.card?.card?.info,
      groupedCards: json?.data?.cards
        ?.find((o) => o?.groupedCard)
        .groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (o) => o?.card?.card?.itemCards || o?.card?.card?.categories
        ),
    };
    setRestro(modifiedData);
  }
  return restro;
};
export default useRestaurant;
