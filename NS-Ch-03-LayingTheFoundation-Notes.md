Laying the foundation
JSX,Babel

npm init creates package.json file. package.json file is a configuration npm used to manage dependencies.
Two types: dev and normal dependencies. Dev dependencies
browserlists helps us transform our code and make our code compatible for specified version of browsers.
Ex. last 2 chrome versions, it doesn't mean it will only work on chrome. It will definitely work on chrome.
Ex. if some browser doesn't support ES6, we need to convert our code to older versions of browser. 

Polyfill: If your browser doesn't understand what is promises, The promise code, the ES6 code is converted to some other code. Its a polyfill.
Ex: if we did not have map function. if my browser doesn't know array.map(). We can create our own map function that behaves exactly same as new map function. This is known as polyfill.

What converts newer code to older code? BABEL does it

ES6 brought many new features. There is a replacement code that is compatible with older version of browser. Babel converts it. Babel use browserlists. Browserlists tracks which version of our code be working in.
Do we need to write polyfill? no babel will do it for us.

What is babel?
Babel is just a JS package. Its just taking modern javascript and  converts it to older javascript.(Polyfill).

Where did gitignore come from?
git init will initialise our repo with git.
It will make our repo compatible with git. We can use pull, push, create branches, etc.

Superpowers of Parcel:
Hot Module Replacement
Minification
File Wathcer 
Code splitting
Caching
Compression
Image Optimization
Cleaning our code
Tree Shaking

Tree Shaking: Removing unwanted code. Parcel will ignore all unused code. If we import a library with 20 functions and we use only 2 functions out of it. The rest are ignored.

What command To run the project?
npx parcel index.html
We dont want to use this comand everytime we run the project, instead
Generally we build script inside package.json, which runs the command easy way.
"Scripts":{
    "start": "parcel index.html",
    "test":"jest"
}

In command line just use
'npm run start'

Build command is 
npx parcel build index.html 

We can create another build script as well
"Scripts":{
    "start": "parcel index.html",
"build":"parcel build index.html",

    "test":"jest"
}

Why did we skip npx?
Npx is just exactly npm but executing a package without downloading it. 
Assume npx is equal to npm run

if we have to build,  
npm run build

Shortcut to "npm run start" is "npm start"

We saw even console logs are removed in dist folder.
But did it remove console log? No it did not remove.
When we use parcel and babel, it does not remove console log automatically.
We have to configure our project to remove console logs.

There is a package that helps us remove console logs. It is 
Babel plugin transform remove console. It removes console logs.

If we have to install any package, we have simple command, npm install package_name
You have to take care while installing packages is whether you have to put it as a dev dependancy or a normal dependancy. 
Instead of --save-dev we can use -D
npm install babel-plugin-transform-remove-console --save-dev

Pacakge got installed in package.json file and node module. 
We get the version in package.json file. and original code will go inside node modules.

Now it wont work because we have to configure it.

.babel.rc is good way to use.
babel.rc is the configuration file for babel.

Create .babelrc and write the below code. https://www.npmjs.com/package/babel-plugin-transform-remove-console


// with options
{
  "plugins": [ ["transform-remove-console", 
  { "exclude": [ "error", "warn"] }] ]
}

Will it work now? npm run build
Whenever creating a new build, delete the dist folder.
Go to js file, console log wont be there.

================================================================================
Warning: in console: The value "" for key "width" is invalid, and has been ignored.
Whenever we have childrens in an array,  creating div with 2 children 
IF we have multiple siblings, we always have to give them keys. 
How to give keys? Write inside div created object area. 
key can be anything that uniquely identifies it. 

Why we need a key?
In this structure: 
<div>
    <h1></h1>
    <h1></h1>
</div>
Read about Diffing Algorithm.
Whenever we have multiple children

Render means updating something in the dom. Loading into the browser.
If we add one more h1 on top of all children withou key. It needs to re-render all children to add new child. React has to do lot of  rework. and where to place a new child.
If we give keys to them, when we add new child, react has to do very less work. It just injects it. Its always good to have keys when we have multiple children. 
Pass keys as props.
React tracks keys as unique thing. Id is html id. React does not use that. and React has concept called key. 

How does REact.createElement work?
This react is coming from import react. 
Import react is coming from node modules.
Where is createElement coming from  react in node modules. exported in node modules. so we import from node modules.

console.log(heading) o/p object 

babel.rc is not printing console log in console as well. so remove babelrc while developing and checking.

React.createElement is gives us an object. 
This object is then converted to html code and put in dom. 
Thats how react.createElement works.

Go to 00:56:00 and check code
 
 JSX-  NO official document written as Javascript XML
What is JSX? Why JSX was brought in?
Facebook created React to write alot of html using JS in a better way. Because JS is very performant.

We can import createElement
import {createElement} from "react";
import {createElement as ce} from "react"; Still code is messy

Using JSX 
const heading = <h1 id="title" key="h1">Namaste React</h1>;

Is JSX HTML inside JS? NO its wrong. <h1> tag is not html. It is html like syntax. 
It is a fancy way of writing html inside JS but it is not html inside JS.
Facebook developers build JSX
Difference between html and jsx?
tab-index in html? padding-left.  tabIndex in JSX
class in html. className in JSX
Naming conventions are different in html and JSX
Babel understands the JS code. If it finds < > bracket, it understands its a jsx. 
JSX uses react.createElement behind the scenes. react.createElement is converted to object and it is then converted and rendered as html on dom. 
Babel understands JSX and convert it into react.createElement. 
Babel does lot of optimization in the code. 

Advantage of JSX is readability, less code, maintainability, developer friendly, no repitition.
Where is babel? Babel comes as a dependency along with parcel
How many package.json our code has? one
How many package-lock.json our code has? Two. one in node modules and another in project.

h1 tag in react is called as react elements.

const heading = <h1 id="title" key="h1">Namaste React</h1>; is called JSX expression.

React Components
Everything is a component is react. 
There are two types of components
-Functional Component - new way
-Class based component - old way

Functional Component
What is functional component?
It is a new way of writing code. Functional component is nothing but a normal function.
It is function that returns some piece of jsx, or returns a react element.
Ex.Header component
const HeaderComponent = ()=>{
    return <h1>React Functional Component</h1>;
}
Component name starts with Capital letter. It is not mandatory but it is a normal convention and good practice.

If we write it in one line
const HeaderComponent =()=>{
        return <div><h1>Heading1</h1><h2>Heading2</h2></div>;
}

If we write in multiple lines we must wrap in ()
const HeaderComponent =()=>{
        return (<div>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        </div>);
}
We can also skip the return because arrow function doesn't require return keyword
const HeaderComponent=()=>(<div>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        </div>);

const heading=(<h1 id="title" key=h2>Namaste REact</h1>);
heading is react element.

When i have to render my react element
root.render(heading);
when i have to render functional component
root.render(<HeaderComponent/>)

The only difference between react element and functional component is we wrap the elements inside function.

What is react element? its just an object.
What is functional compoment? Its just a function.
 
 To use react element inside header component

const HeaderComponent =()=>{
        return (<div>
        {heading}
        <Title/> 
        {Title()}
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        </div>);
}

We can write any piece of js code inside{} in functional component.

const data=api.getData();
If we get malicious code injectinginside js, its known as cross side scripting attack.
JSX is very secure. JSX takes care of malicious data. It will escape it and makes it safe for any such accesses.
JSX sanitizes  whatever inside {} it. Sanitization.
Component Composition.

<HeaderComponent>
<Title/> 
</HeaderComponent>THis is known as Component Composition. 
If i have to use component inside component. it is component composition. or composing components.

To use JSX,  we must have babel.
Is the component hoised? It is the same way as how js function works.
WHy cant we just use react elements than functional components? we need a function to pass props.
Why do we call api instead of function in react? it is a interface in react. Inside react is function with export reactdom. reactdom will have createroot. But it is a normal function only but we call it as api.

