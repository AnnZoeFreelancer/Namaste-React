## Let`s get Hooked

##### Folder structure. 
We have to wrap our code in proper folder structure. 
It gives us better modular approach. 

- Read react file structure.
- React says react doesn't have opinions on how we put files into folders.
- Some developers like to group their files by features or routes.
- For food odering app, we can have features like, cart, order, orderhistory, etc.

##### Source folder `src`
All files related to app goes here. Not a rule, just a best practice.
##### Components folder
All components goes here.
Add src folder and components folder in the main folder.
##### Export and Import 
Import and export properly for all files with correct path.
There are two types of exporting and importing files.
1. Default Import  Export
2. Named Import Export

##### Default Export 
To  export the file by default we use default export. 
```
export default Header;
```
```
import Header from "./components/Header";
```
##### Named Export and Import
##### Why default? 
We can have title and header in the same file header.js
##### To export both of the files, can we export using default? 
NO,We can export default one thing only. 
##### How to export multiple? By Named export and import
We can export directly by name. It is called Named Import. Below title is named export and header is default export.
```
export const Title=()=>{}
export default Header;
```
To import 
```
import{Title} from "./components/Header";
import Header from "./components/Header";
```
We dont have to use curly paranthesis in default import. But we have to use in named import.
We can export only one thing from a file. 
##### What is {Title} is known as? Is this object destructuring? 
NO it is not object destructuring.
```
import obj from ".components/Header";
const {Title} = obj // it wont work because it is not object destructuring
```
```
import * as obj from "./components/Header";
obj.Title 
//It will import.
```
We can aslo export like below using named 
```
export const Title
export const Header
import {Title,Header} from "./components/Header";
```
It is like import is extracting these two components.

If my header is default export, then 
we can import without extracting from here.
```
import Header, {Title} from "./components/Header";
```
In the default export both names doesn't need to be same,
```
const Header =()=>{}
export default Header
import NewHeader from "./components/Header";
```
But always try to use the same name.It is a good practice.

What if we write Header.js instead of Header in import?
```
import Header from "./components/Header.js";
```
We can write, it will work.
##### Can we name Header.jsx?
Some people name the file Header.jsx
```
import Header from "./components/Header.jsx";
```
This is also valid.

Some of the libraries track your extensions and it might break.
We can use js or jsx. its perfectly fine. Now we will always name the file as .js.
We can wish to do whatever we wish to.
```
import * as xyz from "./components/Header.js";
```
We can use as
```
<XYZ.Header/>
```
Here we will use default export only and import without curly braces most of the time as our convention.

Homework. Named import,different ways to export and import, * etc

##### Creating Files
##### Body.js
create body.js in components folder and move the body component and export default and import in app.js
##### Footer.js
create footer.js in components folder and move the footer component and export default and import in app.js
##### Config.js File or constants.js file
We also have to create config file
##### What to put in config file? 
Put all the harcoded thing in config file
Some companies use constants.js file instead of config.
Some people use different for production and different for development file

##### We can use image cdn url in config file.
```
export const img_cdn_url="";
```
##### How to use  image cdn in app.js?
We have to import it
```
import {img_cdn_url} from "./constants";
```
##### Where restaurant file goes?
Add restaurant list in constant file. because it is hardcoded . Export and import
```
import {restaurant_list} from "../constants";
```
##### Why ../constants? 
Double dot is parent directory
##### RestaurantCard.js
Create RestaurantCard.js and export and import.
##### Build a SearchBar Component inside body
```
<div className="search-container">
    <input type="text" className="search-input" placeholder="Search" value=""/>
    <button className="search-btn"> Search</button>
</div>
```
##### If we write the same code inside html? will it work? 
It is working but it is not working in react
##### How to make the input work in react? 
Inside body.js
```
const searchTxt="KFC";
<div className="search-container">
    <input type="text" className="search-input" placeholder="Search" value={searchTxt}/>
    <button className="search-btn"> Search</button>
</div>
```
But we cant edit it. because it is harcoded value.
React uses oneway data binding in above code. 
Suppose if we have a variable, we have to modify the variable as and when we write in search bar. 
We need to change the searchTxt. 
```
onChange ={onChangeInput}
```
onChangeInput takes a function and this function is a callback fuction which has a event. 
Whenever input is changed this input will be called.
```
onChange={(e)=> console.log("test")} o/p check it
onChange={(e)=> console.log("e.target.value")} o/p entering value will get appended to 
```
kfc in console
##### But it is not printing in searchbar. Why?
Whenever you change something inside searchbar, react rerenders the component and changes it. but we harcoded the value kfc in the code. 
##### Will it work?
```
onChange={(e)=>{searchTxt=e.target.value;}
```
it wont work like this.
##### To make it work
Local variables are not preferred in react. 
##### What if we have to change variables in react? STATE
To maintain a variable that chages, we have to use react variable.
Every component in react maintains a state. So we can put some variables on to that state.
To create local variable, we use state inside react.
##### useState Hook
We will use useState Hook  to create variables.
```
const {searchText} = useState();
```
##### What is state?
##### What is Hooks?
##### What is useState? 
##### And why we need these?

> State variables are created using use state hook.
Hooks are nothing but a normal function.

##### Where we get usestate from?
We get it from react
```
import {useState} from "react";
```
We are importing named import for useState because react developers made named export while writing it.

##### What is the function of the useState?
useState is used To create state variables.

##### How do i use my useState?
`useState() ` function returns an array. 
The first variable of this array is the variable name.
searchText is a local variable
```
const [searchText] = useState(); 
```
##### What is Hooks? 
It is a function. It gives us from functionalities. 

There are different types of hooks. 
One of the important hook is useState Hook.
```
const [searchText] = useState(); 
```
UseState hook is used to create local state variables.
useState comes as a named import from react library. 
We can use searchText like a normal variable
```
value={searchText}
```

##### How to give default value to useState variable?
```
const [searchText] = useState("KFC");
```
In normal js we use 
```
const serachTxt="KFC"
```
We were modifying the variable using 
```
onChange={(e)=>{searchTxt=e.target.value;} 
```
##### In react we cannot modify directly. How to modify?
I can only modify variables using function. usestate gives us that function and it is called as setSearchText
##### setVariableName
```
const [searchText, setSearchText] = useState("KFC")
const [searchImput, setSearchInput] = useState("KFC")

onChange={(e)=> { setSearchInput(e.target.value);}}
//e.target.value is whatever we write in input box.
```
Whatever we write in searchinput goes inside search variable

##### Now we are getting whatever we write in searchbar. How to make it work?
```
    <button className="search-btn"> Search-{searchInput}</button>
```
Whatever we type in searchbar will gets updated in local variable.

use state hook is a normal function that returns an array. 
Array looks like `[variable name,function to update the variable]`
We call this variable as a state variable
When we write like below. it is destructuring.
```
const [searchText,setSearchText]= useState("KFC");
```
We can also write as 
```
const searchvar = useState();
const [searchText,setSearchText] =searchvar;
```
When we write input we need to do manual databinding to it.
In angular there is two way data biding.
In react we have one way data binding.


##### Variable initialization in JS and react.
```
const stext; //it is javascript
const [searchText,setSearchText] = useState(); //it is react
```
Both are similar

##### Variable with default value declaration in js and react. Both are similar code.
```
const stext="hello"; //it is javascript
const [searchText,setSearchText] = useState("hello"); //it is react
```

Whenever we create a variable in react, react gives us the variable and a method to update it. It is given in the form of array. 

##### To update variable in react, we use onchange in js, onChange in react.
```
onChange={()=> {setSearchText(e.target.value)}
```
onchange we are getting event property. With the event property we can read it.
Read about synthetic events in javascript.
Now our variable gets updated in real time. 
It is known as two way binding. because we are updating the search text and it is getting updated and it is putting the value inside it as well.
If we do the same in js, it will be very  messy and non performant. So always use state variable in react.

##### Why do we need state variables?
In react, whenever a variable changes,
To make variables sync with the ui, we need to use our state variables.
If we have a local variable `a=10.` and some other component changes the variable` a=20`. React will not know that variable is changed. So when we create a state variable, react keeps track of all of them. Whenever we update the variable, it will automatically rerender our component.
```
const searchclicked = false;
const [searchClicked, setSearchClicked] = useState("false");
<h1>{searchClicked}</h1> o/p: false
```
```
<button className="search-btn" onClick={()=>{setSearchClicked("true")}};>Search</button>
```
Whenever a variable is changed, whole component rerenders and it is updating the value false to true.
Reconciliation is happening. 
H1 tag alone will gets rerendered. 

##### How to toggle?
```
const [searchClicked, setSearchClicked] = useState("false");
<button onClick={()=>{
    if (searchClicked=== "true")
        setSearchClicked("false");
    else
        setSearchClicked("true");
}}
<h1>{searchClicked}</h1>
```
Only h1 in the dom is getting updated. This is why react is fast, it is using diff algorithm, reconciliation

##### Let us make the search work, onClick
When we click on search, we need to filter the data we have to filter the restaurant list . Lets create function for that.
`filter()`
We have to update the  state restaurants.
We cannot update it directly, we have to make a state variable for this.
To maintain the list of restaurant, we need a state variable.
```
const [restaurants, setRestaurants]= useState(restaurantList);
```
We have created a local variable with default value.
Lets modify the restaurants with filter data using onclick of button.

The search text  we type in search bar goes in searchText and where we will search? in the restaurants
We have to search this text in list of restaurants.
filter function will search our text inside our restaurant and give us the filtered data.
Once we got the filtered data, we will update our data with the restaurants.  using  setRestaurants by passing our `data. setRestaurants(data)`
```
  function filterData(searchText,restaurants){
    return restaurants.filter(restaurant)=>restaurant.data.name.includes(searchText))
  }
  ```
We can also use restaurantList.filter but we need to be consistent with local variable so using restaurants
We can also write like  below code for beter understanding
```
  function filterData(searchText,restaurants){
  const filterData = restaurants.filter(restaurant)=> restaurant.data.name.includes(searchText);
  return filterData;
  }

  <button className="search-btn" 
    onClick={()=>{
        //need to filer the data
        const data = filterData(searchText,restaurants);
        //update the state - restaurants
        setRestaurants(data);
    }}>
```
Check 02:02:00 for explanation of the above filter code.

If we search again, It wont work because the state is updated. it lost the original state.
Homework is to find out why it is not working.
Make the toggle.













