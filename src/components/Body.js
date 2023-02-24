import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

function filterData(searchText,restaurants){
    // return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
     
    const filterData=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
     return filterData;
}
// debugger;
//     const filterData=restaurants.filter(function(r){
//         //debugger;
//         console.log(r.data.name);
//         return r.data.name.includes(searchText);
//     });
//     return filterData;    
// }

const Body=()=>{
    // const searchTxt = "KFC"; //JS variable
    const [restaurants,setRestaurants] = useState(restaurantList);

    const [searchText,setSearchText] = useState(""); //Local state variable in react
    // const searchvar = useState();
    // const [searchText,setSearchText] = searchvar;
    //const searctext; in JS is similar to const [searchText,setSearchText] = useState(); in react
    //const searchtext="hello" in JS is similar to const [searchText, setSearchText] = useState("hello");
    // const [searchClicked,setSearchClicked]= useState("false"); 
    return(
       <>
        <div className="search-container">
            <input 
                type="text" 
                className="search-input" 
                placeholder="search" 
                value={searchText}
                // onChange={(e)=>console.log(e.target.value)}
                // onChange={(e)=>searchTxt=e.target.value}
                onChange= {(e)=>setSearchText(e.target.value)}
            />
           
             <button 
                className="search-btn"
                onClick={()=>{
                    //filter data
                    const data= filterData(searchText,restaurants);
                    //update the state - restaurants
                    setRestaurants(data);
                }}>
                Search
            </button>
        </div>

        <div className="restaurant-list">
                {restaurants.map((restaurant)=>{
                return  <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                //no key<<index key<<unique key 

            })}
            
        </div>
       </>
    )
}

export default Body;