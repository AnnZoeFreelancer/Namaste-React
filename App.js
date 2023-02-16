import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
/*
     Header
            -Logo
            -Navb Items(RightSide)
            -Cart
        Body
            -Search bar
            -Restaurant List
                -RestaurantCard
                    -Image
                    -Name
                    -Rating
                    -Cuisines       
        Footer
            -Links
            -copyright
*/
const Title=()=>{
    return(
    <img alt="logo" className="logo" src="https://d2x91cbkpb2oh5.cloudfront.net/c8880e38e4fc37c8bd8c37610c492e5c_scale190x150.jpg"/>
    )
}
const Header = () =>{
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}
//Hardcoded RestaurantCard
/*
const RestaurantCard =()=>{
    return(
        <div className="card">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVlZiUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            <h2>Burger King</h2>
            <h3>Burgers, American</h3>
            <h4>4.2 stars</h4>
        </div>
    )
}
*/
//Hardcoded restaurantCard 

/*
const burgerKing={
    name:"Burger King",
    image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVlZiUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    cuisines:["Burger","American"],
    rating:"4.2"
}

const RestaurantCard=()=>{
    return(
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>
                {burgerKing.cuisines.join(",") /*join will join items in an array*/
 /*            } 
           </h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    )
}
*/


const restaurantList=
[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "21471",
          "name": "Dindigul Thalappakatti",
          "uuid": "cb9ed618-8598-42fa-a457-eaab7feaf0d3",
          "city": "8",
          "area": "Selaiyur",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "afrt3btwutvcjpdrod6u",
          "cuisines": [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 60000,
          "costForTwoString": "₹600 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 1.7000000476837158,
          "slugs": {
            "restaurant": "dindigul-thalappakatti-selaiyur-tambaram",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "Old No. 104, New No. 26, Kadaperi Village, Tambaram, Chennai, Tamil Nadu 600045, India",
          "locality": "Selaiyur",
          "parentId": 332,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT100 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹100 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2600,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 2600,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2600",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5958812~p=25~eid=00000186-5a9c-6509-013c-00c100a11951",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "21471",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 1.7000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.8",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "27411",
          "name": "Pizza Hut",
          "uuid": "0490ce1f-8604-490d-b6a2-c830453af94c",
          "city": "8",
          "area": "Chrompet",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "emwrpwdkogu3zallo0z5",
          "cuisines": [
            "Pizzas"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 2,
          "slugs": {
            "restaurant": "pizza-hut-chrompet-tambaram",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "Number 05, GST Road, Kamakshi Colony, Chrompet, Tambram Sanatorium,Tamil Nadu",
          "locality": "GST Road",
          "parentId": 721,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2600,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 2600,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2600",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "27411",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "lastMileTravel": 2,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "326252",
          "name": "Yaa Mohaideen Briyani (Old Shop)",
          "uuid": "4079d6bb-58be-406b-8648-275614691748",
          "city": "8",
          "area": "Pallavaram",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "mvayp9nnrd2sfxnxzd9c",
          "cuisines": [
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 60000,
          "costForTwoString": "₹600 FOR TWO",
          "deliveryTime": 41,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 5.599999904632568,
          "slugs": {
            "restaurant": "yaa-mohaideen-briyani-old-shop-chrompet-chrompet",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "NO 4 15B NA Chruch Road Pallavaram CONTONEMENT PALLAVARAM Tamil Nadu 600043",
          "locality": "Chrompet",
          "parentId": 12131,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "326252",
            "deliveryTime": 41,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 5.599999904632568,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "615089",
          "name": "Cake House",
          "uuid": "e5ec9590-d463-4d49-8c15-c8d6d6ee8d8d",
          "city": "8",
          "area": "Perumbakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "tsdwrl0eovfd9tooackt",
          "cuisines": [
            "Bakery"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "slaString": "42 MINS",
          "lastMileTravel": 8.5,
          "slugs": {
            "restaurant": "cake-house-perumbakkam-perumbakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "NO.2/260, 1ST MAIN ROAD, VALLUVAR NAGAR, SITTALAPAKKAM, CHENNAI, ST.Thomas Mount block Ward-190, Kancheepuram, Tamil Nadu-600131",
          "locality": "Valluvar Nagar",
          "parentId": 8539,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT100 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹100 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 7900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 7900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "7900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "615089",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "lastMileTravel": 8.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.7",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "437506",
          "name": "BARATH UNAVAGAM",
          "uuid": "fc3f2e80-d555-4b2f-b7e8-39a9729d66e2",
          "city": "8",
          "area": "Rajakilpakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "kicjaedjuwm5bxrhyn3u",
          "cuisines": [
            "South Indian",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "barath-unavagam-perumbakkam-perumbakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "Plot no.17, VGP SRINIVAS NAGAR, RAJAKILPAKKAM, SEMBAKKAM, CHENNAI-600126,KANCHEEPURAM, TAMIL NADU-600126",
          "locality": "Vgp Srinivas Nagar",
          "parentId": 264009,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹100 | Use code GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹100 | Use code GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3400,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5837580~p=22~eid=00000186-5a9c-6509-013c-00c000a11670",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "437506",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.0",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
]
/* Single data added
const RestaurantCard=()=>{
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantList[0].data?.cloudinaryImageId}/>
            <h2>{restaurantList[0].data?.name}</h2> 
            <h3>{restaurantList[0].data?.cuisines.join(",")}</h3>
            <h4>{restaurantList[0].data?.lastMileTravelString} minutes</h4>
        </div>
    )
}*/
//Dynamic data with props
// const RestaurantCard=(props)=>{
// const {name,cuisines, cloudinaryImageId, lastMileDistance} = restaurant;
//     console.log(props);
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.data?.cloudinaryImageId}/>
//             <h2>{props.restaurant.data?.name}</h2> 
//             <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
//             <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
//         </div>
//     )
// }

//dynamic data using destructuing way
/*
const RestaurantCard=({restaurant})=>{
    const {name,cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data;
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2> 
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
    }
const Body=()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard restaurant={restaurantList[0]}/>
            <RestaurantCard restaurant={restaurantList[1]}/>
            <RestaurantCard restaurant={restaurantList[2]}/>
            <RestaurantCard restaurant={restaurantList[3]}/>
            <RestaurantCard restaurant={restaurantList[4]}/>
        </div>
    )
}
*/
//Another way of destructuring
const RestaurantCard=({name,cuisines, cloudinaryImageId, lastMileTravelString}) =>{
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2> 
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}
/*
const Body=()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard 
            name={restaurantList[0].data.name} 
            cuisines={restaurantList[0].data.cuisines}
            lastMileTravelString={restaurantList[0].data.lastMileTravelString}
            cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
            />
            <RestaurantCard 
            name={restaurantList[1].data.name} 
            cuisines={restaurantList[1].data.cuisines}
            lastMileTravelString={restaurantList[1].data.lastMileTravelString}
            cloudinaryImageId={restaurantList[1].data.cloudinaryImageId}
            />
             <RestaurantCard 
            name={restaurantList[2].data.name} 
            cuisines={restaurantList[2].data.cuisines}
            lastMileTravelString={restaurantList[2].data.lastMileTravelString}
            cloudinaryImageId={restaurantList[2].data.cloudinaryImageId}
            />
             <RestaurantCard 
            name={restaurantList[3].data.name} 
            cuisines={restaurantList[3].data.cuisines}
            lastMileTravelString={restaurantList[3].data.lastMileTravelString}
            cloudinaryImageId={restaurantList[3].data.cloudinaryImageId}
            />
             <RestaurantCard 
            name={restaurantList[4].data.name} 
            cuisines={restaurantList[4].data.cuisines}
            lastMileTravelString={restaurantList[4].data.lastMileTravelString}
            cloudinaryImageId={restaurantList[4].data.cloudinaryImageId}
            />
        </div>
    )
}
*/

//Another way of writing instead of above code using spread operator
// const Body=()=>{
//     return(
//        <div className="restaurant-list">
//             <RestaurantCard {...restaurantList[0].data}/>
//             <RestaurantCard {...restaurantList[1].data}/>
//             <RestaurantCard {...restaurantList[2].data}/>
//             <RestaurantCard {...restaurantList[3].data}/>
//             <RestaurantCard {...restaurantList[4].data}/>
            
//        </div>
//     )
// }

//Another way to simplify using Map.
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

const Footer=()=>{
    return(
        <h4>Footer</h4>
    )
}

const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

//Inline Styling in React
const jsx =(
    <div className="jsx" style={{backgroundColor:"red",}}>
        <h1>JSX</h1>
        <h1>Second JSX</h1>
    </div>
)
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
// const root = ReactDOM.createRoot(document.getElementById("root"));

