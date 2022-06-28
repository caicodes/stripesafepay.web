import React from "react";
import Toggle from "./theme/themeToggle";

function App() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-blue-300 dark:bg-blue-900 ">
        <div className="flex text-3xl text-center bg-blue-100 dark:bg-blue-800 font-bold text-blue-900 dark:text-blue-200 p-4 rounded">
          stripesafepay
          <Toggle />
        </div>
      </div>
    </>
  );
}

export default App;
