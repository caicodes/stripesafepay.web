import React from "react";
import Logo from "../components/Logo";

const Signup = () => {
  return (
    <>
      <div className="grid h-screen place-items-center bg-blue-300 dark:bg-blue-900 text-white">
        <div className="flex text-3xl text-center bg-blue-100 font-bold text-blue-500 dark:text-blue-400 dark:bg-blue-700 p-4 rounded transition-all duration-300">
          <Logo />
          signup
        </div>
      </div>
    </>
  );
};

export default Signup;
