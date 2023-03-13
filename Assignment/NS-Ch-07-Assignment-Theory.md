# What are the various ways to add images into our app? Explain with code example.

* We can add images via cdn links. 
* We can add images locally by keeping it in a folder. General format is folder named assets/img. 
`import Logo from "../assets/img/foodVilla.png";`
* We can host images in cdn. It is a great place to host it because it is faster and optimises things. In cdn we cannot optimize our images after it comes to our browser. So we need to put optimzed images in cdn. 

# What would happen if we do console.log(useState());

    (2) [undefined, ƒ]
    	0: undefined
   	 1: ƒ ()
    		length: 2
	[[Prototype]]:Array(0)
# How will useEffect behave if we dont  add a dependency array?
###Dependency Array: 
```javascript
useEffect(()=>{
    console.log("useEffect");
},[isLoggedIn]);
```
useEffect will be called after initial render and after everytime the isLoggedIn state changes, useEffect will be called.
### Empty Dependency Array:
When we have an empty dependency array, UseEffect() is not dependent on anything. It;s default behaviour is to be called after each render. 

```javascript
useEffect(()=>{
    console.log("useEffect");
},[]);
```
###No Dependency Array:
```javascript
useEffect(()=>{
    console.log("useEffect");
});
```
useEffect will be called after every render. Everytime my state changes, useEffect will  be called after every render.
# What is SPA? 
SPA(Single Page Application) - In SPA, our application does not reload. There are two types of routing. 
	1. Server Side Routing
	2. Client Side Routing
###Server Side Routing
In Server side routing, all our pages come from the server. When we click on another page, it will come from server only.
###Client Side Routing
Client side routing, we dont want network calls to fetch something, so we load a different component. 

# What is difference between client side routing and server side routing?

### Server Side Routing
When a user clicks on a link on a webpage, another whole page is loaded and rendered onto the screen. The URL path is updated to match where the user is in the current state of the web page.

This “whole page” that is loaded and rendered is done through the server. Server-side routing is what causes the whole page to refresh because we are making another request to our server, which is providing us with a brand new page to display.

The main drawback to using server-side routing is the varied time it can take content to display on a page. If the page the user is requesting will still have that header and footer information displayed onto the screen, then why would we need to reload this information?

But the server doesn’t know that we don’t have to reload that information because it’s already being displayed. The server will send back the file that needs to be displayed and then call for a full refresh to get this new file displayed.

### Client Side Routing

With an SPA, when a user clicks on an internal link within your application, the goal would be to see a change in the URL bar to show that there is an update happening to the page without a full page refresh.

With an SPA, we don’t require multiple pages to load, just the original request with our initial HTML, CSS, and JS files from the server. Because of this, client-side routing is used to create that SPA experience while making the routes more uniform and organized for our users to see.

The routing is to give our users a better experience overall because they are able to pinpoint with the route in the URL bar where they are at in the application, all without us needing to make multiple server requests.

###Reference
https://betterprogramming.pub/react-router-and-client-side-routing-2e483452fbfbhttps://betterprogramming.pub/react-router-and-client-side-routing-2e483452fbfb