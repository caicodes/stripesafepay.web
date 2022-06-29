import React from "react";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <div className="grid h-screen place-items-center bg-blue-300 dark:bg-blue-900 text-white ">
        <div className="flex text-3xl text-center bg-blue-100 dark:bg-blue-700 font-bold text-blue-900 dark:text-blue-200 p-4 rounded">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default Home;
