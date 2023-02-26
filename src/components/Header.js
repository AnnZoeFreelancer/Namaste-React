import React from "react";
import {useState} from "react";

const Title=()=>{
    return(
    <img alt="logo" className="logo" src="https://d2x91cbkpb2oh5.cloudfront.net/c8880e38e4fc37c8bd8c37610c492e5c_scale190x150.jpg"/>
    )
}
const Header = () =>{
    const [title,setTitle] = useState("Foodies Pit Stop");
    return (
        <div className="header">
            <Title/>
            <h1>{title}</h1>
            <button onClick={()=>setTitle("New Food App")}>Change Title</button>  
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;