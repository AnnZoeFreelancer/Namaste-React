import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
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

      <div className="flex justify-center mt-5  text-center my-0 mx-auto w-2/3">
        <input
          type="text"
          className="rounded-md h-12 w-10/12  pl-4 border ring-offset-1 ring-offset-slate-50"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="h-12 rounded-md w-1/12 ml-2 "
          onClick={() => {
            //filter data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({ name: e.target.value, email: "newemail@gmail.com" })
          }
        />
      </div>

      <div className="flex flex-wrap justify-between pt-10 my-10 mx-20">
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
