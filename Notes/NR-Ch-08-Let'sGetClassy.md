Class based Componenents
React initially started with class based components. No functional componenet and Hooks. Hooks and functional component came recently.

Class based has more code, less maintainable. 
Class based componenents are no longer used these days in new projects.
Older projects might still have class based components. So its always good to know what is what.

Earlier we saw, routing and nested routes.

What tag did we use on this button? Link tag
Where do we import the link tag from? react-router-dom
What at the end of the day link tag is using? anchor tag
What hook did we use to read this url? useParams
What function did we use to configure our routing? createBrowserRouter
What component that we use to provide the router in our app? RouterProvider
Suppose if we have children, where did this children gets injected? Outlet

React router dom has lot of routers, 
Most recommended one is createBrowserRouter.
Others are hashRouter, MemoryRouter etc. Check it out. on reactrouter.org

We made route/about
If we have to made a about us page, i want to make the profile section inside it? 
How will you make route/about/profile? children of children

 path: "/",
            element: <AppLayout/>,
            errorElement: <Error/>,
            children: [
                {
                    path: "/about",
                    element: <About/>,
                    children:[{
                        path:"profile", //dont give /profile it will consider as //localhost:1234/profile
                        element: <Profile/>,
                    }]
                },
//dont give /profile it will consider as //localhost:1234/profile
just write profile. it will conver it to parentPath/{path} =>localhost:1234/about/profile

Create Profile component
const Profile()=>{
    return (
        <div>
            <h1>Profile </h1>
        </div>
    );
};
export default Profile;
import Profile from "./components/profile";

Whey did we write / in about ?? path:"about" will also work.
slash / means from the root. 

It doesn't work. because, they are rendered inside outlet. 
create outlet in about.js.
import {Outlet} from "react-router-dom";

ADd <Outlet/> in about.js 

Or withou outlet how to do?
import Profile from "./components/profile";
and we use <Profile/> in about.js 


Class based component.

Functional  component  for profile is 
const Profile()=>{
    return (
        <div>
            <h1>Profile </h1>
        </div>
    );
};

Class component for  Profile

Fuctional component at the end of the day is a normal function
Class based component at the end of the day is a normal js class

We have to tell react that it is a class based component

class Profile extends React.Component {

}
Where REact.component come from?It came from react component.
import React from "react";

In functional component we write a function and we return some jsx with it.
The most important part of class base component is render method.
We cannot create class based component without render method.
Render method is the only mandatory function for class Component.

Render method returns some jsx.
class Profile extends React.Component {
    render(){
        return <h1>Profile class component</h1>
    }
}
export default Profile;
We export similar to functional component.

Whatever we return from this will be injected into the dom. 
We import in the similar way as we do in functional component.
We use it in the same way we use in normal component. 


We need to write keyword class. and the name of the class. and we use extends. 
Why do we use extends? because it is a class that needs to inherit some properties.
OUr class is inheriting some properties from react.component.
ONly mandatory function is render method.
Render method returns some jsx and it will then injected in dom. 
we export and import in a similar way.

Use both profile class and functional compnent in about us page and check in browser.
<ProfileFunctionalComponent/>
<ProfileClassComponent/>
Suppose if we have to pass props 
<ProfileFunctionalComponent name={"Akshay"/>
if we pass here 

we receive it here down.
const PRofile = (props) =>{
    return (
        <div> <h2>Name: {props.name}</h2></div>
    )
}


in Class component we pass usng this.props
<ProfileClassComponent name={"Akshay"}/>
<h2>Name: {this.props.name}</h2>

What react did?
React tracks this is a class based component.
In functional, we say it will rerender.
Rendering terminology nomenclature came from class component because there is a render method. 
When react tracking our component, it just takes the props, attaches it to the this keyword of this class instance.

When we pass in class based component, when react sees <profile name={"xyx"}> react will collect all these props and will attach it o profile class and attach it to this. {this.props.name} This is how we pass in props.

To create a state inside functional componenent
import {useState} from "react";

create state variable 
const [count]=useState("0");
const [count2] = useState("0");

To use that variable 
<h3> Count:{count}</h3>

Is writing setCount mandatory? NO we are not setting it anywhere so not needed.

To do  the same in class. 
To create a state in class component
Class has a constructor.
HW: When you have constructor in your class, constructor takes in props.We have to do super(props). Why do we do superprops? 

constructor(props){
    super(props);
    //Create state over here
}

Whenever a class is invoked, whenver a compononent is rendered, a constructor is called.
To create state in class component react gives access to this.state

this.state= {
    count : 0
}

state is object having the count variable
To use state 
<h2> Count: {this.state.count}</h2>

Can we destructure it?Yes it is a javascript
const {count} = this.state;

In class based, all the variables are in one object.

this.state= {
    count : 0,
    count2 :0,
};

Whole state is a one big object that maintains the whole state.
In functional component also, react behind the scenes uses one big object to maintain all the states.

In functional 
const [count,setCount]=useState("0");
To setCount
<button onClick={()=>setCount(1)}>Count</button>

In class 
<button onClick={this.setState(count:1,)}>SetCount</button>
We do not mustate/change state directly. 
When we use setState, react will render and do the reconcilliation automatically.
 In setState, we send a modified object. 

In functiona
<button onClick={()=>{
    setCount(1)
    setCount2(2)
    }>Count</button>

IN class
<button onClick={
    this.setState({count:1,count2:2})}>SetCount</button>
 
 If we have multiple state, it will just modify partial  objects that needs to be changed during setState. The rest of it will not change.

 In setState we dont know what part of state we are setting, in setCount we know what part of state we are setting

 in what sequence these are caled
In funcrional
const [count,setCount]=useState("0");
console.log("render function");

Will it print everytime my function renders?  Yes 

In class
console log in constructor 
cnsole log in state definition area.

We have life cycle,
First constructor will be called, then render will be called. 

In funcitonal
Where do i do my api call in functional component? useEffect
When is my useEFfect called? AFter every render.
Why it is a great place to do api call? To make our application fast. 
We render whatever we can to use the default state and late on we update it.
REnder and update. When we update it will rerender. 
useEffect(()=>{
    //api call
    /conosle.log("useEffect");

});
console.log("render");

In class
We have something caled componentDidMount()
This will be called after render.
componentDidMount(){
    console.log("comomponendDidMount");
}

Whenever a class based component is loade, life cycle method is called
constructor is called first
Then component renders
Then componentDidMount is called.

o/p constructor
render
componentDidMount

What is the best place to make the api call? 
inside componentDidMount
first We need to render it then we will update the api call later.  So componentDidMount is the best place to make the api call. 
There are more life cycle methods. We will see the most important ones only.

Lets convert about us component to class based component

class About extends React.Component{
    render(){
        whatever comes inside return will come here
    }
}
export default About;

React.compnent comes from react library. 
some people use this 
import { Component} from "react";
class About extends Component{} some people will write like this.

constructor(props){
    super(props);
}
componentDidMount(){
    console.log("componend Did Mount");
    //api call  best place is here because it is after render.
}
render(){
    console.log("render");
}

If we rename about.js as parent constructor parent render and parent component did mount
In profileClass.js file child constructor child render and child componentdidMount
In what order these wil be called?
parent constructor 
Parent render 
child constructor 
child render 
child componentDidMount
parent componentDidMount

when the parent render is done, then it finds there is a component inside it then child construcor is loaded and the render and didMount is done with child then parend comopnetDidMount will load.

What if i have two children how will it get called? 
parent constructor
parent render 
child1 constructor 
child2 render 
child2 construcor
child2 render 
child1 componetDidMount
child2 compnentDidMount
parent componentDidMount 

REact life cycle method
Check 01:49:40: diagram 

When react is rendering things, it does it in two phase,
first is render phase
second is commit phase

React first finishes the render phase. Render phase includes constructor and render method
commit phase is the place where actually react is modifying the dom. and compnentdidMount is called after the dom. after the initial render is finished. (ie) react updates the dom and calls the componetDidMount method.

Render phase or commit phase is fast? Render is fast. commit has to update the dom, updating is tough. 
React batches up things inside render phases for the children. 

If one of the child is making api call, started the commit phase, it will delay the render phase for the second child. 

All the child component render phase is finished. react will update the dom. 
Now dom is updated for children. commit phase starts.
first child componentDidMount will be called.
second child componentDidMount will be called.
parent componentDidMount will be called.

Lets make api call   to fetch user information
github user info 

aync componentDidMount(){
    const data = await fetch("url");
    const json = await data.json();
    console.log("child profile - compnentdidmount);
}
WE can make componentDidMount async but we cannot make useEffect async. homework : why?
How to put this data into UI. 
we have to create a state 
this.stat ={
    userInfo: {
        name:"Dummy",
        location:"Dummy",

    };
}

Lets push this data into state
aync componentDidMount(){
    const data = await fetch("url");
    const json = await data.json();
    this.setState({
        userInfo:json,
    })
    console.log("child profile - compnentdidmount);
}

Pass this name  with optional chaining while destructuring

<h1>Name:{this.state.userInfo.name}</h1>
<h1>Loacation:{this.state.userInfo.location}</h1>
<img src="{this.state.userInfo.avatar_url"}>
What are the sequence of method ? 
parent constructor
parent render
child constructor 
child render 
the phase above is called render phase

the phase below is commit phase
DOM is updated
api call
data is logged. json is logged in console
childComponentDidMount is logged 
parentComponentDidMount is called

THIS SEQUENCE WONT HAPPEN
 Lets see what will change.

parent constructor
parent render 
child construcotr
child render 
parent componentDidMount 
json is logged in
child componentDidMount 
child render 

parent componentDidMount is called before making an api call
Because react finishes your render cycles first then goes to commit cycles. 
We are using async, it will take some data to load. so it is calling in this sequence.

We have a setState so it will rerender the component. 
What is this rerender cycle is known as ? This is known as updating
Updating the component
When making api call, component is mounted, we need to update it. 
Whenever the setSTate is called, it updates. 
What will happen when we update? 
It will update the dom and it will call componentDidUpdate() method.

componentDidUpdate(){
    console.log("componentDidUpdate");
}

Mount will be called after first render.
Update will be called after every next render. 
Update will call render 
then it will update the dom. 
Then it will cal componentDidUpdate


constructor 
render
json
componentDidMount
rerender
ComponetDidUpdate 

There is also componentWillUnmount
It is like unloading it. 

componentWillUnmount(){
    console.log("componentWillUnmount);
}
When will unmout be called> when i go to some other page.

sequence will be
constructor
render
json
componentDidMount
rerender
component did update
select nex page. componentWill Unmout


Never compare react lifecycle method to functional component.
dont say useEffect is equivalent to componentDidMount(). It is not.

when we dont have dependency array in useEffect, it will be called after every render. 
if we have empty dependency array in useEffect, it will be called in initial render alone.

In class based, what will be called at first render, componentDidMount. 
After every subsequent render, it is updated so  componentDidUpdate will be called.

useEffect(()=>{},[count,count2]);
useEffect wil be called after everytime count changes. 

How to use this in class

After every render compunentDidUpdate will be called
componentDidUpdat(prevState,prevProps){
    if(this.state.count!==prevState.count || this.stat.count!==prevState.count2){

    
    }
}




I have to do something when my count changes, and have to do something else when my count2 changes. 
We use 2 useEffect. 
useEffect(()=>{},[count]);
useEffect(()=>{},[count2]);

in class we used to write two if else condition

componentDidUpdat(prevState,prevProps){
    if(this.state.count!==prevState.count){
    
    }
    if(this.stat.count!==prevState.count2){
    
    }
}

When will we use componentWillUnmout?
Cleanup? what type of cleanup? 
CompnentWillUmount is called when we are leaving the page. 
How many page that our application have? 1 page. SPA single page application
WE are just changing the component. 
When we go from home to about page or about to home page, we are changing the component.
Ther are lot of things we need to clear when we are changing from one to another. 

Sigle page applicatin also have cons in it. 
let us have a set Inteval in componentdidMount() method. 
componentDidMount(){
    this.setInterval(()=>{
        console.log("namast react"),1000});
    }


if i move from home to about page or contact page, set inteveal keeps calling it. 
if we again change, it is calling twice, it started two intervals. 
when we change the page, it is not reloading our page, it is just changing the component. it is reconciling.
It is a bad thing about reconciliation also. setinteval is calling thrice without our permission. 
what if we have setTimeout, it will call again. 
We have to take care of all the single things. 

WE have to clean up the mess. We have to clear the inteval
It will be written in componentwillunmount method. 
componentWillUnmout(){
clearInterval(this.timer);
}
"this" is shared with all the methods in the class.

If we refresh our page, it starts our interval. if we change our page, interval stops


What will happen if we create a setInteval in useEffect
if we change page, it is not stopping. why will it stop? because we are not cleaning up things here. 
How to destroy this in functional component? 
we can return a function from useEffect . this function will be called when we are unmounting the component.
return ()=>(
    console.log("useEFfect return");
    clearInterval(timer);
) 

sequence of call.
render
useEffect
useEffect return

WHen react was created we had many lifecycle methods. few were deprecated in 16.4 version.
in 16.3 version we had around 8-9 methods. 
in 16.4 version we had 5 lifecycle methods.

