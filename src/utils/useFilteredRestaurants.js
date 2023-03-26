import { FETCH_RESTAURANTS_URL } from "../constants";
import { useState, useEffect } from "react";
const useFilteredRestaurants = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    //API call
    filterRestaurants();
  }, []);

  async function filterRestaurants() {
    try {
      const data = await fetch(FETCH_RESTAURANTS_URL);
      const json = await data.json();
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  return filteredRestaurants;
};
export default useFilteredRestaurants;
