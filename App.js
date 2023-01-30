import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
const heading1 = React.createElement("h1",{id:"title"},"Heading 1");
const heading2 = React.createElement("h2",{id:"subtitle"},"Heading 2");
const container = React.createElement("div",{id:"container"},[heading1,heading2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root= createRoot(document.getElementById("root"));

root.render(container);