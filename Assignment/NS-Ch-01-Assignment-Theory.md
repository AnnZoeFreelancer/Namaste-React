**NR-CH-01-THEORY-ASSIGNMENT**

 ## What is Emmet?
  Emmet is a plugin for text editors. We can code in highspeed using abbreviations and short expressions. It will expand to a full code.

## Difference between a Library and Framework?
  - In an application, while writing the code, the user is incharge of the application flow when using library. But in framework, the framework is incharge and decides when to call library. 
  - The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.

## What is CDN? Why do we use it?
 CDN stands for Content Delivery Network or Content Distribution Network. A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed.
In other words A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.
Using CDN allows for the quick transfer of assets needed to properly load your internet content such as HTML pages, javascript files, images, and videos.

## Why is React known as React?
  React is called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.”

## What is crossorigin in script tag?
  The crossorigin attribute on a `<script>` tag specifies that CORS is supported when loading an external script file from a third party server or domain.
  CORS: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information. 

## What is diference between React and ReactDOM?
- React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.
- The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development). React components are such a great way to organize UI that it has now spread to mobile to react is used in web and in mobile. react-dom is used only in web apps.

## What is difference between react.development.js and react.production.js files via CDN?
  Development mode includes useful warnings and gives you access to tools that make development and debugging easier. Production mode minifies your code and better represents the performance your app will have on end users' devices.

`<script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script> 
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>`

    - We are using unpkg CDN. unpkg is an open source, global content delivery network supporting npm packages.
    - @17represent the version of the React library
    - This is the development version of the React library with debugging option. To deploy the application in the production environment, use below scripts.

## What is async and defer?
 Async and defer are boolean attributes which are used along with script tags to load our external scripts efficiently into our webpage. 
 **In Normal** :
      1. HTML parsing goes on 
      2. Encounters Scripts 
      3. Scripts are fetched on the network
      4. HTML parsing then continues
**In Async** : 
      1. HTML parsing goes on
      2. Encounters Scripts 
      3. Scrips are fetched in async manner parallelly
      4. As soon as scripts are available, script is executed
      5. HTML parsing continues
**In Defer** : 
      1. HTML parsing goes on
      2. Encounters Scripts
      3. Scripts are fetched parallelly (Still HTML parsing goes on)
      4. HTML parsing gets completed
      5. Scripts get executed.
 
 ## When to use differ and when to use async?
  - Async attributes does not guarantee the order of execution of the scripts. But defer does.
  - If we have multiple scripts that are depending on each other. Async doesn't guarantee that code will be executed in order. In that case use Defer. 
  - If we want to load external scripts, then use async attributes and not defer. 
  - Mostly we use defer because, defer maintains the order of scripts.

## Arrow Functions
  - Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows us to write shorter function syntax.
  - The handling of this is also different in arrow functions compared to regular functions.
  - In short, with arrow functions there are no binding of this.
  - In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
  - With arrow functions the this keyword always represents the object that defined the arrow function.