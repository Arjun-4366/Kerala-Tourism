import React, { useRef } from "react";
import "../../index.css"
import Search from "./Search";
import { Link } from "react-scroll";

function Main() {
  return (
    <div className="bg-hero bg-cover bg-center  bg-no-repeat border-transparent flex flex-col justify-center items-center  h-screen relative text-white lg:w-full">
      <div className="lg:w-full m-auto h-full flex flex-col mt-5 px-5 justify-center ">
        <h1 className="lg:text-5xl text-3xl lg:text-left text-center font-bold font-mono text-white pt-2">
          Experience kerala...
          <br />
          Explore God’s Own Country..
        </h1>
        <div className="flex  justify-center">
          <span className=" inline-flex items-center justify-center border border-white outline outline-2 outline-white rounded-full p-1 mt-20 hover:border-green-600 hover:outline-green-600 transition-all duration-500">
            <Link
              to="destinations"
              smooth={true}
              duration={500}
              className="bg-white text-black bg-transparent rounded-full text-sm font-medium px-8 py-2 h-full hover:bg-green-600 transition-all duration-500 cursor-pointer">
              Explore
            </Link>
          </span>
        </div>
       
      </div>
      {/* <Search /> */}
    </div>
    
  );
}

export default Main;
