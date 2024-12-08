import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import destinations from "../../data/destination";

function Destinations() {
  const navigate = useNavigate();
  

  return (
    <div id="destinations" className="py-8 px-4">
      <div className="text-center">
        <h1 className="lg:text-5xl text-3xl font-bold font-mono text-black">
          Popular Destinations
        </h1>
        <p className="lg:text-sm text-xm font-bold font-mono text-black pt-2 mb-4">
          Take a peak at what Kerala can offer to you..
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-lg shadow-md p-4 flex flex-col">
            <video
              src={destination.video}
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            />
            <h1 className="text-2xl font-medium font-mono text-black mt-4">
              {destination.name}
            </h1>
            <p className="text-sm text-black mt-2">{destination.description}</p>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-blue-400 text-black rounded-full text-sm font-medium px-5 py-2 hover:bg-green-600 transition-all duration-500"
                onClick={() => navigate("planMyTrip")}>
                Plan Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
