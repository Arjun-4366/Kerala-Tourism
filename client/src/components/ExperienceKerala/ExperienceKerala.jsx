import React, { useEffect, useState } from "react";
import Search from "../HomePage/Search";
import { Link } from "react-router-dom";
import Categories from "./Categories";

function ExperienceKerala() {
  const slides = [
    "./assets/Experience/HillStation.jpg",
    "./assets/Experience/backwaters.jpg",
    "./assets/Experience/beaches.jpg",
    "./assets/Experience/waterfalls.jpg",
    
  ];
  const texts = ['Conqure the Mountains','Tropical Wonder','Exotic Beaches','Embrace the Falls']
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
    <div className="  border-transparent flex  justify-center items-center h-screen relative text-white lg:w-full">
      <div className="overflow-hidden relative w-full h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            
          }}>
          {slides.map((slide, i) => (
            <div className="flex-shrink-0 w-full h-screen relative">
              <img
                key={i}
                src={slide}
                className="w-full h-screen object-cover "
              />
               <div className="absolute w-full bottom-0 left-0 flex items-center justify-left">
                <h1 className="text-4xl lg:text-6xl font-bold bg-opacity-50 p-4 rounded text-white">
                  {texts[i]}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <Categories/>
    </>
    
  );
}

export default ExperienceKerala;
