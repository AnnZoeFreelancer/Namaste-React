import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  //to read a dynamic url params
  const { resId } = useParams();
  // const params = useParams();
  // const {id} = params;
  console.log(resId);
  // const [restaurant,setRestaurant] = useState(null);
  // const [restaurantMenuList, setRestaurantMenuList]= useState({});

  // useEffect(()=>{
  //     getRestaurantInfo();
  // },[]);
  // async function getRestaurantInfo(){
  //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId="+resId+"&submitAction=ENTER");
  //     //check with id in url 126915, 21471
  //     const json =await data.json();
  //     console.log(json);
  //     setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  //     setRestaurantMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);
  //     // setRestaurant(json?.data);

  // }
  const restaurant = useRestaurant(resId);
  //   const { id, name, description, price, imageId } = item?.card?.info;

  const itemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const nestedItemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
  //   const menu = restaurant.menu.map((item) => {
  //     if (item.card.card["@type"] === itemCategory || nestedItemCategory) {
  //       return item?.card?.card;
  //     }
  //   });
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <div>Restaurant id:{resId}</div>
        <h2>{restaurant.info.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
        <div>{restaurant.info.area}</div>
        <div>{restaurant.info.city}</div>
        <div>{restaurant.info.costForTwoMessage}</div>
        <div>{restaurant.info.avgRating}</div>
      </div>
      <div>
        <h1>Menu</h1>
        <div>
          {restaurant.menu?.map((menuCard, index) => (
            <div key={index}>
              {menuCard["@type"] === nestedItemCategory || itemCategory ? (
                <div>
                  <h3>Pass{menuCard["@type"]}</h3>
                  {menuCard.categories ? (
                    <div>
                      <div>CategoryPass</div>
                      <h1>{menuCard.title}</h1>
                      {menuCard.categories.map((menuCardCategories, index) => (
                        <div key={index}>
                          <div>{menuCardCategories.title}</div>
                          <div>
                            {menuCardCategories.itemCards?.map(
                              (itemx, index) => {
                                return (
                                  <div key={index}>
                                    <div>
                                      Sub Item : {itemx?.card?.info?.name}
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                          {/* <div>{itemCategory?.itemcards[0].card?.info?.name}</div> */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div>Categories Fail</div>

                      <h1>{menuCard?.title}</h1>
                      <h4>Pass{menuCard["@type"]}</h4>

                      <h2>{menuCard?.itemCards?.card?.info?.name}</h2>
                      <div>
                        {menuCard?.itemCards?.map((itemx) => {
                          return <li>ttt{itemx?.card?.info?.name}</li>;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>Fail</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
