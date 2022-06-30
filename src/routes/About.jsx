import React from "react";
import Logo from "../components/Logo";

const About = () => {
  return (
    <>
      <div className="grid h-screen place-items-center bg-blue-300 dark:bg-blue-900 ">
        <div className="flex text-3xl text-center bg-blue-100 font-bold text-blue-500 dark:text-blue-400 dark:bg-blue-700 p-4 rounded md:mb-80 mb-40 transition-all duration-300">
          <Logo />
          about
        </div>
      </div>
    </>
  );
};

export default About;
