import React from "react";
import {useState} from "react";
import logo from "../assets/img/logo.png";

const loggedInUser=()=>{
    //API call to check authentication
}

const Title=()=>{
    return(
    <img alt="logo" className="logo" src={logo}/>
    )
}
const Header = () =>{
    const [title,setTitle] = useState("Foodies Pit Stop");
    const [isLoggedIn,setIsLoggedIn] =useState(false);
    return (
        <div className="header">
            <Title/>
            <h1>{title}</h1>
            {/* <button onClick={()=>setTitle("New Food App")}>Change Title</button>   */}
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>CART</li>
                </ul>
            </div>
            {/* {(loggedInUser()?<button>Logout</button>:<button>Login</button>)} */}
            {isLoggedIn?(
                <button className="login-btn" onClick={()=> setIsLoggedIn(false)}>LOGOUT</button>
                ):(
                <button className="logout-btn" onClick={()=> setIsLoggedIn(true)}>LOGIN</button>)
            }
            
            

        </div>
    )
}

export default Header;