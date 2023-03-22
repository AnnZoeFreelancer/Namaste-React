import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState(""); 

    // useEffect(()=>{
    //     console.log("render");
    // },[searchText])

    // useEffect(()=>{
    //     console.log("render");
    // },[restaurants])

    // useEffect(()=>{
    //     console.log("useEfect");
    // },[])
    // console.log("render");

    useEffect(()=>{
        //API call
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.931948400167405&lng=80.1345556229353&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    console.log("render");
    //early return(not render component)
    if(!allRestaurants) return null;
    // if(filteredRestaurants?.length===0) return <h1>No Restaurant match your filter</h1>
    return allRestaurants.length===0?(<Shimmer/>):
    (
       <>
        <div className="search-container">
            <input 
                type="text" 
                className="search-input" 
                placeholder="search" 
                value={searchText}
                onChange= {(e)=>setSearchText(e.target.value)}
            />
           
             <button 
                className="search-btn"
                onClick={()=>{
                    //filter data
                    const data= filterData(searchText,allRestaurants);
                    //update the state - restaurants
                    setFilteredRestaurants(data);
                }}>
                Search
            </button>
        </div>

        <div className="restaurant-list">
                {filteredRestaurants.map((restaurant)=>{
                return  (
                <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
                );
            })}
            
        </div>
       </>
    )
}

export default Body;