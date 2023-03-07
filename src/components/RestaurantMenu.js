import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    //to read a dynamic url params
    const {resId} = useParams();
    // const params = useParams();
    // const {id} = params;
    console.log(resId); 
    const [restaurant,setRestaurant] = useState(null);
    const [restaurantMenuList, setRestaurantMenuList]= useState({});

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId=21471&submitAction=ENTER");
        const json =await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info); 
        setRestaurantMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card); 
        // setRestaurant(json?.data); 

    }
    
    return (!restaurant)? <Shimmer/>: (
       <div className="menu">
       <div>
            <h1>Restaurant id:{resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL +  restaurant.cloudinaryImageId}></img>
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
            <h3>{restaurant.avgRating}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {/* {restaurantMenuList.itemCards.map((item)=>(<li key="item.card.info.id">{item.card.info.name} </li>))} */}
                {/* {restaurantMenuList.itemCards.map((item)=>{return <li key={"item.card.info.id"+new Date().getUTCMilliseconds()}>{item.card.info.name} </li>})} */}
               
               
                {/* {restaurantMenuList.itemCards.map((item)=>{return <li key={"item.card.info.id"}>{item.card.info.name} </li>})} */}
                {restaurantMenuList?.itemCards?.map((item)=>(<li key={"item.card.info.id"}>{item?.card?.info?.name} </li>))}
            </ul>
        </div>
        </div>
        
    );
};

export default RestaurantMenu;