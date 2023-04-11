import React from "react";
import { useState, useContext } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
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
  const { user } = useContext(UserContext);
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
          <button className="flex" onClick={() => setIsLoggedIn(false)}>
            <span className="text-sm">Welcome {user.name}!</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            {isOnline ? "🟢" : "🔴"}
          </button>
        ) : (
          <button
            className="flex  justify-end"
            onClick={() => setIsLoggedIn(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            {isOnline ? "🟢" : "🔴"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
