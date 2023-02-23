import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body=()=>{
    return(
       <div className="restaurant-list">
            {restaurantList.map((restaurant)=>{
                return  <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                //no key<<index key<<unique key 

            })}
            
       </div>
    )
}

export default Body;