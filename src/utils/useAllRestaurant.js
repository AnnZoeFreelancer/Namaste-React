import { FETCH_RESTAURANTS_URL } from "../constants";
import { useState, useEffect } from "react";

const useAllRestaurant = () => {
  const fData = {
    allRestaurants: [],
    filteredRestaurants: [],
  };
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(FETCH_RESTAURANTS_URL);
      const json = await data.json();
      fData.allRestaurants = json?.data?.cards[2]?.data?.data?.cards;
      fData.filteredRestaurants = fData.allRestaurants;
      setAllRestaurants(fData);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("HookallRestaurant", allRestaurants);
  return fData;
};
export default useAllRestaurant;
