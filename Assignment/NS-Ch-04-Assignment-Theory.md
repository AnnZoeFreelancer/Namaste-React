Is JSX mandatory for React?
No JSX is not mandatory for react. Using react without jsx is comfortable when we dont want to setup compilation build in our build environment.
Each jsx is nothing but a way of calling React.createElement(component,props,..children)

Is ES6 mandatory for React?
No ES6 is not mandatory for react.
React is a library and it does not forces us to use jsx or es6 or even react. It is ease of use.
Example: We can use react just in  a particular section of browser like header,footer, etc. since
whole react runs inside root.We just have to make our root as footer or header.


{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
We can write any piece of JS code inside curly braces {}in functional component.
{TitleComponent} will represent a react element or JS variable.
{<TitleComponent/> will represents functional component with no children.
{<TitleComponent></TitleComponent>} will represent functional components with children or content inside it.

How can I write comments in JSX?
JSX comments are similar to JS.
// For single line comments
/*
* For Multi line comments
*/

What is <React.Fragment></React.Fragment> and <></>
React.Fragment is a component exported by React library. The one we import as react in app.js.
To use component inside JSX we use <React.Fragment/>

const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}
When we use <React.Fragment> browser  will not display it as a separate div.
React.Fragment is like an empty tag.
React developers brought short hand for this , <React.Fragment></React.Fragment> is similar to <></>
const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}
We cannot pass any styles or attributes in react.fragment tag. If we want to use we have to make it a div and add style to it.


What is Virtual DOM?
Virtual DOM is the virtual representation of UI kept in memory and it is synced with the real DOM with the help of ReactDOM library. This process is known as reconcilliation. We need VirtualDOM for reconcilliation.

What is reconcilliation in React?
Reconciliation is an algorithm that react uses to diff one tree from another to determine which parts needs to be changed. 
Diff algorithm finds out the difference between the trees.
It determines what needs to change in UI and what doesn't need to change in UI.
It finds out what needs to be updated and it just re-renders that particular part of the application.
It will only rerender the node and its children.
Whenever we have multiple children withe same attribute, all the children will re-render
If we give unique key, it will not rerender all. It will rerender what needs to be updated.
React will only rerender  the specific portion of the app which is found by diff algorithm.

What is React Fibre?
In React 16, diff algorthm changes and they brought REact fibre. 
React fibre is the new reconciliation engine in react 16.  It is responsible for diff.
 A fiber represents a unit of work.
The purpose of React Fiber is reimplementation of the stack, specialized for React components. You can think of a single fiber as a virtual stack frame.
The advantage of reimplementing the stack is that you can keep stack frames in memory and execute them however (and whenever) you want. This is crucial for accomplishing the goals we have for scheduling.

Primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to
    -pause work and come back to it later.
    -assign priority to different types of work.
    -reuse previously completed work.
    -abort work if it's no longer needed.
    Ref: https://github.com/acdlite/react-fiber-architecture

Why we need keys in react?
If we have same tags, then we should use key. React identifies uniquely with the help of keys. If we have same tags in react and we are rendering one of it, Without keys react doesn't know which tag to render. So we need keys in react.

Can we use index as keys in react?
React doesn't recommend index. What if we have no unique keys, then we can use index.
Unique key is the best way and good way to use it. If we dont have unique key, then index key is the last resort. No key is not acceptable. 
If the tags are different, react uniquely identifies. No need key for this. 
If we have same tags, then we should use key. 
.No key(not acceptatble)<<index key(last option)<<unique key (best practice)

What is props in react?
Props is properties. Whatever we pass in html as attribute is a props. 
Pass props means passing properties or data into our functional or class component. 
We pass data inside function through arguments and parametes.
We pass in arguments. Receive parameters.
Prop is just a normal function parameter. 
Difference is that react wraps up all the properties into the variable called props. 
Can we rename props? NO we can call anything like properties, parameters but props is the common usage.
It is like a function call like an arguments passed in  js but in react we call this as props.
When u pass in any props to the functional component, it is received as parameter over here which is props.
This props can be used like any other variable.

What is config driven UI?
When we build  a real life app for different locations, we control our website with config.
This config is driven by backend api
Backend controls what type of website should look in kolkata, bangalore.
If a location doesn't have offers,  backend wont return any offer for that location. 