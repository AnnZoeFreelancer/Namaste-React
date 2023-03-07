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
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId="+resId+"&submitAction=ENTER");
        //check with id in url 126915, 21471
        const json =await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info); 
        setRestaurantMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card); 
        // setRestaurant(json?.data); 

    }
    
    return (!restaurant)? <Shimmer/>: (
       <div className="menu">
       <div>
            <div>Restaurant id:{resId}</div>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL +  restaurant.cloudinaryImageId}></img>
            <div>{restaurant.area}</div>
            <div>{restaurant.city}</div>
            <div>{restaurant.costForTwoMessage}</div>
            <div>{restaurant.avgRating}</div>
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