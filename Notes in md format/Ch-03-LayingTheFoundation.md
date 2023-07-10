#Ch-03 Laying the foundation

`npm init`  creates pacakage.json file.

##### What is package.json file? 

> Package.json file is a configuration npm used to manage dependencies.

> Package.json file has two types of dependencies -
1. Dev dependencies
2. Normal dependencies

Dev dependencies browserlists helps us transform our code and make our code compatible for specified version of browsers.
Ex. Last 2 chrome versions -  It doesn't mean it will only work on chrome. It will definitely work on chrome.

##### What is Polyfill?
> Polyfill provides modern funtionality on older browsers that do not support latest versions.

- If some browser doesnt support ES6, we need to convert our code to older versions of browser.
- Ex: Promise and map functions are from latest ES6 version. 
- If our browser doesnt understand what is promises then the  promise code(ES6 code) is converted to some other code for browser undersanding. It is nothing but a polyfill.
- Map function came in ES6,  if my browser doesnt know array.map(), we can create our own map function that behaves exactly same as new map function. This is known as polyfill.

##### What converts newer code to older code? 
> BABEL converts newer version code to older version code.

ES6 brought many new features. There is a replacement code that is compatible with older version of browser. Babel converts it. Babel use browserlists. Browserlists tracks which version of our code be working in.
Do we need to write polyfill?  No babel will do it for us.

##### What is babel?
> Babel is a JS package. Babel is taking modern javascript and converts it to older javascript.(Polyfill).

##### Where did gitignore come from?
`git init ` -  initialises our repo with git.
It will make our repo compatible with git. We can use pull, push, create branches, etc.

##### Superpowers of Parcel:
- Hot Module Replacement
- Minification
- File Wathcer 
- Code splitting
- Caching
- Compression
- Image Optimization
- Cleaning our code
- Tree Shaking

##### What is Tree Shaking?
Tree Shaking is removing unwanted code. Parcel will ignore all unused code. If we import a library with 20 functions and we use only 2 functions out of it. The rest are ignored.

##### What command To run the project?
```
npx parcel index.html
```
We dont want to use this comand everytime we run the project, instead  we build script inside package.json, which runs the command easy way.
```javascript
        "Scripts":{
            "start": "parcel index.html",
            "test":"jest"
        }
```
In command line just use
`'npm run start'`

Build command is 
`npx parcel build index.html `

We can create another build script as well
```javascript
"Scripts":{
    "start": "parcel index.html",
"build":"parcel build index.html",

    "test":"jest"
}
```

##### Why did we skip npx?
> Npx is just exactly npm but executing a package without downloading it.
Assume `npx` is equal to `npm run`.

If we have to build, `npm run build`

Shortcut to` "npm run start"` is `"npm start"`

##### How to remove console log?
We saw even console logs are removed in dist folder.
But did it remove console log? No it did not remove.
When we use parcel and babel, it does not remove console log automatically.
We have to configure our project to remove console logs.

There is a package that helps us remove console logs. It is
`Babel plugin transform remove consol.` It removes console logs.

To install any package ` npm install package_name`
You have to take care while installing packages is whether you have to put it as a dev dependancy or a normal dependancy.
Instead of` --save-dev` we can use` -D`

```
npm install babel-plugin-transform-remove-console --save-dev
```

Pacakge got installed in package.json file and node module.
We get the version in package.json file. and original code will go inside node modules.

Now it wont work because we have to configure it.

.babel.rc is good way to use.
babel.rc is the configuration file for babel.

Create .babelrc and write the below code. https://www.npmjs.com/package/babel-plugin-transform-remove-console

```javascript
// with options
{
  "plugins": [ ["transform-remove-console", 
  { "exclude": [ "error", "warn"] }] ]
}
```
Will it work now? npm run build
Whenever creating a new build, delete the dist folder.
Go to js file, console log wont be there.

##### Creating keys with multiple children in a div
```
Warning: in console: The value "" for key "width" is invalid, and has been ignored.
```

##### Why we need a key?
In this structure: 
```javascript
<div>
    <h1></h1>
    <h1></h1>
</div>
```
Whenever we have childrens in an array,  creating div with 2 children,
If we have multiple siblings, we always have to give them keys.
How to give keys? Write inside div created object area.
Key can be anything that uniquely identifies it.
Read about Diffing Algorithm.
Whenever we have multiple children.

##### What is Render?
> Render means updating something in the dom. Loading into the browser.

If we add one more h1 on top of all children without key. It needs to re-render all children to add new child. React has to do lot of  rework. and where to place a new child.
If we give keys to them, when we add new child, react has to do very less work. It just injects it. It is always good to have keys when we have multiple children.


##### Pass keys as props.
React tracks keys as unique thing. Html tracks with Id unique thing. React does not use ID here and React has concept called key.

##### How does React.createElement work?
This react is coming from import react.
Import react is coming from node modules.
Where is createElement coming from react in node modules which is exported in node modules. so that to use them we import from node modules.
Whenever we have childrens in an array,  creating div with 2 children,
If we have multiple siblings, we always have to give them keys.
How to give keys? Write inside div created object area. 
Key can be anything that uniquely identifies it.

Removing console log issue
`console.log(heading) ` O/P  object

babel.rc is not printing console log in console as well.  So remove babelrc while developing and checking.

React.createElement  gives us an object. 
This object is then converted to html code and put in dom. 
Thats how react.createElement works.

Go to 00:56:00 and check code

##### What is JSX? Why JSX was brought in?

 JSX-  NO official document written as Javascript XML

Facebook created React to write alot of html using JS in a better way. Because JS is very performant. Facebook developers build JSX

We can import createElement
```
import {createElement} from "react";
import {createElement as ce} from "react"; 
```
Still code is messy
But Using JSX 
`const heading = <h1 id="title" key="h1">Namaste React</h1>;`

##### Is JSX HTML inside JS?
NO its wrong. `<h1>` tag is not html. It is html like syntax. 
It is a fancy way of writing html inside JS but it is not html inside JS.

##### Difference between html and jsx?
`tab-index` in html(padding-left).  `tabIndex `in JSX
`class` in html. `className` in JSX
Naming conventions are different in html and JSX
Babel understands the JS code. If it finds < > bracket, it understands its a jsx.
JSX uses react.createElement behind the scenes. 
react.createElement is converted to object and it is then converted and rendered as html on dom.
Babel understands JSX and convert it into react.createElement. 
Babel does lot of optimization in the code. 

##### Advantage of JSX
- Readability,
- Less code, 
- Maintainability, 
- Developer friendly, 
- No repitition.

##### Where is babel?
> Babel comes as a dependency along with parcel

##### How many package.json our code has? 
One
##### How many package-lock.json our code has? 
Two. one in node modules and another in project.

##### What is react elements?
h1 tag in react is called as react elements.

##### JSX expression
```
const heading = <h1 id="title" key="h1">Namaste React</h1>; 
```
is called JSX expression.

##### React Components
> Everything is a component is react.

There are two types of components
1. Functional Component - new way
2. Class based component - old way


##### What is functional component?
> It is a new way of writing code. Functional component is nothing but a normal function.
It is function that returns some piece of jsx, or returns a react element.

Ex: Header component
```
const HeaderComponent = ()=>{
    return <h1>React Functional Component</h1>;
}
```
Component name starts with Capital letter. It is not mandatory but it is a normal convention and good practice.

If we write it in one line
```
const HeaderComponent =()=>{
        return <div><h1>Heading1</h1><h2>Heading2</h2></div>;
}
```
If we write in multiple lines we must wrap in ()
```
const HeaderComponent =()=>{
        return (
		<div>
        	<h1>Heading1</h1>
        	<h2>Heading2</h2>
        </div>
		);
}
```
We can also skip the return because arrow function doesnt require return keyword.
```
const HeaderComponent=()=>{
	(
		<div>
        	<h1>Heading1</h1>
        	<h2>Heading2</h2>
        </div>
	)
};
```
```
`const heading=(<h1 id="title" key=h2>Namaste React</h1>);`
```
heading is react element.

When i have to render my react element
`root.render(heading);`
when i have to render functional component
`root.render(<HeaderComponent/>)`

##### Difference between react element and functional component?
The only difference between react element and functional component is we wrap the elements inside function.

##### What is react element?
React element is just an object.

##### What is functional compoment? 
Functional component is just a function.

Ex: To use react element inside header component
```
const HeaderComponent =()=>{
        return (
		<div>
        	{heading}
        	<Title/> 
        	{Title()}
        	<h1>Heading1</h1>
        	<h2>Heading2</h2>
        </div>);
}
```

We can write any piece of js code inside{} in functional component.

##### Malicious data? Sanitization
`const data=api.getData();`
If we get malicious code injecting inside js, its known as cross side scripting attack.
JSX is very secure. JSX takes care of malicious data. It will escape it and makes it safe for any such accesses.
JSX sanitizes  whatever inside {} it. Sanitization.


##### Component Composition.
> If we have to use component inside component. It is component composition. or composing components.

```
<HeaderComponent>
<Title/> 
</HeaderComponent>
```
 

To use JSX,  we must have babel.
##### Is the component hoised?
It is the same way as how js function works.
##### Why cant we just use react elements than functional components? 
We need a function to pass props.
##### Why do we call api instead of function in react? 
It is a interface in react. Inside react is function with export react-dom. 
react-dom will have createroot. 
But it is a normal function only but we call it as api.

