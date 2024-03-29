import React from "react";
import bgImage from "../assets/bgImg.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover" src={bgImage} alt="/" />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="text-base md:text-xl mb-5">Creating Neighborhoods, Building Houses</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Find Your Perfect Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
