Optimizing Our App
We used hooks like 
    useState
    useEffect
    useParams

Code Splitting
Lazy loading
How to make large scale application performant and fast
Create our custom hooks.

While creating component, rafce is the shortcut for the code. But never use it. Write each line word by word.

Recap of last session

How many times componentDidMount is called? 1
How may times componentDidUpdate will be called? every time when the component state changes and when new props created. and when we do forceUpdate()

What are the two phases of react life cycle?
Render phase
Commit phase

Suppose we have two child, do you remember batching? 

We have mounting, updating and unmounting
First time mounting happens. 
If the component doesn't have any props or state, how many times update happens? zero times
When component changes, unmounting happens.

Update happens when we change some data or behaviour. Whether it is 
    change in props or 
    change in state or 
    some onchange handlers in it. 

What is ComponentWillUnmout is used for? 
Cleaning up the code.


Today's Session
Own Hook
Why, When, How to build our own hooks?

Why we need a hook?
Reusability
Readabililty
Maintainability - Separation of concerns.

Hook is nothing but a normal JS function.
Why we build function in JS, we can wrap up a small login inside a function and we can use it anywhere inside the program.

We created filterdata function because of 
modularity,
reusability
readability

Readability is, we have button, on click we called filterData. 
We just want to know output of it, not how it works. It makes our code much more readable.

Reusability is , we can reuse it. If we need to filter data somewhere else we can reuse it.

What is the great place to keep filterData. ? 
Whenever we use reusable code, there should be a common place where we can keep our utility functions and import from there. 
We can make a folder like 'utils'. It is like a utitlity folder. 
utility/common/helper/shared/ people name it some other names too
In utils, lets keep it helper.js
lets keep filter inside helper and export it and import it in body. 
We can now use it from a central place. This makes our code readable and reusable.

3rd thing is. This makes our code more testable. How?
We dont have to test cases to filter for checking body.

Why we say It makes our code maintainable. ? It is easy to debug.
If we have logic code in utils, we can go there and check. and it is easy to maintain. 

WHat is modularity? 
We have broken down code into meaningful pieces. 
Our every component has its own responsibility.
We have shimmer in separate component for modularity.

Hooks are also used for the same reason.  This is why we need hooks.

Wha is the job of RestromenuComponent?
To show the restro menu details. (Show the menu of the restro)

If the restro doesn't exist or data doesn't load? 
It will show the shimmer. 

A single compnenent is doing two things. It is fetching data and displaying data. 
Can we extract some more logic from the component? 
API call

We will try to extract this api logic. 
First It tries to find the parameter. find out the restro id
second get the detail from the server of the restro
third to display

Whenever we create a hook, create it as a new file. 
Always create a hook with "use" name in front of it.  like we have useState, useEffect, useParams
We can create it in utils also. Lets create it in utils. 
useRestaurant.js
Component names and files are in Caps. Hooks file starts in small case.

useRestaurant.js

const useRestaurant= ()=>{

};
export default useRestaurant;

What if i do a named export? Yes we can do a named export.But generally when we are creating one file for one component, then we use default. 

When someone else sees the import, the user will know  only useRestaurant  has been exported by by default. 
When user sees named import will know there are multiple components inside it. 

useRestro will fetch the restaurant for us and will send me. 

we get the param, resId, it comes from url.
We will fetch the menu from resId.
We are fetching the data and puttin it in restaurant. 

const restaurant = useRestaurant(resId)
I just pass in the restro id and it gives the menu list. I dont care where the data is coming from.
The only job of restro menu is to display the restro menu. 

useRestaurant should do all the works. 

const useRestaurant = (resId)=>{
    //get data from api 
    //return restaurant data 
}

suppose if my param changes, data should also change. so i will create a state for fetching data logic.

const useRestaurant = (resId)=>{
    const [restaurant,setRestaurant] = useState(null);
    //get data from api 
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        //code
        const data = await fetch();
        const json = await data.json();
        setRestaurant(json);
    }
    //return restaurant data 
    return restaurant;
}

Hook is not returning jsx, it is returns some value. 
useState returns an array. 
useParams returns some value, some object, or some array.
It can return any piece of thing. we can ofload any piece of functionality.

Functionality of resto menu 
It wil  come to restro menu.
 When it loads it find the resId from useParams. 
It will read that restro comes from useRestro and it will go to useRestro and will create a  state and call the api and sets the state.
As soon as it sets the state , it has its own reconcilliation going on. 


How can i make this even more better ? 
We can export this url into constants. 
Always use constants file for constants. 

export FETCH_MENU_URL = "url";
Now we can import as a names export from constants. 

Lets build another hook from scratch.
We wil build a feature to track if someone is online or offline?
If user is offline, i will restrict the user to click on any of the links and show the user that they are offline.

Extract fetch in body into another hook.

const isOnline = true;
if(!isOnline){
    return <h1>Offline, please check your internet connection</h1>
}
Change to false and check. 

How will we know whether they are offline or online? 
There is a control known as  window: online event 
there is a event listener. 

What if i had a custom hook useOnline();

Why cant we use a normal function instead of hook?
Can we make state variable in normal function? NO
We got useEffect in normal function? NO


useOnline goes into util folder.

import {useState} from "react";
const useOnline = ()=>{
    const [isOnline, setIsOnline]>{
        Whenever we go online, this code will trigger
    })

HOw many times do i have to set my eventLIstener? just once whenever my page loads.
We will have to use useEffect. 
useEffect(()=>{

},[])
It will run once because of empty dependency array.
For offlien we have another eventListerner

import {useState,useEffect} from "react";
const useOnline = ()=>(
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsONline(true);
        });
        window.addEventListener("online",()=>{
            setIsONline(true);
        });
    },[]);
    return isOnline;
    );
export default useOnline;

Can we creat a npm library for isOnline? Yes

import useOnline from "../utils/useOnline";
We can check in browser and switch to offline
Go to Network and you have dropdown and you can go offline. If we switch to online, it will come back.

This is how dyno game in chrome is built. We can build a tic tac toe or whatever you want to , to show whether you are online or not. 

This is junior developer code. This is not senior developer code.  why?
Check in slow 3g mode to check how the site loads. 

Suppose if we have to write as senior developer, what should we do?
cleaning the cache, cleaning the eventListener.

Whenever we addEventListeners, we need to clean up event listeners.
Everytime you go offline and online, It will call event listener once. because of empty dependency array.
If we are on home page and if we go to about us page, eventListener is still there. We need event listerner only for body component. So it is always a good practice to clear up the mess we create.


Where do we clean this? 
Unmount cycle. In a return in useEffect.

import {useState,useEffect} from "react";
const useOnline = ()=>(
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        const handleOnline =()=>{
            setIsOnline(true);
        }
         const handleOffline =()=>{
            setIsOnline(false);
        }

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
    },[]);
    return ()=>{
    window.removeEventListener("online",handleOnline);
    window.removeEventListener("Offline",handleOffline);
    };
export default useOnline;


If online show this, if offline show the user offline. 
Body component doesn't need to know the logic of online/offline logic.

When will this hook be removed? in unmounting phase. 
If we want to show online/offline along with login

import useOnline from ..path
const isOnline = useOnline();
<h1> {isONline} greentick: red round</h1>

We can build a hook for isLoggedIn.
Header component doesn't need logic of whether we logged in or not

const isLoggedIn = useAuth();
Build useAuth and logic inside it. 

create a hook to use localStorage.
const localStorage  = useLocalStorage();
Instead of localStorage, 
const [getLocalVariable, setLocalVariables] = useLocalStorage();

In second class we studied parcel. 
Parcel is a bundler. What is a job of bundler?
Minification, hmr, etc. But 
what is the basic job of a bundler? bundle things.
What should it bundle? bundle your code. 
How many js files does parcel produce? 1 js file for our whole code. 

We cannot build 100's of components into one js bundle file.
So we have to do chunking/code splitting/dynamic bundling/lazy loading/on demand loading
We have to make logical bundle to our app.

How to do?
Ex: make my trip
Load flight components only when i click on flight page.
Load train components only when i click on train page. 

Lets have instamart into a separate bundle.
Lets create instamart. 
Instamart.js
const Instamart = ()=>{
    return (<div>
    <h1>Instamart</h1>
    </div>);
};
export default Instamart;

add path in createBrowserRouter
add link in html code.

Instamart is also in index.js bundler
So lets do chunking

Wherever we have import for instamart. It is in app.js
There you have to lazyload it. 
We have import it in a different way

We have something known as lazy, for dynamic import. 
This lazy comes from react library as a named import.
const Instamart - lazy(()=>import("./components/instamart")));

Instamar is imported like this in a lazy way. 
If we check in browser , it has one js bundle file. It doesn't have instamart. 
Go to instamart page and check in network tab. One more js file came in. 
This file will have instamart content. This is known as 
code splitting
bundle chunking
lazy loading
dynamic bundling
on-demand loading
dynamic import

Why we get error? 
When we load instamart, it is a different bundle. it takes time to load the script. so meanwhile react tries to render it. It is rendering something which is not there. So react suspends the rendering, so we got error.
It is SPA. 
upon on demand loading => upon render => suspend loading
How to handle it?
We use something known as suspense.
import{lazy,suspense} from "react";

In create browser router 
path:"/instamart",
element:(
    <suspense>
        <Instamart/>
    </suspense>
)

Now it works when you load the page. 
When you write suspene, react takes care of these components in different fashion. 
const Instamart - lazy() =>import("./components/Instamart")); This is a promise 
React will wait for this promise to resolve. 
We should show a shimmer. 
React takes a prop which is known as fallback
In this fallback,you can pass in whatver you need to show untill and unless instamart is available. 
import shimmer. 
When you load you can see shimmer. fallback UI

Lets make about component in lazy
const About = lazy(()=>import("../components/about"));

Remove import of about 
and add suspence in createBrowserRouter and add fallback = "loading"

HW: create own hooks
created useRestaurant Hook
How, why we lazyload/chunking/bundle splitting/laod on demand

Never lazyload inside a component.  because this will be lazy loaded after every render cycle. 
If we have to lazyload our footer. dont write inside component. 
Lazyload where you  are importing it. and import it on top only. 