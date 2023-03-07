import React from "react";
import {useState} from "react";
import logo from "../assets/img/logo.png";
import {Link} from "react-router-dom";

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
                    <li><Link to = "/">HOME</Link></li>
                    <li><Link to = "/about">ABOUT</Link></li>
                    <li><Link to = "/contact">CONTACT</Link></li>
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