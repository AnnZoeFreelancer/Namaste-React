import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
    console.log("body-filteredRestaurants,", filteredRestaurants);
  }, []);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.931948400167405&lng=80.1345556229353&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, Please check your internet Connection</h1>;
  }

  //console.log("render");
  //early return(not render component)
  if (!allRestaurants) return null;
  // if(filteredRestaurants?.length===0) return <h1>No Restaurant match your filter</h1>
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {console.log("belowshimmer-filteredRestaurants,", filteredRestaurants)}

      <div className="inline-block text-center my-0 mx-auto w-full">
        <input
          type="text"
          className="mt-5 rounded-md h-12 w-10/12 border ring-offset-1 ring-offset-slate-50"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="h-12 rounded-md w-1/12 ml-2 border ring-offset-1 ring-offset-gray-50 "
          onClick={() => {
            //filter data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-between pt-10 my-10 mx-20 rounded-md border border-solid ring-offset-1 ring-offset-purple-50">
        {console.log("CARD-FILTERED REST", filteredRestaurants)}

        {filteredRestaurants.length == 0 ? (
          <h1>No restaurant available! </h1>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
