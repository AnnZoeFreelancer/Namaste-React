 ## Exploring The World
- ConfigDrivenUi
- Recap of Hook and usestate
- Virtual DOM, reconciliation, diff algorithm, React fibre
- Rerender in body. console log render()
- SearchBar
- Why working in first search and not in other searches?
- First Searh
- It calls onclick handler. 
- Handler will call the filter data. 
- Fitlter data took two variables, searchText and restaurant list(restaurants)
- Filtered it from restaurant list with the search text and returned the list in data.
- Set the list in restaurants. 
- First search will filter the data. ex. king 
- Second search will filter the data among the king. ex. kfc no data will be found
- Third search will filter the data with ing. king will show again.

##### Old Days Monolith Architecture
Older days, single big application,ex:java
This app used to have everything like api, ui, sms,notification,jsp in one project.
We deploy using the whole application. To change one button in UI, we used to deploy whole java application.
This architecture is known as Monolith.
##### New Microservice Architecture
World is moving toward microservice architechture
Instead of having one project, we have small small diffterent projects like, UI, API, notification, logs, authentication, etc.
Not just one UI, 10 or 15 UI or many backend api's. All run on different ports. Not just one db, we have many db too.
Advantage of microservice is easier to test, changing button is easy to maintain, every team has separate responsibility.
It is known as separation of concern(SOC), or single responsibility. 
We can have different languages too. UI in react, backend api in java, notification in python, logs in python or go, authentication in golan, etc. New ui microservice in vue, angular, etc
In uber most microservices were written in golang.

##### Food villa is ui microservice. 
We are building what is deployed on swiggy.com

##### How all these applications are connected? 
Suppose port number 3000 is mapped to swiggy.com/
and 4000 is mapped to swiggy/dapi
and 5000 is mapped to sieggy/notification .
All are connected to same domain name with different ports.
Some people change the domain name as well. api.github.com
The world for ui project is exploring other services.
api call..Fetch, promises, ajax
##### Fetch
Fetch is a prebuild js function. It is a browser api.
We can all fetch function and we can pass in the api and it calls the api.
##### Where should I make my api call?
##### Where do i need my data from the api?
We need it in restaurant list.
   ```
   const [restaurants,setRestaurants] = useState(restaurantList);
```
If we call above this line, it will quickly rerender everytime when we type in searchbar. It renders on every small state change.
So it is not a good place to call the api to call on every keypress.
##### Good way to call an api?
As and when page loads, body component loads, it calls the api and fill the data.
##### How to do in react?
Two ways are there.
1. First way:
Supose user loads the website. Make an api call. Render the page
Api call takes some time around 300 ms for example. Whole render time takes 500ms

-2. Second way:
As soon as user loads the page, render show the user something on the page and then call the api. Then update the ui.
Second is the good way. Because of the user experience. Page will be availble in 50-100ms.
In first way, page will load in 500ms only. 
We quickly load the ui in second way. and we update the ui quickly too.
React is very powerful in reconciliation algorithm. Find the diff and updates the dom. React fibre is very fast.
##### useEffect Hook and callback function
React gives us second most important thing is useeffect hook.
We will be using useeffect hook. Hook is a normal function. Just like useState, useEffect comes from react library.
It is a named import. 
useEffect is a function. We call this function by passing another function to it. This another function is a callback function.
This another function will be called whenever useEffect wanted to call. React makes sure useEffect call it at a specific time.
Whenever our component rerenders, code of the function will be called, after every render, useEffect will call the function that is passed inside it. 

##### When will my component render?
On state changes. or props changes.

##### We dont want to call useEffect after every rerender.  When to call then?
If we dont want to call it after every rerender. If we dont want to call it, pass in an empty dependency array into it. 
```
useEffect(()=>{
    console.log("render");
},[]);
```
> Useeffect has two parameters, one is callback function and another is the dependency array. Useeffect has two parameters, one is callback function and another is the dependency array. 

If we only want to call useEffect, whenever our searchtext changes. Then we will write like below
```
useEffect(()=>{
    console.log("call this when dependency is changed");
},[searchText]);
```
Now my useEffect is depending on searchText.
Check it in console.

If we dont want useEffect to be dependent on anything, it will be called just once. before or after render? 
```
useEffect(()=>{
    console.log("render");
},[]);
```
If we want to call this only when my restaurant changes. It will call the first time, because restaurant was updated the first time.
```
useEffect(()=>{
    console.log("render");
},[restaurants]);
```
##### When I type something in searchbar, will it be called?
No
If we click the search button then it will be called. 

```
useEffect(()=>{
    console.log("useEffect");
},[]);
console.log("render")
```
##### Which will be called first? useEffect or render?
Render will called first because, useEffect is a callback function when it is an empty dependency array.
If my dependency array is searchText? 
```
useEffect(()=>{
    console.log("useEffect");
},[searchText]);
console.log("render")
```
useEffect will be called once after initial render and everytime after rerender when my search text is updated.
```
//output in console
render 
useEffect
```
We type something in searhbar
render 
useEffect
```
useEffect(()=>{
    console.log("useEffect");
},[restaurants]);
console.log("render")
```
```
//Output in console
render 
useEffect
```
When we type in test we will get only render in output because restaurants doesnt change.
```
render
render 
render
render
When we click on search
render 
useEffect
```
##### To make an api call as soon as my page loads? 
We have to make an api call over here with empty dependency array
```
useEffect(()=>{
   //API call
},[]);
console.log("render")
```
Now render will happen then api call will be made by useEffect. 
```
useEffect(()=>{
    //API CAll
    fetch("swiggy api")
},[]);
console.log("render")
```
aync function 

You will get an error.
```
install plugin cors. allow cors: Access control allow origin
```
Add to chrome. 

Cors- watch video.
We got our data now. 

lat:12.9351929,77.62448069999999

##### How to load the data in UI?
Chck code 01:48:03
```
    const [restaurants,setRestaurants] = useState(restaurantList);

async function getRestaurants(){
    const data = await fetch(
        "swiggy apilink"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data.cards[2].data.data.cards)
}
```
Above is a bad way to do. We have to do with optional chaining. It will break if we dont us optional chainign.
```
async function getRestaurants(){
    const data = await fetch(
        "swiggy api link"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data.cards[2]?.data?.data?.cards);
}
```
O/p loaded.

We haven't removed the restaurant list / 
Check 01:52: and add here.

##### useEffect
Use effect is a hook.
When we use useEffect, react renders our component and useEffect is called once. 
If my dependency array has some search text, compoenent will render, useEffect will be called and it will be called everytime i search, it will rerender.

Remove hardcoded data.
##### Shimmer
Earlier we had Spinning loader. Its a bad user experience with fluctuations in UI
They started showing empty boxes loaded in the browser. It is UX design principle. This is known as Shimmer design.

The shimmer UI resembles the page's actual UI.
Swiggy has it. YOutube has it. Amazon doesn't have it.
Check by reloading the page.

Howework. Add shimmer ui to the code. 
##### How to render when data is not called?
Conditional rendering.
We need to render a shimmer ui or data ui.
if my restaurant is empty  then load shimmer ui
If my restauratnt has data, then load data ui.

create a Shimmer UI component
```
const Shimmer =()=>{
    return(
        <h1> Shimmer UI loading</h1>
    )
}
export default Shimmer;
```
in body.
```
return (restaurnts.length===0)?<Shimmer/> :(
    <>
)
```
##### Searchfunctionality
##### If the searched restaurant is not there, shimmer ui loads why?
In use state we will maintain two copies of restaurant. 
All restaurant, filtered restaurant
```
const [allRestaurants,setAllRestaurants] =useState([]);
```
##### How to avoid rendering component? Early Return
optional chaining , if(allRestaurants)  is not there. return null or any messages too
```
<h1>message</h1>
```
```
//not render component
if(!allRestaurants) return null
```
It is called early return. When i dont have my restaurant, dont return anything.
If allRestaurants length is zero, show my shimmer ui.
Suppose my filterrestaurant is empty, No restaurant found message should be shown.
We will do like
```
if(filteredRestaurant?.length===0) return <h1>No restaurants match your filter</h1>
```
Homework - check for allRestaurants, show the shimmer.
Filter and show filtered restaurants not there
Add in restaurant list div

Search went off. 
case sensitive for search
```
"roti".toLowerCase()==="roti".toLowerCase()
"roti".toUpperCase()==="roti".toUpperCase()

restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
```
Login/Logout
```
<button>Login</button>
<button>Logout</button>
```
```
const loggedInUser =() =>{
    //API call to check authentication
    if success return true
    else return false
}
```
```
{
   // Any javascript works over here  only javascipt expression but not statements 
    a=10
    console.log(a);//this wont work because we are using statements

    ((a=10),console.log(a))// this became an expression so it will work now
   // if else is a statement but ternary operator is an expression
}
```
```
{
    (isLoggedIn? <button>Logout</button> : <button>Logout</button>
}
```
##### create a state 
```
const [isLoggedIn,setIsLoggedIn] = useState(false);
```
##### Toggle
```
<button onClick=>setIsLoggedIn(false)>Logout</button>
<button onClick=>setIsLoggedIn(true)>Login</button>
```
##### Recap
- diff algorithm is in react core
- virtual dom happens in react dom
- same diff algorithm in react native
- login logout
- search work
- shimmer
- edge cases
- loading screen
- early return
- useEffect
- uppercase lowercase
- fetch,await, data.json? 
- micrservice architecture vs monolith

