Time For the Test
HOw to test React Application with test cases 



People uses something known as enzyme. Not covering it here.
Enzyme is the older way of writing test cases.

React Testing Library 
It is built on top of jest. It uses jest behind the scenes.
It better to migrate to react testing library. 


How to setup testing framework in react. 
We did not use create react app because it abstracts a lot of things from us. 
We integrated parcel, babel, browser list etc. one more left is setting up testing in create react app

Why do we need test cases? 
When we develop our app, we check our performance of our app, maintainability, quality etc.
Generally when we build large apps, it is developed by many people, one person's change might affect another person's code. 
So we write test cases to ensure, our code is properly intact and passes our test cases and making sure it doesn't break the existing code. 
Testing gives us confidence that we are not breaking the existing code. It helps us in maintainablity. 

Test driven Development: We write test cases even before we write our code. 
Generally companies dont follow test driven development. 
Is test driven development bad or good? It is very good.

When we do test driven development, the development process and time will be very slow. But it gives quality. So companies avoid it. 

Ex: if we want to create a function sum. 
First we have to write test case. 
test("check sum of 2 numbers",()->{
    expect((sum(2,3)),toBe(5));
    expect((sum(2,3)),toBe(5));
    expect((sum()),toBe("Please check arguments"));
})

export const sum=(a,b)=>a+b;

Now we will make sure our sum function is properly written and it wont break. 
It will take so much time. 


What are different type of testing?
Manual testing 
It requires human. Not efficient.

Automation testing - Tools like selenium
it is code testing our code. 

End to end testing 
It will test the whole flow. It will simulate the user. There is something known as cypress.
It requires lot of effort. It covers entire user journey.
Most of the time this part is offloaded to qa team.
There is somthing called HEadless browser - It is kind of like actual browser.It is invisible. Without viewport, without ui. 

Unit Testing 
Core job of developers. 
Testing small units. 
Ex: to check whether our card is loading, or header or logo etc. 

Integration testing 
Testing the integration between components. 
ex: if we search for a restaurant, the ui should change and display the searched restaurant. 

We will cover unit and integration testing in today's session. 

We have somthing more like regression testing, smoke testing, performance testing, load, blackbox etc. 

Developers are mostly concerned about unit and integration testing. 

REACT TESTING LIBRARY. 
This library is a replacement for enzyme. 
React testing library is a part of testing library. 
Testing library offers testing for react, angular, vue, preact, etc. 


We are using jest. 
Jest is a delightful javascript testing freamework with a focus on simplicity. 

React testing library uses jest behind the scenes. 

Set up react testing library 

Install testing library
npm install --save-dev @testing-library/react

Install jest 
npm i -D jest

Check package.json file. You will see testing library and jest. 
Latest version of jest is different than previous version of jest. Here we will see latest version of jest. 

Configure Jest 
Create jest.config file . We use npx because i just need to initialize once. 
Why we need once? when we create it will create jest.config file 
npx jest --init

It will ask use typescript? NO
Choose the test environment. jsdom
Do you wnt jest to add coverage report? Yes
Which provider should be used to insturment codr for coverage? babel
Automatically clear mock calls, instance, contexts and result before every test? yes

It will create jest.config.js 

Set up commands. How to run these test cases? 
Go to package.json 
"test":"jest"

npm run test 

Got error as of jset 30 "jest no longer shipped by default. Saying we have to install jsdom separately.

npm i -D jest-environment-jsdom

Now we dont have any errors. but it says we dont have any test cases to test. 

Create first test file. 

create folder __tests__  It is also known as dunder. 
create file sum.test.js

Convention is filename.test.js 

All files under __tests__ folder are considered as test files and all files with .test.js considered as test files. 

Write first test case for sum

Test will take first argument as name of the test, second argument is the function. the code that it will execute. 
test("Check sum of two numbers",()=>{});

npm run test
It will show one test case passed. 
Here we are not returning anything. 


Every test cases should have expectation or assertion. 
import {sum} from "../sum"
test("Check sum of two numbers",()=>{
    expect(sum(2,5)).toBe(5);
});

What is this test and expect? We dont import these. Long back we used to import the test and expect also.

Let us run test 
npm run test 
It failed. saying jest failed to parse a file. It is using non-standard javascript syntax. 
Cannot use import statment outside a module. 

The problem is normal js file doesn't understand import. How to make sure it understands it? 
Basically we will need to take help of babel in this. 

Install babel-jest
npm install --save-dev babel-jest @babel/core @babel/preset-env

jest babel config. 
create babel.config.js
 or 
 we can use .babelrc 
 we used .bablerc file to use console log. 
 

 in babel.rc
{
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

It throws error why? 
babel rc requires json. Json and js objects are NOT same. They look same but they are different. 

Json takes in double quotes 

{
  presets: [['@babel/preset-env', {targets: {"node:: "current"}}]],
};

{
  "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
}

run the test case now 
npm run test
It failed again . expected: 5 received :7

Test is running fine. We wrote the test case wrong. If we change the value then 
all the test case are success. 
There is something known as not to be in test cases. check it out. 

This is javascript testing. 

Recap: 
Install React Testing Library
Install Jest
Configure Jest 
Install jest-environment-jsdom
Create my first test
Configure babel 

We gave yes to collect coverage. You can see multiple files get changed. It is coming from coverage folder. It gives us the coverage report. It says how much code have we covered. How much test cases have we writen. 

These coverage files is needed only in the local machine, we dont want to push it to git. So ignore this folder in gitignore file. 
 Add
 /coverage 


UNIT TESTING 

Test cases for header 
1. load on header 
2. cart item should be 0 
3. Check online 

Lets create a file header.test.js
Now we will write test cases in react. 
 Make the names descriptives when writing test cases. 

import Header from "../Header"
 test("Logo should load on redndering header",()=>{
  //Load Header
const header = render(<Header/>);
console.log(header);
  //Check if logo is loading 
 })
 Our test code is running inside the jsdom not our browser. Js dom is like a container small maching running our code. In that machine we will just load our header. We wil use something known as render. Just render my head component. 

render() is a special function given by testing library. 

If you run this, you will get error saying it doesnot understand jsx. 

Who is the saviour here Babel 
To make it understand jsx, we have to install npm i -D @babel/preset-react 

and 
add in babelrc config 

{
  "presets": [
    ["@babel/preset-env", {"targets": {"node": "current"}}],
    ["@babel/preset-react",{"runtime":"automatic"}]
  ]
}

We got error, because the logo in header is in png. It does not understand png. If i remove logo and add url it will work fine. 
So we have to figure out to work around. jsdom doesn't understand png but it understands javascript. 
In our testing when something breaks, we create a mock out of it. We will create a dummy image.js
export default "dummy.png";

How will our code get to know we will use dummy.png. Who will help us ?  Jest 
In jest we will add a configuration. There is something known as module name mapper
ModuleNameMapper is the place where we will tell jest  whenever you see a png image anyplace in our app, replace it with this dummy image that we are creating now. 

moduleNameMapper: {
    "\\.png": "../mocks/dummyLogo.js",
  },

  \\means any png

To include jpg as well then 
moduleNameMapper: {
    "\\.(jpg|png|svg}$": "../mocks/dummyLogo.js",
  },

When we run it throws error again saying react-redux is not found. Your header does not have a provider. 
In our header we are using useSelector . It is subscribed but it does not have a provider. So it cant run. 
How to solve? 
We will add a provider. Go to test cases  and will create a actual store. 
Create a provider. 

import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Logo should load on redndering header", () => {
  //Load Header
  //   const header = render(<Header />);
  const header = render(<Provider store={store}></Provider>);
  console.log(header);
  //Check if logo is loading
});

When we run now, we again got error saying useHref() may only in the context of a <Router>component.

We used something known as router prvider, app provider, link. js dom doesn't understand link. 
So we have to give link and router. 
What is the api we used to create a router? what was the name of function? createBrowserRouter. 
Will this browser router work in test cases? because it is not a browser it is a separate container. 
Instead test library gives staticRouter. StaticRouter comes from server. This router can work without browser. 

import {staticRouter} from "react-router-dom/server";

import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on redndering header", () => {
  //Load Header
  //   const header = render(<Header />);
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  //Check if logo is loading
});

<!-- 
Now we run and it passed. 
Check video 02:13:00
Getting error in moduleNamemapper area. Rewind and check for that.  -->
Error and solution are below.

**ERROR **

sts:       2 passed, 2 total
Snapshots:   0 total
Time:        7.071 s
Ran all test suites.
PS D:\Shared\Namaste-React> npm run test

> namaste-react@1.0.0 test
> jest

 PASS  src/components/__tests__/sum.test.js   
 FAIL  src/components/__tests__/header.test.js
  ● Test suite failed to run

    Configuration error:

    Could not locate module ../assets/img/logo.png mapped as:
    ../mocks/dummyLogo.js.

    Please check your configuration for these entries:
    {
      "moduleNameMapper": {
        "/\.(jpg|png|svg)$/": "../mocks/dummyLogo.js"
      },
      "resolver": undefined
    }

      1 | import React from "react";
      2 | import { useState, useContext } from "react";
    > 3 | import logo from "../assets/img/logo.png";
        | ^
      5 | import useOnline from "../utils/useOnline";
      6 | import UserContext from "../utils/UserContext";

      at createNoMappedModuleFoundError (node_modules/jest-resolve/build/resolver.js:759:17)
      at Object.require (src/components/Header.js:3:1)
      at Object.require (src/components/__tests__/header.test.js:2:1)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 | 
 sum.js   |     100 |      100 |     100 |     100 | 
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        6.275 s
Ran all test suites.

**SOLVED BY**
In jest.config.js
 moduleNameMapper: {
    "\\.(jpg|png|svg)$": "<rootDir>/src/components/mocks/dummyLogo.js",
  },


//Frm 02:14:00 
Now we have to console.log(header) with us in console. 
DOM is a big tree structure, how to find logo. In browser to find it, we use document.getElementById, document.getElementByTagName. 
Similarly we  have helper functions. We use something like getBy, GetAllBy ...  in header.test.js file. 
  const logo = header.getAllByTestId("logo");

We use test id for uniqueness. This test id we did not write during development. So we will write it now. In header.js file.
  return <img data-testid="logo" alt="logo" className="h-full" src={logo} />;
 
Our browser recognized this id. But jest will understand data-testid. 

Lets log our logo in console and see. 
console.log(logo);

In Terminal we can now see. html element in the beginning and src:"dummy.png"  in the end.
These are the props that we wrote. Thats how we debug internally. 
It has rendered our dummy img. in the place of src. Module name mapper. 
Now we can assert our src. 
expect(logo.src).toBe("dummyLogo.png");
What we are trying to see logo.src to be dummyLogo.png.
Now we got error.. saying Expected : dummyLogo.png Received : undefined. 

 ● Logo should load on rendering header

    expect(received).toBe(expected) // Object.is equality

    Expected: "dummyLogo.png"
    Received: undefined

To check 
expect(logo.innerHTML).toBe("dummyLogo.png);
o/p undefined

We will check with 
expect(logo.children).toBe("dummyLogo.png);
o/p undefined

expect(logo.props).toBe("dummyLogo.png);
o/p undefined


What we wrote is getAlByTestId - It means anywhere im using logo, get all of them. It is returning us array of html image elements. 

If I console.log(logo[0])
It failed again.  But we have got the output, where it is no more an array.  So we should write 
 expect(logo[0].src).toBe("dummyLogo.png");

 Let us run our test again, it failed again. 
  Expected: "dummyLogo.png"
    Received: "http://localhost/dummy.png"

To make the test pass, we have to give the proper path
  expect(logo[0].src).toBe("http://localhost/dummy.png");


So far we have test whether the logo is there or not. 
Pending : Online and cart items. 

How to write for Online. 
we will have to add a testId in header.js file
 <span data-testid="online-status">{isOnline ? "🟢" : "🔴"}</span>

Amd in header.test.js file the below code.

test("Online status should be green on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  //Check if status is online
  console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("🟢");
});

If we use getAllByTestId we have to fetch by array. Instead if we write getByTestId, it will return only one. 
It is similar to getElementsByClassName vs getElementById.

useOnline is testing our online hook also. 
Lets save and run. It passed.

Now lets check if cart is having 0 items. 
If we have to check the cart, we have to check the useSelector also. 

In header.js
 <li className="mr-16 text-gray-800 text-base font-medium items-center pl-6">
              <Link data-testid="cart" to="/cart">
                CART - {cartItems.length}
              </Link>
            </li>

In header.test.js


test("Cart should have 0 items on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  //Check if cart is having 0 items.
  console.log(cart);
  expect(cart.innerHTML).toBe(" CART - 0 ");
});


It passed.
We can write all the three test cases as one. But it is better to do it separately.So that it will have a clear distinction. 


Magical thing for helping for debugging alot. 
To see what is rendered in that component? It is very helpful. 
If we mispell and save the the id. 
  const cart = header.getByTestId("cart1");

  It will show the normal html file which is being rendered. 

  The type of testing we did was unit testing. 


Lets go to integration testing. 
What should we  test in integration testing. Ex: Search
If we search it is affecting lot of components. 


import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Search Results on Home Page ", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
});


When we run it. we got errot 

ReferenceError: fetch is not defined

Fetch is a browser thing. Jest does not understand it. So we have to mock our api call. 
We will write somthing known as global.fetch and we will use a dummy function given to us by jest called jest.fn(). 
Fetch bascially returns a promise. So we will do a promise.resolve or promise.reject to check for failure and success cases. 
We will resolve with a json data.  Fetch returns us a readable stream. We convert that to json. 
And json is a promise. so we have to resole this too. 
And then we have to pass the data that we have to mock.

When we fetch, the call is returning the dummy data. Go to inspect, Network tab, then fetch/XHR tab and reload the page 
you will get the fetch details of dummy data. Copy it. 

Let us grab the dummy data and lets create a dummy file data.js with the dummy data  inside mocks folder 
Now import retaurant data into search.test.js

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: Promise.resolve(RESTAURANT_DATA),
  });
});


When we run we got error 
TypeError: Cannot read properties of undefined (reading 'json')

May be we will have to show the expect code. 
Here in global fetch we are not returning the promise. So we got error
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: Promise.resolve(RESTAURANT_DATA),
  });
});

When we run 
Now it says data.json is not a function. 
TypeError: data.json is not a function

How to make this as a function ? 
global.fetch = jest.fn(() => {
  Promise.resolve({
    json:()=>{return Promise.resolve(RESTAURANT_DATA)},
  });
});

Becasue data is a function that returns a promise. Json is a function that returns a promise. 

Lets run and check. 
It run succesfully but still we got error saying  error in the below line. 
console.error 
 setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

 Lets expect something.

 In Body.js
  <button
          data-testid="search-btn"
          className="h-12 rounded-md w-1/12 ml-2 "
          onClick={() => {
            //filter data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >

   
In search.test.js
  const searchBtn = body.getByTestId("search-btn");
  console.log(searchBtn);

  When we run we get error saying 
    TestingLibraryElementError: Unable to find an element by: [data-testid="search-btn"]

    Because it is loading shimmer. 
    So we should test shimmer also. 
    Let us create test case for shimmer. 


    import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Home Page ", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  console.log(shimmer);
});


And in shimmer. js 
 <div
        data-testid="shimmer"
        className="flex flex-wrap justify-between pt-10 my-10 mx-20 rounded-md border border-solid ring-offset-1 ring-offset-purple-50"
      >

Ran success.

Typing npm run test again and again is painful so lets do hmr for testing.
Add this line "watch-test":"jest --watch" in package.json. 

Package.json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "NamasteReactCourse",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest",
    "watch-test":"jest --watch"
  },

if we run 
npm run watch-test 
It will keep running now. 

Expect in shimmer 
  expect(shimmer).toBeInTheDocument()

WE get error. 

WE have to install another library
npm i -D is throwing error so used npm i alone. 
npm i @testing-library/jest-dom

import "@testing-library/jest-dom";

Now it passed. 
But it is not a good way to write that. So lets see 
  expect(shimmer.innerHTML).toBeInTheDocument();

import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Home Page ", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");

  //   expect(shimmer.innerHTML).toBeInTheDocument();
  expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});


We have to check restaurants should load on homepage. To avoid shimmer we have to wait. To do that, wait till i have search button on my screen.
jest gives us
 await waitFor(()=> expect{screen.getByTestId("search-btn")})

Now data is loading. 

To check how many restaurant loading. Go to body and add id 


test("Restaurants should load on Home Page ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");
  console.log(resList);
  expect(resList.children.length).toBe(15);
});

Search for string (food) on Homepage

There is a fire event given to us by testing library. 
the event we want to fire is onChange event.
We had something known as synthetic event. Callback received synthetic event. What did we use to do to find the value of an event is e.target.value 

 fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

We are not typing in search bar as food, we are mocking the event, and this fire event will automatically type in it. 

So far we have done component testing, unit testing, integration testing. 

If i click on add our cart should update. 

import Body from "../Body";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import RestaurantDish from "../RestaurantDish";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantDish />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("CART - 1");
});

Revision: 
We have tested to 
Check our store. 
Whether our store is built properly or not. 
If we click on add button, it dispatches an action, which calls a reducer function which updates the slice of the store. 
And my cart component is subscribed to my store using a use selector. 
We have tested whole redux that we did today. 
Install react testing libray
Install jest npm install jest 
Configure jest npx jest --init
Install jest-environment-jsdom
Created our first test 
Configure babel - preset-env 
wrote expect sum test 
Wrote react test cases  but it failed so we installed  package
Installed package preset react 
Then we did provider. 
We need to give react redux to mock 
Added router from react-router-dom/server 
Then our logo failed, we fixed our logo by creating mock image. Something else break then 
Fetch, we fixed our fetch. Global.fetch. 
We wrote whole fetch function to resolve two promises. 
We saw how loaded will be loaded. 
We saw what is test id. 
We saw hmr for testing  --watch
Error - warning we ignored (act )
Saw how to test shimmer 
ToBeInTheDocument 
WaitFor - Suppose if we have to wait for shimmer to load, we have to do await wait for and we have to add in async.
We saw how to fire event. 
Fire change event,
Fire click event  - e.target.value , we updated the value of it. 
