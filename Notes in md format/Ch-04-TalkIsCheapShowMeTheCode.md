# NS-Ch-04-TalkIsCheapShowMeTheCode

### Project Food Villa
#### 1. Planning

##### What does JSX use behind the scene?
##### What happens when we write JSX? 
React.createElement
##### How JSX is converted to React.createElement? 
Babel
##### What is Babel?
Compiler, Transpiler

We can build functional component.
##### What is functional component?
Its a normal function which returns a piece of JSX

##### Is it mandatory to use () in return?
No, we use only when there are multiple lines.
```
const Title = return(
    <h1 id="title" key="h2">
        Namaste React
    </h1>
) 
// Here Title is a functional component
```
```
const Title = (
    <h1 id="title" key="h2">
        Namaste React
    </h1>
)
// Here Title is a normal variable. It is a react element.
```

##### What is a react element? 
Its an object.

##### To use react element inside return
{title}

##### To use functional component inside return 
In 3 ways

`<Title></Title> ` or  `<Title/>` or  `{Title()} `

But `<Title/> `this is the most common way. It is called a self closing tag.

##### What can we write inside curly paranthesis in return {}?
We can do any piece of Javascript  inside {}

##### How to write comment inside JSX?
Similar to JS
```
//for single line comment
```
```
/* For 
 * multiline
 */
```
#####  Is JSX mandatory? 
NO not mandatory
#####  Is typescirpt mandatory? 
No Not mandatory
#####  Is ES6 mandatory?
No Not mandatory

##### Is React Mandatory?
React is a library and it does not forces us to use any of these.
Even React is not mandatory. It is ease of use.

##### We can use react just in footer. How? 
Whole react runs inside `root`. So we have to make our root as footer.


App he used is goodnotes for scribling pad.

Check screenshot. Planning diagram
##### AppLayout
We have to build our layout. structure our layout. 
```
const AppLayout =()=>{
    return (
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
    )
}
```
```
//Header.js
const Header = ()=>{
    return(
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
```
```
//Title.js
const Title =()=>{
    <a href="/"> 
        <img src="" alt="logo" className="logo"/>
    </a>//Loads home page
}
```
```
//Body.js
const Body=()=>{
    return(
        <h4>Body</h4>
    )
}
```
```
//Footer.js
const Footer=()=>{
    return(
        <h4>Footer</h4>
    )
}
```
```
//css
.header{
    display:flex;
    justify-content:space-between;
    margin:10px;
    border:1px solid black;
}
.nav-items>ul{
    list-style-type:none;
    display:flex;
}
.nav-items>ul>li{
    padding:10px;
}
.logo{
    width:100px;
}
```
```
const AppLayout=()=>{
    return(
        <Header/>
        <Body/>
        <Footer/>
    )
}//It will throw error showing it should have only one parent element.
```
##### JSX component must have only one parent
> Any piece of JSX component must have only one parent.
Wrap it inside a div.
```
const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
```

##### What to do for extra div we get in browser?
In browser we will get extra div.  To avoid this react has `react.fragment`
##### What is react fragment?
React.Fragment is a component exported by React library we imported.
##### How to use component inside JSX? 
`<React.Fragment/>`
```
const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}
```
Now we will not find the additional div in browser.
React.Fragment is like an empty tag.
React developers brought short hand for this,
` <React.Fragment></React.Fragment>` is similar to `<></>`
```
const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}
```
##### How to style react fragments?
We cannot pass any styles or attributes to react.fragment tag. 
If we want to use we have to make it a div and add style to it.

Add object to style. Object is Javascript not jsx.
```
const styleObj ={
    backgroundColor:"red",
};
```
```
//Inline Styling in react
const jsx=(
    <div style={styleObj}>
        <h1>JSX</h1>
        <h1>SecondJSX</h1>
    </div>
);
```
```
const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
```

##### Can I use React.Fragment inside React.Fragment?
Homework
```
const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}
```
```
const RestaurantCard =()=>{
    return(
        <div className="card">
            <img src=""/>
            <h2>Burger King</h2>
            <h3>Burgers, American</h3>
            <h4>4.2 stars</h4>
        </div>
    )
}
```
```
const Body =()=>{
    return (
        <div>
            <RestaurantCard/>
        </div>
    )
}
```
```
.css
.card{
    width:200px;
    border: 1px solid black;
    padding:10px;
    margin:10px;
}
.card>img{
    width:100%;
}
```
Restaurant Card is a hardcoded card. Lets use dynamic card
```
const burgerKing ={
    name:"Burger King",
    image:"img_url",
    cusines:["Burger","American"],
    rating:"4.2" 
}
```
```
const RestaurantCard =()=>{
    return(
        <div className="card">
            <img src="{burgerKing.image}"/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines}</h3>
            <h4>{burgerKing.rating} stars</h4> //It is like string interpolation in javascript
        </div>
    )
}
```
Array doesn't show comma in Burger,American
To show that, 
```
            <h3>{burgerKing.cusines.join(",")}</h3>
```
Now it shows Burger,American
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    )
}
```
```
.css
.restaurant-list{
    display:flex;
    flex-wrap:wrap;
}
```
Now lets make all the cards dynamic

Data comes in array of objects. One of the object is burgerKing.

##### To make the json readable?
Json viewer extention in browser will make json look readable. Install it in browser



##### Config Driven UI
In our data
If we have offers in few places and not in few places. We show offers in the selected areas only. 
When we build  a real life app for different locations, we control our website with config.
This config is driven by backend api
Backend controls what type of website should look in kolkata, bangalore.

check 1:42:00
```
const config=[
    {
        type:"carousel",
        cards:[
            {
                offerName:"50% off"
            },
            {
                offerName:"No delivery charge",
            }
        ]
        ]
    },
    {
        type:"restaurants",
        cards:[
            {
                name:"BurgerKing",
                image: "url",
                cusines: ["Burger","American"],
                rating:"4.2",
            },
            {
                name:"KYC",
                image: "url",
                cusines: ["Burger","American"],
                rating:"4.5",
            }
        ]
        ]
    }
]
```
If a location doesn't have offers, backend wont return any offer for that location. 
 
##### Optional Chaining in JS ?
Homework  
```
const RestaurantCard =()=>{
    return(
        <div className="card">
            <img src={"https:mh.com"+restaurantList[0].data?.cloudinaryImageId}/> 
            <h2>{restaurantList[0].data?.name}</h2> //"?" is optional chaining.
            <h3>{restaurantList[0].data?.cusines}</h3>
            <h4>{restaurantLIst[0].lastMileTravelString} minutes</h4> 
        </div>
    )
}
```

We want all the list of items. like burger king, kfc etc
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard burgerking/>
            <RestaurantCard kfc/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    )
}
```
We have hardcoded so far.  Every card should have different data. 
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard restaurant={restaurantList[0]/>
            <RestaurantCard restaurant={restaurantList[1]/>
            <RestaurantCard restaurant={restaurantList[2]/>
            <RestaurantCard restaurant={restaurantList[3]/>
            <RestaurantCard restaurant={restaurantList[4]/>
            <RestaurantCard restaurant={restaurantList[5]/>
        </div>
    )
}
```
##### How will data modify? 
Here is where props come in. Whatever we pass in over here as attribute, its a props. 
restraurant is a props. 
##### What is Props?
Props is properties.  Prop is just a normal function parameter.Difference is that react wraps up all the properties into the variable called props. 
##### What is passing props?
Pass props means passing properties or data into my functional or class component. 
We pass data inside function through arguments and parametes.
We pass in arguments. Receive parameters.
##### Can we rename props? 
NO we can call anything like properties, parameters but props is the common usage.

```
const RestaurantCard =(props)=>{
    console.log(props)
    return(
        <div className="card">
            <img src={"https:mh.com"+restaurantList[0].data?.cloudinaryImageId}/> 
            <h2>{restaurantList[0].data?.name}</h2> //"?" is optional chaining.
            <h3>{restaurantList[0].data?.cusines}</h3>
            <h4>{restaurantLIst[0].lastMileTravelString} minutes</h4> 
        </div>
    )
}
```
Console will show the props

##### Can we have multiple prop?
`hello="world"` is also a prop.
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard restaurant={restaurantList[0] hello="world"/>
        </div>
    )
}
```
Lets do it dynamic.
```
const RestaurantCard =(props)=>{
    console.log(props)
    return(
        <div className="card">
            <img src={ "https:mh.com" + props.restaurantList[0].data?.cloudinaryImageId}/> 
            <h2>{props.restaurant.data?.name}</h2> //"?" is optional chaining.
            <h3>{props.restaurant.data?.cusines}</h3>
            <h4>{props.restaurant.lastMileTravelString} minutes</h4> 
        </div>
    )
}
```
> Prop is like a function call or like an arguments passed in but we call this as props.
When u pass in any props to the functional component, it is received parameter over here which is props.
This props can be used like any other variable.

> Props is destructuring on the fly.  Some people will use like the following code, but both are same only.
```
const RestaurantCard =({restaurant})=>{ 
    return(
        <div className="card">
            <img src={ "https:mh.com" + props.restaurantList[0].data?.cloudinaryImageId}/> 
            <h2>{restaurant.data?.name}</h2> //"?" is optional chaining.
            <h3>{restaurant.data?.cusines}</h3>
            <h4>{restaurant.lastMileTravelString} minutes</h4> 
        </div>
    )
}
```

Destructuring restaurant
```
const RestaurantCard=({restaurant})=>{
    const {name,cuisine,cloudinaryImageId, lastMileTravelString} = restaurant.data;
     return(
        <div className="card">
            <img src={ "https:mh.com" + cloudinaryImageId}/> 
            <h2>{name}</h2> //"?" is optional chaining.
            <h3>{cusines.join(",")}</h3> //It threw error 
            <h4>{lastMileTravelString} minutes</h4> 
        </div>
    )
}
```
If we dont want to destructure, we want to destructure everything on the fly
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard restaurant={restaurantList[0].data/>
            <RestaurantCard restaurant={restaurantList[1].data/>
            <RestaurantCard restaurant={restaurantList[2].data/>
            <RestaurantCard restaurant={restaurantList[3].data/>
            <RestaurantCard restaurant={restaurantList[4].data/>
            <RestaurantCard restaurant={restaurantList[5].data/>
        </div>
    )
}//It wont work
```

We have to pass in our individual props like below
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard name={restaurantList[0].data.name} cusines={restaurantLis[0].data.cusines}/>
            <RestaurantCard name={restaurantList[1].data.name} cusines={restaurantLis[1].data.cusines}/>
            <RestaurantCard name={restaurantList[2].data.name} cusines={restaurantLis[2].data.cusines}/>
        </div>
    )
}
```
It will show all the names.
```
const Body =()=>{
    return(
        <div className="restaurant-list">
            <RestaurantCard name={...restaurantLis[0].data}/>
            <RestaurantCard name={...restaurantLis[1].data}/>
            <RestaurantCard name={...restaurantLis[2].data}/>
        </div>
    )
}
```
`...` is spread operation in ES6
`...restaurantList[0].data, 1,2,` we cant write all 
##### Do we need for loop? 
NO in react, we do with `map`
##### Map?.
Map is the best way to do functional programming.
##### Difference between map and foreach?
homework
```
const Body =()=>{
    return(
        <div className="restaurant-list">
        {restaurantList.map((restaurant)=>{
            return <RestaurantCard name={...restaurant.data}/>
        }
    )
}
```
We got the output.

##### What is Virtual DOM?
It is not just a concept of react. Its used in multiple places.
React also has something called virtual dom.
We keep the representation of the dom in our code with us. It is known as virtual dom. 
##### Why do we need virtual dom?
We need for reconciliation. 
##### Reconcilliation?
Reconciliation is an algorithm that react uses to diff one tree from another. 
##### Diff algorithm?
Diff algorithm finds out the difference between the trees.
It determines what needs to change in UI and what doesn't need to change in UI.
It finds out what needs to be updated and it just rerenders that particular part of the application.
It will only rerender the node and its children. (check 02:41:00)
 
Whenever we have multiple children withe same attribute, all the children will rerender
If we give unique key, it will not rerender all. It will rerender what needs to be updated.
React will only rerender  the specific portion of the app which is found by diff algorithm.

##### React fibre?
Check this out.
In React 16, diff algorthm changes and they brought React fibre. 
React fibre is the new reconciliation engine in react 16.  It is responsible for diff.

```
const Body =()=>{
    return(
        <div className="restaurant-list">
        {restaurantList.map((restaurant)=>{
            return <RestaurantCard name={...restaurant.data} key={"xyz"/>
        }
    )
}
```
React will say we have dupliate key error in console browser.
```
const Body =()=>{
    return(
        <div className="restaurant-list">
        {restaurantList.map((restaurant)=>{
            return <RestaurantCard name={...restaurant.data} key={"restaurant.data.it"/>
        }
    )
}
```
#####  Why dont we use index as key?
Index in map changes everytime, 
##### Can we use index? Is index a valid key?
It is a valid key but we dont want to use index. We dont have to use index ever in the key. 

##### Why not to use index as a key? 
google and check a blog from react documentation. 
React doesn't recommend index. What if we have no unique keys, then we can use index.
> .//no key<<index key<<unique key

unique key is the best way and good way to use it. 
if we dont have unique key, then index key is the last resort. 
No key is not acceptable.

If the tags are different, react uniquely identifies. No need key for this. 
If we have same tags, then we should use key.

> .//no key(not acceptatble)<<index key(last option)<<unique key (best practice)




