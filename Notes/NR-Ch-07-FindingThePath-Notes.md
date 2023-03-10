
Useeffect is called after the component is rendered.
Two parameters it takes is the callback function and the dependency array.
Callback function is called after render. 
When we have empty array, useEffect will be called only once after the initial render.
If i have state variable, this is the dependency array and whenever my searchText changes, component re-renders, callback function is called after the render. 

What if we dont have the empty dependency array?
our UseEffect is not dependent on anything. Its default behaviour is to be called after each render. 

useEffect(()=>{
    console.log("useEffect");
},[]);

If i click on login, state changes, will the useEffect be called? No
Render will be called but not useEffect. Because dependency array is empty.

If we dont have dependency array?
useEffect(()=>{
    console.log("useEffect");
});

useEffect will be called after every render. Everytime my state changes, useEffect will  be called after every render.

useEffect(()=>{
    console.log("useEffect");
},[isLoggedIn]);

useEffect will be called after initial render and after everytime the isLoggedIn state changes, useEffect will be called.

DONT'S
React says Never create a component inside a component.
Keep it on the top level.

Never ever useState inside if-else
IF(){
    const [searchText,setSearchText] = useState("");
}
React wont know searchText will be there or not. It leads to inconsistency

Never write it inside a for loop
for(){
    const [searchText,setSearchText] = useState("");
}

useState is a  hook that react gives you to create local state variable in your functional component.
Never use useSTate outside a funcitonal component.

We can create several useEffect 


How to keep images locally?
In src folder, create a folder named assets/img and keep the images.
go to header and import it 
import Logo from "../assets/img/foodVilla.png";

or we can just load it via cdn.

Generally while building an app, cdn images
Why cdn a great place to host your images, because it is fater, optimises things. etc
Swiggy uses it. cloudinary is a cloud cdn url.

In cdn we cannot optimize our images after it comes to our browser, so we put in optimized images on cdn. 

Shimmer- we use npm react-shimmer package. Why do we need a extra package for it?
It is bad thing to import package for everything. Create your own shimmer. Never use extra packages.
One cool package is npm is-odd. It finds whether the number is odd or not. Do we need package for that? No
Create your own shimmer.

In body.js 
we have to create a similar layout with dummy cards

const Shimmer =()=>{
    return <div className="restaurant-list">
    <div className="shimmer-card"></div>
    </div>
}

.shimmer-card{
    width:200px//width of my card
    height:200px;
    background-color:lightgray;
    margin:20px;

}

NOw we got one box. 
create 10 boxes

const Shimmer =()=>{
    return <div className="restaurant-list">
    {Array(10).fill("").map(e,index)=>(<div key=index className="shimmer-card"></div>)
    </div>
}

when you have to use tedious works, then use packages. 
When you need forms , use formik library 

ROUTE
npm package - popular library - reactrouter
In terminal
npm i react-router-dom

Todo 
about us page
contact page
How routing works?


About Us component
About.js
const About()=>{
    return (
        <div>
            <h1>About Us Page</h1>
            <p>Food App </p>
        </div>
    )
}

export default About;

App.js
We have to create a routing configuration

import {createBrowserRouter} from "react-router-dom";

const appRouter - createBrowserRouter([

])

THis is the place we tell, if there is /about in page, then load about component.
There are many types of routers. createBrowserRouter is the most recommended version of routers.

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    },
    {
        path:"/about",
        element:<About/>,
    },

])

Always create this below AppLayout

We need to provide this approuter to our app.
THere is something known as Routerprovider  in react-router- dom. Import it.
In root.render we were rendering appLayout. 

We want to render according to our path. 
root.render(<RouterProvider router={appRouter}>)
We will give in some configuration. router={appRouter}
Whatever the root will render, it will render according to our configuration.

This createBrowserRouter configutation is an array which contains list of path.

Reactrouter is not developed by facebook, it is developed by Remix.
root.render(<RouterProvider router={appRouter}>)
This is known as props.

What will happen if we give localhost:1234/xyz
it will throw error.
one more thing is React gives better UI for showing us error.
In our console there is no errors. React handles it.It is a user friendly experience, it doesnot make your ui or console red.

Create our Error page
Create error component
const Error =()=>{
    return(
        <div>
            <h1>Oops!</h1>
            <h2>Something went wrong!</h2>
        </div>
    )
}
export default Error;

We can give error element
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
    },
    {
        path:"/about",
        element:<About/>,
    },

])

Any random url that comes will go to our error page.

appRouter, on certain path, whatever we want to load, give it to element,
whatever we want to load in error, give it to errorElement

Suppose if we have our error component, he will get the error page,
user will not know what error is this. We have to show more information about the error.

React router dom gives us one more cool thing,
import {useRouteError} from "react-router-dom"
useRouteError is a hook. Hook starts with use. thats how we identify if thats a hook or not.

const Error =()=>{
    const err= useRouteError();
    console.lgo(err);
    return(
        <div>
            <h1>Oops!</h1>
            <h2>Something went wrong!</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    )
}
export default Error;

We can destructuring as well. 
We can catch the error and show it to user with the help of useRouteError hook.

const Error =()=>{
    const err= useRouteError();
    const {status,statusText} = err;
    console.lgo(err);
    return(
        <div>
            <h1>Oops!</h1>
            <h2>Something went wrong!</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    )
}
export default Error;

If we want to click on about and go to about page.
What is the problem with anchor tag?
The problem is if we click on it, it refreshes the whole page which is bad.

We are building spa - single page application.
What is single page application? In older days, old websites work with html page /about.html. loads the whole page.
With single page application, our application does not reload. 

In SPA, there are two types of routing.
client side routing
server side routing


Client Side Routing
Server side routing is the way all our pages come from server. when we click on other pages like about page, that page comes from server.
In react, we will build client side routing. We dont want to make network calls to fetch something.
We will just load a different component.


React gives us something known as link.
import {link} from "react-router-dom" 

<link to="/about"> <li>About</li></link> or <li><link to="/about">About</link> </li>
It behaves similar to anchor tag

Who developed this link tag? Remix developed it.
If you check the browser, it becomes anchor tag. Link used anchor tag behind the scenes.
react-router-dom keeps track of all of these links. browser understands anchor tag.
End of the day we have to convert everything inot what browser understands.

Nested Routing
If we load about us page, header and footer is gone. How to make it intack.


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
    },
    {
        path:"/about",
        element:<About/>,
    },

])

We have to create childer of our route. About should the children of applayout
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        childern:[
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])

Let us create contact page
const Contact=()=>{
    return <h1>Contact Us Page</h1>
}
export default Contact.

Now let us load contact page

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        childern:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    }
])

React-router-dom  gives us something known as outlet component. 
import {Outlet} from "react-router-dom";
const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
    )
}
Outlet will be filled by the children configuration.
I want my header and footer to be always there. Things inbetween .Content in the outlet should render according to my config.
Whatever we have in children will go into the outlet according to the route.

Check in browser. It works.
When you go to home, it does not havebody

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        childern:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
              {
                path:"/",
                element:<Home/>
            },
        ]
    }
])

Our reconcilliation algorithm knows exactly what needs to change.
Check in browser elements tab while changing tab. Root div is flickering because, something inside root is changing.

When i go from about to home, it loads two times, It renders two times. 
First render, api call and then re-render so two times.

Dynamic routing
Route is changing dynamically

Route based on id
 {
    path: "/restaurant/:id",
}

Lets build RestaurantMenu component
const RestaurantMenu =()=>{
    return (
        <h1>Restaurant id: 133</h1>
        <h2> Namaste</h2>
    );
};
export default RestaurantMenu

{
    path: "/restaurant/:id",
    element:<RestaurantMenu/>,
}

Will this work?
localhost:1234/Restaurant/123 it loads
localhost:1234/Restaurant/1234 it loads  123 page
React gives somthing known as useParams. It is a hook.

import {useParams} from "react-router-dom"

const params = useParams();
const {id}= params;//destructuring id
console.log(params);
const RestaurantMenu =()=>{
    return (
        <h1>Restaurant id: {id}</h1>
        <h2> Namaste</h2>
    );
};


//how to read a dynamic url params
const params = useParams();
const {id}= params;//destructuring id
or 
const {id} useParams(); is similar to above code. 

const {resId} useParams(); 

Make api call
We want to make an async funtion 
useEffect(())
check 02:05:15 for code
//use proper name
const [restaurant,setRestaurant]= useState({});

