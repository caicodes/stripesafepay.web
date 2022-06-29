import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./routes/About";
import Home from "./routes/Home";
import Signup from "./routes/Signup";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
