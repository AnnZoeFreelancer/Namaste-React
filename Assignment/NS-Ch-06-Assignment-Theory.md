What is Microservice?
Microservice is an architectural approach for building apps where peices of an app work independently, but together. Instead of having all in one project, we have small small different projects with many api, ui, logs, notifications, authentication etc. All these run on differenct ports. We can have many db as well. Microservice architectural app is composed of small independent services working together as one.

What is Monolith Architecture?
Older days we were building big applications where everything were in one project. We deploy the whold application. For one minute change in project, the used to deploy the whold application.  This architecture is known as Monolith architecture.

Difference between Microservices and Monilith architecture?
Monolith is builton single whole unit whereas microservice architecture is a collection of smaller independent deployable services.

While deploying in monolith,we have to deploy the whole project. But in microservice architecture we have to deploy only the one small service which needs changes, not the whole project.


Monolith advantages has easy deployment, deveopment build with one code base, simplified testing, easy debugging. Whereas Microservices has agility(working with small teams), flexible scaling, continuous deployment, higly maintainable and testable, independently deployable, technology flexibility, high reliability(make changes in one without bringing down the app)

Monolith disadvantages has slower development speed, scalability, reliability, barrier to technology adoption, lack of flexibility, deployment(small change needs entire app to redeploy) whereas Microservices has development sprawl(adds more complexity, if not handled well leads to slower development and performance, exponential infrastructure costs, added organizational overhead(add new teams to collaborate all), debugging challenges, lack of standardization, lack of clear ownership.

Why do we need a useEffect hook? 
useEffect hook is a normal function that comes from react library as a named import. 

useEffect is a function with two parametes, one is callback function and anohther is dependency array. This callback function will be called whenever useEffect wanted it to call.Generally useEffect will be called after every render, to avoid it, we use empty dependency array as a second parameter for useEffect to not depend  on anything. It will be called once after every render.

If we want useEffect to be called after certain scenario, we pass it in the dependency array, whatever is inside it changes, useEffect will be called/

What is optional Chaining? 
Optional chaining(?>) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefines instead of throwing an error. 

What is shimmer UI?
Shimmer UI resembles the page's actual UI, so users will understand how quickly the app will load even before the content is shown. Shimmer effects are loading indicators used when fetching data from a data source. It paints a view that may be similar to the actual data to be rendered on the screen when the data is available.

Difference between JS expression and JS statements?
In functions
Function Statement/Function Declaration
If we create a function and we give a name, it is a function statement.
Ex: function a(){
	console.log("a called");
}
Function Expression
If we can assign a function to a variable, this way is called as function expression.
Ex: var b = function(){
	console.log("b called");
}
b();
The difference between them is the hoisting. 
During hoisting phase(memory creation phase), 
If we call a and b before creating them 
a(); o/p a called
b(); o/p Uncaught type Error:b is not defined
Here a is created a memory and function is assigned to a. 
b is treated like any other variable so it is assigned undefined initially untill the code hits the line var b - fun.
b();
var b= function(){
console.log("b called");
} 
o/p uncaght type Error: b is not defined.

What is conditional rendering?
Conditional rendering is similar to normal javascript conditions, where rendering happens in UI base on the conditions. If condition matches that particular matched UI gets to load in browser.
Example: While fetching data, load shimmer ui. 
While in home, load home page, When you are in about page, load the about page content, when you have some errors, load the error page. 
render() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const renderAuthButton = () => {
      if (isLoggedIn) {
        return <button onClick=>setIsLoggedIn(false)>Logout</button>;
      } else {
        return <button onClick=>setIsLoggedIn(true)>Login</button>;
      }
    }


What is CORS?
    CORS - Cross Origin Resource Sharing. CORS is a mechanism which uses additional http headers to tell the browser whether a specific web app from one origin can share resource with another web pack of different origin. 
    There are two types of access control mechanism:
        1. simpole request
        2. preflight request
    1. In simple request, there are no restrictions.
    2. Preflight request 
    If one app A is requesting something from another app B, 
        -CORS preflight options call is made.
        -B takes responsibility of verifying whether the call is valid or not. 
        -B sets additional http headers letting the browser/client know that its safe.
        -Actual call will be made.
    Most commonly used http headers are, 
    Access-Control-Allow-Origin: When we have a general public api, server will set the header as a * which makes any domain outside of the domain to access it without any restrictions. Access-Control-Allow-Origin:*
    If we want a specific domain, then they will set the header as Access-Control-Allow-Origin:www.xyz.com
    Access-Control-Allow-Method: There can be different methods with restricted mode. Methods like get, post, delete etc. 


What is async and await?
Async/Await is a synctatic sugar to promises. It allows asynchronous non blocking function to be structured in a way similar to an ordinary synchronous function.
Async makes a function return a promise.
Await makes a function wait for a promise.

What is the use of "const json = await  data.json()" in getREstaurants()?
data.json() will convert the data in the readable json format.
Promise returned will wait till data is populated in the data in json format. and it is then assigned to the const json variable.

