import React from "react";
import Navbar from "./components/Navbar";
import HeroOne from "./components/HeroOne";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeroThree";

const App: React.FC = () => {
  return (
    <>
      <h1>Hello, Manual React and Typescript</h1>
      <div className="application">
        <Navbar/>
        <HeroOne/>
        <HeroTwo/>
        <HeroThree/>
      </div>
    </>
  );
};

export default App;