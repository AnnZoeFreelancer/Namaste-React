hUI layer  is built by jsx. 
Data layer 

Who converts JSX to JS objects? Babel 
What is the object structure known as virtual dom. 
What is the role of virtual dom? Reconcilliation.
What is the diff calculated between? Between the renders it checks with the previous and new(current) virtual dom. 
Diff is synced with actual dom that we see in webpage. 
The whole ui layer is powered by data layer. 
What does data layer consist of in react? 
What is used? 
How the data within the application is maintained? 
It is the state and the props. 
We manage UI with state and props. 
Data is handled in state and props. 
What is the difference between state and props? 
If you have a container and you have a scope just within the container. It is known as state. Local variable.
What is props? prop is the value passed from one element to another element. Pass data from one component to another component we can use props. 

//Passing props
<!-- App Layout
    {state=user}
    - <Body user = {user}/>
        - <RestaurantCard user={user}>
            -<h4> {user}</h4> -->

This is like a chain. When we pass our data from parent to child and then to its child and so on. This is known as PROPS DRILLING. We are drilling all the components to passin the prop

React Developer Tools for chrome. Install it
ONce installed, you will get component and profiler in chrome inspect. 
It helps you to debug your app. 
This tool will help you in debugging data layer. 

What if we want to pass data from child to parent? 
There are various ways to do this. There are very less cases where you will need data from children to parent. 
We  can use local storage but it is not good way. 
We can build our custom hooks. we can read from anywhere. Just like we have useParams. 
Building hooks for all this things is not a good way as well. 

Is prop drilling a good way? It makes your code cluttered. 
If you have a hierarchy of two or three levels. it is okay to pass props. But for 10 levels, not a good way. 
What is the con of it? . 
We use redux to solve the problem. 
Disadvantage is - suppose if we have datapassing in from lots of components and if we change one single time then all components will get re-rendered. 

Suppose if our instamart has different components like about, details, team, product, careers. 
We can make different components but these are different  sections of our webpage. 
Can we make reusable components section? 

const Section = ({title,description})=>{
    return (
        <div className = "border border-black m-2 p-2">
        <h3 className = "font-bold">{title}</h3>
        <p>{description}</p>
        </div>
    );
};

const Instamart = ()=>{
    <div>
    <h1 className = "text-3xl p-2 m-2 font-bold>Instamart">Instamart</h1>
        <Section title = {"About Instamart"} description = {"This is the about section of instamart"}/>
        <Section title = {"Team  Instamart"} description = {"This team has 15 members "}/>
    </div>
}

To build show and hide feature 

const Section = ({title,description})=>{
    const {isVisible, setIsVisible} = useState(false);
    
    return (
        <div className = "border border-black m-2 p-2">
        <h3 className = "font-bold">{title}</h3>
        {isVisble? 
        <button className="cursor-pointer underline " onClick={()=>setIsVisble(false)}>Hide</button>
         : 
         <button className="cursor-pointer underline " onClick={()=>setIsVisble(true)}>Show</button>}
       
        
        {isVisible && <p>{description}</p>}
       
        </div>
    );
};

It should collapse other accordions when we show one accordion. 
Collapsable accordion.

If isVisible is true in 0ne section, it will be false to other two section.

We have to set the state of its sibling to false . how to do that? We cannot do that. We cannot directly modify the state of abother sibling component. 

Instead of maintaining hide show in children, we have to give the control to parent. so that it can access all children. 
This is known as lifting the state up. 



const Section = ({title,description,isVisible},setIsVisible)=>{
    
    return (
        <div className = "border border-black m-2 p-2">
        <h3 className = "font-bold">{title}</h3>
        {isVisble? 
        <button className="cursor-pointer underline " onClick={()=>setIsVisble(false)}>Hide</button>
         : 
         <button className="cursor-pointer underline " onClick={()=>setIsVisble(true)}>Show</button>}
       
        
        {isVisible && <p>{description}</p>}
       
        </div>
    );
};


const Instamart = ()=>{
    const [sectionConfig,setsectionConfig] = useState({
        showAbout:false, showTeam: false, showCareer: false,
    });
    <div>
    <h1 className = "text-3xl p-2 m-2 font-bold>Instamart">Instamart</h1>
        <Section title = {"About Instamart"} 
        description = {"This is the about section of instamart"}
        isVisible = {sectionConfig.showAbout}
        setIsVisible={()=>
        setSectionConfig({showAbout:true, showTeam: false, showCareer: false,})/>
        <Section title = {"Team  Instamart"} 
        description = {"This team has 15 members "
        isVisible = {sectionConfig.showTeam}}
        setIsVisible={()=>
        setSectionConfig({showAbout:false, showTeam: true, showCareer: false,})/>/>
        <Section title = {"Careers  Instamart"} 
        description = {" Careers "
        isVisible = {sectionConfig.showTeam}}
        setIsVisible={()=>
        setSectionConfig({showAbout:false, showTeam: false, showCareer: true,})/>/>
    </div>
}

What if we have two more sections? it is very bad code. This code is neither maintainable, nor readable, nor reusable. 
How to optimize this?

condition is we have to show only one at a time. 
We just need to track what i need to show.
there are many ways to do. 
We can create different keys  or indexes of our section. 
We have to create 
const [visibleSection, setVisibleSection] = useState("about");


const Section = ({title,description,isVisible,setIsVisible})=>{ 
    return (
        <div className = "border border-black m-2 p-2">
        <h3 className = "font-bold">{title}</h3>
        {isVisble? 
        (<div>
            <button className="cursor-pointer underline " onClick={()=>setIsVisble(false)}>Hide</button>
            <p>{description}</p>
        </div>
        ):( 
         <button className="cursor-pointer underline " onClick={()=>setIsVisble(true)}>Show</button>}
         )
        </div>
    );
};

const Instamart = ()=>{
    const [isVisibleSection,setIsVisibleSection] = useState("team")
    const [sectionConfig,setsectionConfig] = useState({
        showAbout:false, showTeam: false, showCareer: false,
    });
    <div>
    <h1 className = "text-3xl p-2 m-2 font-bold>Instamart">Instamart</h1>
        <Section title = {"About Instamart"} 
        description = {"This is the about section of instamart"}
        isVisible = {visibleSection =="about"}
        setIsVisible={()=>setIsVisibleSection("about")/>
        <Section title = {"Team  Instamart"} 
        description = {"This team has 15 members "
        isVisible = {visibleSection =="team"}
        setIsVisible={()=>setIsVisibleSection("team")/>
        <Section title = {"Careers  Instamart"} 
        description = {" Careers "
        isVisible = {visibleSection =="careers"}
        setIsVisible={()=>setIsVisibleSection("careers")/>
    </div>
}

In Profiler 
When we build large scale application with so many components in it. It becomes tough to debug. 
This profiler records the whole session. 
Profiler is watching and recording. Theis flamegraph shows what happens. 
It shows how much time every component took to load. 
With this small thing,we can make the app alot performant. 
You can see the shimmer. 
You can see Ranked, in order of time it took more to load. 

If we have user info 
const AppLayout = ()=>{
    const [user,setUser]= useSate({
        name: "Ann",
        email:"s@g",
    })
}

suppose if we have an api which takes username and password and returns the user info 
Where will you write the api call? useEffect

useEffect(()=>{
    //authenticate user
},[])

How to make the user info in my card? props drilling
If we wanted this user info in my header or all across my app? You can be stored in central state. 
we can store it in local storage, but local storage is not reliable. It is something inside browser.
Updating the local storage is a heavy operation. It is a pain. So we need to have the data in our react app. 
WE have to store it in central state. React gives us access to it known as react context. 
Some people use redux store. REdux is a shared state for whole app. any component can use the data without seeing things. 

there are something known as ngrx, modex etc. but react has its own.
Can we create global variable? React is not tracking it for reconcilliation process.

Lets create a context.
creating context in separate new file is a good practice.
UserContex.js

Creating context. 
import {createContext} from "react";

Create context at the end of the day is basically a function. It takes in some data that we need all across our app.

const UserContext = createContext({
    user:{    
    name:"Dummy Name",
    email:"Dummy@gmail.com",
}
});

export default UserContext;

To use Context 
import {useContext} from "react" ;
import {userContext } from "../utils/userContect";
 This useContext is a hook.
Can i have multiple context in my app? Yes. 
What all context we can create for foovilla? card, rating etc. 

const {user} = useContext(UserContext);

This will give us a user. 
{user.name}

State and props are tied to component. Context is not specific to any component.

We can just use it wherever we want. In header and footer 
Why do we need props when we can keep in context? State and props are tied to component. Conext is central store. 
We dont use context for everything. We use it for data when required in all our apps in different places. 
Context is like useState for whole application.  It is like a data store. 

How to use Context in class component. 
Import UserContext 

To use it, in my render function 
<UserContext.Consumer>
{(value)=>console.log(value)}
</UserContext.Consumer>
This UserContex.Consumer is consuming things up and it  takes in jsx which uses a function. This function will have value of whatever the value the context holds. 

<UserContext.Consumer>
{({user})=><h4 className="font-bold" >{user.name}- {user.email}</h4>}
</UserContext.Consumer>

we also have user context provider. in applayout
<UserContext.Provider value = {{user:user,setUser:setUser}}>
<Header/>
<Outlet/>
<Footer/>
</UserContext.Provider>
With user context provider,we can provide value, we can override the default value. 

This is hardcoded. But we want dynamic. User is dynamic. It will modify according to my useEffect. 
useEffect()
Whenever useEffect get modified. all places will get modified. 
We want to use our context data everywhere so we wrap it over header, outlet and footer. So that it is available everywhere.

What if we removed header from userContext provider?  We get dummy name. 
We can pass in different data in different portion of our app. Logically we should not do it. So wrap it will all inside. 

Import in body and 
const {user,setUser} = useContext (UserContext)
<input value={user.name} onChange={e=>setUser({
    name: e.target.value,
    setUser: "newemail@gmail.com",
})}>

It is like a two way binding. On Each key press it is modifying header, footer, card.

Ui and data layer works parallely and independently.