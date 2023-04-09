import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const loggedInUser = () => {
  //API call to check authentication
};

const Title = () => {
  return <img alt="logo" className="h-full" src={logo} />;
};
const Header = () => {
  const [title, setTitle] = useState("Foodies Pit Stop");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="pt-20">
      <div className="flex justify-between fixed px-20 z-50 top-0 left-0 right-0 h-20 items-center text-gray-800 shadow-xl bg-white">
        <Title />
        <h1 className="font-extrabold">{title}</h1>
        {/* <button onClick={()=>setTitle("New Food App")}>Change Title</button>   */}
        <div className="nav-items">
          <ul className="list-none flex items-center">
            <li className="mr-16 text-gray-800 text-base font-medium items-center pl-6">
              <Link to="/">HOME</Link>
            </li>
            <li className="mr-16 text-gray-800 text-base font-medium items-center pl-6">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="mr-16 text-gray-800 text-base font-medium items-center pl-6">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="mr-16 text-gray-800 text-base font-medium items-center pl-6">
              <Link to="/instamart">INSTAMART</Link>
            </li>
            <li className="mr-16 text-gray-800 text-base font-medium items-center pl-6">
              CART
            </li>
          </ul>
        </div>

        {/* {(loggedInUser()?<button>Logout</button>:<button>Login</button>)} */}

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>
            {{ isOnline } ? "🟢" : "🔴"}LOGOUT
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>
            {{ isOnline } ? "🟢" : "🔴"}LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
