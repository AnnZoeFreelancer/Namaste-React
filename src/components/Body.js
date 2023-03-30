import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAllRestaurant from "../utils/useAllRestaurant";
import useFilteredRestaurants from "../utils/useFilteredRestaurants";

const Body = () => {
  // const fData = useAllRestaurant();
  // console.log("fdata", fData);
  // const allRestaurants = fData.allRestaurants; // useAllRestaurant();
  // // const filteredRestaurants = fData.filteredRestaurants; // useAllRestaurant();
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log("fDAta.filteredREstaurants", fData.filteredRestaurants);
  // let a = 5;
  // const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   setFilteredRestaurants(fData.allRestaurants);
  // }, [a]);
  a = 7;
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

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
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

      <div className="restaurant-list">
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
