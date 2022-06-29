import React from "react";
import Toggle from "./theme/themeToggle";

function App() {
  return (
    <>
      <div className="absolute right-2 top-2 text-blue-100 dark:text-blue-300">
        <Toggle />
      </div>
      <div className="grid h-screen place-items-center bg-blue-300 dark:bg-blue-900 text-white ">
        <div className="flex text-3xl text-center bg-blue-100 dark:bg-blue-700 font-bold text-blue-900 dark:text-blue-200 p-4 rounded">
          
          <div className="logo flex text-blue-500 dark:text-blue-400">
          stripe<div className="dark:text-green-300 text-green-500 flex items-center">safepay<svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            </div>
          </div>
            
          

          
        </div>
      </div>
    </>
  );
}

export default App;
