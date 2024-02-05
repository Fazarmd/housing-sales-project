import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offers />
      <Project />
    </>
  );
}

export default App;
