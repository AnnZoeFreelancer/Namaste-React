Let's Build Our Store
There are two types of layer 
    UI layer 
    Data Layer 
These two layers work together.

UI layer?
The view what we see is inside the UI layer.
JSX powers the UI layer and then cSS

Data layer? 
All the things that we do, passing the data from one componenent to another
DAta management between state and props. 
Context is a part of data layer. 

Bothe UI and data layer work together. All are happening over browser.

Handling data into our application is a very important thing when you have data in your application.
If we are building small application, it doesn't matter how we manage data. 
But if we have to manage full fledged production ready large scale application, handling data becomes critical.

All componies use library known as REDUX.

Why do we need REDUX?
We need redux to manage our data layer of the application. 

Why did we use context? 
To avoid prop drilling. 

Suppose if we have whole big application, IN this app if we have different components like header, footer, carousel, images, etc. 
We might need to pass data from one component to another. There might be top level component to small level component. 
If we want to pass data to  smaller components from our root, we might want to pass the data from one component to another component to another component. this is known as prop drilling. 

What is context? 
Context is a central place. Any component in your app can access your context and any compoent in your app can modify this context. 

But when your application grows alot, libraries like redux come into picture. 
We can keep context for lot of things, we did for user data. 
We can use context for themes like light theme and dark theme. 
All the components are reading from that single place context. 
We can have a cart context, wish list context etc. 

To manage our data properly, we can create our redux store. 

History of redux. 
Why do we use redux?? for data management.

When to use context and when to use redux? 
for small application context is okay. Some big application also uses context. But if your application grows, there would be so many context and it would be messy. 
Redux gives a proper way of managing, handling and modifying data. 
Some companies use alternative to redux.  Ngrx, mobex is alternative to redux.

When we install redux to manage our data of our application, we can have cons as well.
What is the big problem with redux? it is complex to set up. Comes with huge learning curve. 

Redux and react are completely different. 

Redux is required for large scale application where we need lot of data handling.

To make a full large scale application performant, react only cant do that, we need lot of other libraries and tools like bundler, packages, etc. We will be offloading our data management to redux. 

Redux has come up with redux toolkit. 
Redux toolkit is the new way of doing redux. 

What is difference between redux and redux toolkit? 
Redux toolkit is the standard way to write redux logic. It created to help three common concerns:
1. configuring a redux store is too complicated.
2. I have to add lot of packages to get redux to do anything useful.
3. Redux requires too much boilerplate code. 

Redux is a very complex old way so use redux toolkit.

Suppose we have a web application. Lets take our app. 
We are going to build the cart. 

Menu page will have restro info. 
If we click on the dish, it will add to cart. 

Cart will have header. 
all menu page will have an add button. 

What is redux store at the end of the day? 
Redux store is a big object which have different sections. 
Those sections are small pieces.

Just like our context, what components will be able to acces redux store? All compnents will be able to access redux store.

When you create a state variable using usestate in react, what is the scope ? it is restricted to component only.  It is local.

Props is a way we can get data into the components from parent. 
Store is a central thing. It is a separate entity out of the app. 
Web app is differnet. Store is differnet. 

Differnet way of handling data. 
State and props. Which are tied to component. Parent child hierarchy.
Context. Central place. Can access anywhere in our app.
Redux store. Central place. Can accessa anywhere in our app. 

Can we have multiple context? 
In redux we will have single store for holding everything. 
Ex. to hold login details, to hold cart items, theme information, authentication information etc. 

It is a whole large big store with lot of data. 

We will create logical separation in our store. Will create slices of our store. 
Each store will have different slices. 

What all slice can our app have?
User slice
authentication slice
cart slice 
theme slice etc.

Slice is a small portion of your store. Store is broken down into small slices.

Our components cannot directly modify the store. 
If i click on plus icon, I cannot directly modify the cart. 
I will have to dispatch an action. What action it wil be? Add item
There will be an action which is dispatched. 
When we click on this plus button, it will dispatch an action. 
Ex: we dispatch an action add item.
This action will call a function. This function will modify our cart. 

When we dispatch an action add item, this dispatch will call a function, the function will modify our cart.(slice of the store) 

Why not directly modify? 
when there is large application, we dont want random components to randomly modify our store. It will be complex. 

It is separation of concern. Modular. 

When we dispatch an action add item, this dispatch will call a function, the function will modify our cart.(slice of the store) 
This function is known as reducer. 

When we click on plus button, it dispatches an action, which calls the reducer function, which updates the slice of the redux store. 
This is the redux toolkit architecture. 

How to read the cart? 
Selector. If we want to read the cart, we have to call the selector and this selector will give you the information that will update the cart. 
Why is the name selector? I am selecting the portion of the store. Selecting the slice of the store. 

What is selector at the end of the day? Selector is a Hook. We have useSelector hook. 

When we use selector, it is known as subscribing to the store.  Cart component has subscribed to the store means cart is in sync with the store. Whenever my store will modify, my cart will automatically modify.  Whenever my cart is modified in the store, my cart in ui will automatically modify. 
CArt component is subscribed to my store using a selector. Whenever my store changes, the cart component will automatically change. 

Check video for diagram 00:54:00

We need one more extra library. Redux toolkit 
To install 
npm install @reduxjs/toolkit 
or 
npm in @reduxjs/toolkit

We need one more library 
npm install react-redux 

Why two libraries?
What is the job of redux? Redux core job is to maintain the store, maintain the slices. firs one is core library.
The other library is the bridge between redux and react. 

Lets create a store now. 
ConfigureStore comes from core redux library
What will the store contain, it will contain slices. 

Create store.js in utils folder. 
store.js
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore ({});

export default store;


How to provide this store to our app. We need a provider. 
Who uses redux store? Whole application or components? It is our choice.  We are going to provide for whold app. 

OUr root component is app layout. So provide the store to all my app.  Like we did for usercontext. 

How to provide? Wrap whole app in provider. We are providing the store as a prop inside provider.
We will import a provider component 
import {Provider} from "react-redux";
import Store from "..utils/store.js";
<>
<Provider store={store}>
....
</Provider>
</>


rtk is the shortform of redux tool kit

In The provider prop name is very important.  <provider store = ""> Value of it is not important we can use wheatever we want. 

store.js
OUr store should contains slices. 

Lets create cartSlice.js
import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice ({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: ()=>{

        }
    }
})

initialState is initial value of the cart. 
HOw will i modify our cart? By creating reducer function. 
When are these reducers called? on dispatch of an action. 
What are the actions inside my cart? add item
What is reducer at the end of the day? it is a funciton 
Mapping between action and reducer happens @204 line code.  
reducers:{
        addItem: ()=>{
            
        }
    }
Here 
    addItem is the action when that reducer function needs to be called. 
    ()=>{} - this is a reducer function 

Reducer function takes in two things, first is the state and another is action payload. 

reducers:{
    addItem:(state,action)=>{

    }
}

state is the initial state. 
action is the data which is coming in. 

If i have an item, how to put inside state. We have to push it. 
state.items.push(action.payload);


reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload):
    }
}

On click of the the button we will pass the data right, that data will be received in action.payload.

The state over here is always the previous state. initial state. 



import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice ({
    name:'cart',
    initialState:{
        items:[]
    },
   reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload):
    }
}
})


Can we have more actions and reducers. Yes lets see. Lets have clear cart also.

clearCart:(state)=>{
    state.items=[];
}

Lot of people make this error. This function doesn't return anything. This takes the state and directly modifies it. 

import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice ({
    name:'cart',
    initialState:{
        items:[]
    },
   reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload):
    },
    clearCart:(state)=>{
    state.items=[];
    }
}
})


For creating a slice inside our store, we will need createSlice, that will have a name and initial state. 
Thenwe have reducers, each reducer has an action and reducer function. This reducer function will modify the state, like howerver i want to and we can write whatver logic we need to write here. 

To removeItem 

removeItem:(state,action)=>{
    state.items.pop();
}
This action is basically the action we will dispatch from our main component. We can write a logic of which needs to be removed. by making a particular index. here we just popping out from the last. 
To export cartSlice.reducer. Not reducers. Reducer will combine all and send as one reducer. 
We have to export actions.

import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice ({
    name:'cart',
    initialState:{
        items:[]
    },
   reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload):
    },
    removeItem:(state,action)=>{
    state.items.pop();
    },
    clearCart:(state)=>{
    state.items=[];
    }
}
})

export const{ addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

Behind the scenes, it would be something like this. , Whenever we create a slice, this cart slice is like a big object. 
This object has 
actions: {
    additem,
    removeitem,
}
reducer: reducers
 To export my actions, i have to export my reducers. We have to export actions by name because we have bunch of actions. 

export const{ addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;


In store.js
We have to put slice inside our store. cartSlice is exporting reducer by default. We hvae to put add all these reduces inside our store.

import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
    },
});

export default store;


//create store
    -- imported from configureStore() imported from RTK(reduxTookKit)
Provide my store to app
     -- provider component  = key we passed from is {store}  imported from react-redux
Created slice 
    -- createSlice() api was used to create it.  imported from reduxToolkit
    Createslice needs, a name, initial state, reducers, 
    REducer is an object that contains action and reducer function corresponding to that action.
    What are the arguments to the funtion, state and action\
    How do i modify my state? we will directly modify our state. {state=action.payload}
How do i export my reducer?  We have to export action and reducer. We export actions by destructuring it.
export const = {addItem,removeItem} = carSlice.actions;
export default cartSlice.reducer;

Put that slice into store
- {reducer:{

}}

In our app we will be making lot of slices and each slice will be exporting its reducer. Suppose we have user slice, cart slice, each slice will export our reducer and all the reducer will into the reducer object. 

reducer:{
    cart:cartSlice,
    user:userSlice
}

Name of the object is reducer and not reducers. 


Subsribe to our store. How to subscribe to our store? using useSelector. UseSelector is basically a bridge between react and redux so it comes from react-redux library. This hook gives direct access .

In header.js
<Link to "/cart">
<li>Cart - {cartItems.length} items</li>
</Link>


import {useSelector} from "react-redux";

const cartItems = useSelector( store => store.cart.items);


restaurantMenu.js
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";

cnst dispatch = useDispatch();
const handleAddItem = ()=>{
    dispatch(addItem("grapes")); //dispatch action, pass the payload(pass in some data to it) 
    //this add item will come from cartSlice and dispatch comes from hook called useDispatch(imported from react-redux)
}
<div>
    <button className="p-2 m-2 bg-green-100" onClick={()=>handleAddItem()}> Add Item </button>    
</div>

When we create store and slices, all api comes from core react tool kit.  configure store, createSlice are store related functions. 
When we use dispatch, provider, selector, these are related to components and they are imported from react-redux. 
OUr component is using useSelector, useDispatch, provider. 


Lets create add item button in menu list  in restaurantMneu
const dispatch = useDispatch();
const addFoodItem = (item)=>{
    dispatch(addItem(item));
}

<button className="p-1 bg-green-100" onClick={()=>addFoodItem(item)}>Add</button>

Now when we click on add, it adds the item to the cart.

Go to app.js to configure routes 

{
    path: "/cart",
    element: <Cart/>
}

create cart.js component
const Cart = ()=>{
    return <div>
        <h1 className="font-bold tex-3xl"> Cart Items </h1>
    </div>
}
export default CArt;

How to get cart items from store? useSelector hook. 
import {useSelector} from "react-redux";

const Cart = ()=>{
    const cartItems = useSelector(store=>)
    return <div>
        <h1 className="font-bold tex-3xl"> Cart Items </h1>
    </div>
}
export default CArt;

*IMPORTANT* What is useSelector used for? to subscribe to the store. 
This is the place you will tell, what you are subscribing to. 
    const cartItems = useSelector(store=>store) //it is subscribing to the whole store 
    const cartItems = useSelector(store=>store.cart)  //it is subscribing to the cart slice
    const cartItems = useSelector(store=>store.cart.items)  //it is subscribing to the cart items

We can also do like the below. but this is not performant.  when cart is subscribing to the whole store.  because everytime my store changes, my cart will change. It will rerender my component. 
Store in a large scale production ready app, store is huge. so it is not a good practice.
const store = useSelector (store=>store)
const Cart = ()=>{
    return <div>
        <h1 className="font-bold tex-3xl"> Cart Items - {store.cart.items.length} </h1>
    </div>
}
export default CArt;
     

We have to subscribe to the specific portion of the code. It will be a major performance improvement. 
Always subscribe to specific portion of the app. 


const Cart = ()=>{
    const cartItems = useSelector(store=> store.cart.items)
    return <div>
        <h1 className="font-bold tex-3xl"> Cart Items </h1>
    </div>
}
export default CArt;


Create FoodItem.js 
 import {IMG_CDN_URL} fro "../constants";

 const FodItem=({name,description, cloudinaryImageId,price})=>{
    return(
        <div>
            <img src = {IMG_CDN_URL + cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{description}</h3>
            <h3>Rs.{price/100}</h3>
        </div>
    )
 }

export default FoodItem;

import food item in cart.js 
<FodItem items {...cartItems[0]}>
Now one component will work. 

Now lets map all the items. 
<div className="flex">
{cartItems.map(item=>
<FoodItem key={item.id}{...item}/>)
}
</div>


Create clear cart 
import {clearCart} from "../utils/cartSlice";
const dispatch = useDispatch();
const handleClearCart = ()=>{
    dispatch(clearCart());
}   
<button className = "bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}> Clear Cart</button>

Read about Thunks, middlewares, RTK query. These are less used advance things. 

Redux dev tools - chrome extension 
It will make the developer experiece very easy. 
We can see what happens to action, state, slice items etc. We can see the diff between two states. 
It is very helpful while debugging the application. 
It is tracking each and every thing when we add, cleared data as well. 
We can play this. UI will show it one by one. We can slow the speed. 
Redux tool kit is tracking all the small things. 
Even the things we add from the different restaurants are tracked. 
We can skip some actions as well. If something break inbetween, we can debug it in that particular point. 
We can skip the action. and play skipeed items wont play. 
If the skip the clear cart portion, In the Ui it will not the show the part where we cleared the cart. It will keep on playing the items we added. 

It even gives us test cases for the reducers. We cannot use these test cases without modifying it. We cannot directly use the test cases. We can debug alot. Reset, Revert, Inspector, LogMonitor, chart etc. 
Read the redux documentation.  
Check the diagram as well.  

