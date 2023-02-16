import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";

const HeaderComponent = () =>{
    return (
        <>
            <div className="navbar">
                <Logo/><SearchBar/><UserIcon/>
            </div>
        </>
    )
}
const Logo = ()=>{
    return (
            <image className="logo" src="/assignment/logo.jpg">Image</image>
    )
}
const SearchBar=()=>{
    return(
            <input  className="searchBar" type="text" placeholder="Searchbar"></input>

    )
}
const UserIcon=()=>{
    return(
        <image className="userIcon" src="userIcon.png">UserIcon</image>
    )
}

const container = React.createElement("div",{id:"container"},[<HeaderComponent/>]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root= createRoot(document.getElementById("root"));

root.render(container);