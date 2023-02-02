import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";

//Create a Nested header element (h1,h2,h3 inside a div with class="title")
//using React.createElement
const heading = React.createElement("h1",{className:"topic"},"Using React.createElement");
const heading1 = React.createElement("h1",{className:"title"},"Heading 1");
const heading2 = React.createElement("h2",{className:"title"},"Heading 2");
const heading3 = React.createElement("h3",{className:"title"},"Heading3");
const nestedReactCreateElement = React.createElement("div",{id:"nestedCreateElement"},[heading,heading1,heading2,heading3]);

//using JSX
const header=<h1 className="topic"> Using JSX</h1>
const header1=<h1 className="title">Heading 1</h1>;
const header2=<h2 className="title">Heading 2</h2>
const header3=<h3 className="title">Heading 3</h3>

//using FunctionalComponent
const HeaderComponent = ()=>{
    return (
   <div>
    
    <h1 className="topic">Using Functional Component</h1>
    <h1 className="title">Heading 1</h1>
    <h2 className="title">Heading 2</h2>
    <h3 className="title">Heading 3</h3>
    <Header/>
    <Header/>
   </div>   
)};

//Using Composition Component - Component inside component
const Header=()=>{
    return <h3 className="topic">Using Component Composition</h3>;
}

const container = React.createElement("div",{id:"container"},[nestedReactCreateElement, header, header1,header2,header3,<HeaderComponent/>]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root= createRoot(document.getElementById("root"));

root.render(container);