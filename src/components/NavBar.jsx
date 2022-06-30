import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../theme/themeToggle";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between  text-center bg-blue-100 text-blue-500 dark:text-blue-400 dark:bg-blue-700 p-4 fixed w-full inset-x-0">
        <div className="flex">
          <Link className="text-3xl mr-20" to="/">
            <Logo />
          </Link>
        </div>
        <nav className="flex items-center uppercase font-bold ">
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:inline ">
            <Link className="mx-5" to="/">
              Home
            </Link>
            <Link className="mx-5" to="/about">
              About
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 px-4 py-2 mx-5 rounded text-white"
            >
              Sign Up
            </Link>
          </div>
    
          <div className="absolute  z-[2] top-20 right-3 md:right-6 transition-all duration-300 ">
          <Toggle />
        </div>
            </nav>
    
      </div>
    </div>
  );
};

export default NavBar;
