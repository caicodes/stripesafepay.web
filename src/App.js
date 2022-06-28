import React from "react";
import Toggle from "./theme/themeToggle";

function App() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-fuchsia-300 dark:bg-fuchsia-900 ">
        <div className="flex text-3xl text-center bg-fuchsia-200 dark:bg-fuchsia-800 font-bold text-fuchsia-600 dark:text-fuchsia-200 p-4 rounded">
          Hello world!
          <Toggle />
        </div>
      </div>
    </>
  );
}

export default App;
