# How do you create Nested Routes react-router-dom cofiguration 
React-router-dom  gives us something known as outlet component. 
`import {Outlet} from "react-router-dom";`
```javascript
const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
    )
}
```
Outlet will be filled by the children configuration.
```javascript

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
```

We want our header and footer to be always there. Things inbetween .Content in the outlet should render according to my config.
Whatever we have in children will go into the outlet according to the route.

# Read abt createHashRouter, createMemoryRouter from React Router docs. 
###createHashRouter
This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
`Using hash URLs is not recommended.`

###createMemoryRouter
Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment. 

# What is the order of life cycle method calls in Class Based Components?
1. Constructor
2. Render
3. JSON
4. componentDidMount
5. Re-render
6. componentDidUpdate
7. componentWillUnmount

# Why do we use componentDidMount?
In react we have componentDidMount() method.
It will be called after every render.
Whenever a class based component is called, a life cycle method is called.
First the constructor will be called.
Then the render method.
Then the componentDidMount method will be called.
componentDidMount is the best place to make api calls because we want to render it first and then make an api call later.

# Why do we use componentWillUnmount? Show with example
componentWillUnmount is used for cleaning the mess and unloading the components when we leave the page. There are lot of things we need to clear when changing from one component to another. It is handled by componentWillUnmount phase.  We know react is a Single Page Application. By leaving the page we mean we are changing the componenents from one to another. Ex. From about.js to contact.js.
If we have a setInterval, it wont stop when we leave the page and it will run forever.
If we move from about to contact page, setInteval keeps calling it. If we change again, it is calling twice and if we do again, it is calling thrice, and these are happening without our permission. When we change our page, it is not reloading our page, it is just changing our component. We have to take care of all these things.
```javascript
componentDidMount(){
    this.setInterval(()=>{
        console.log("namast react"),1000});
    }
```
We have to clean up the mess we created by clearing the setInteval. It is done in unmounting phase. Since it is SPA, `this` is shared with all the methods in the class. 
```javascript
componentWillUnmout(){
clearInterval(this.timer);
}
```
Now if we refresh our page, setInterval will stop and if we change our page inteval stops.

# (Research) Why do we use super(props) in constructor?

Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class. The right way to use it is when the child class and parent class are from the same field.

https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react

# (Research) Why can't we have the callback function of useEffect async?
Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook#:~:text=Why%3F,function%20will%20never%20get%20called.
