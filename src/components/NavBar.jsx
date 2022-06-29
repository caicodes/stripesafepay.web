import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../theme/themeToggle";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between  text-center bg-blue-100 text-blue-500 dark:text-blue-400 dark:bg-blue-700 p-4">
        <div className="flex">
          <Link className="text-3xl mr-20" to="/">
            <Logo />
          </Link>
        </div>
        <nav className="flex items-center uppercase font-bold ">
          <Link className="mx-5" to="/">Home</Link>
          <Link className="mx-5" to="/about">About</Link>
          <Link
            to="/signup"
            className="bg-blue-500 px-4 py-2 mx-5 rounded text-white"
          >
            Sign Up
          </Link>
          <Toggle />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
