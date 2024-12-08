import React from "react";
import { PiBinocularsFill } from "react-icons/pi";
function PopularPlanLists() {
  return (
    <div class="w-80 border bg-slate-100 rounded-lg shadow flex flex-col items-center mb-6">
      <a href="#">
        <img
          class="rounded-t-lg p-2 rounded-lg"
          src="./assets/Hillstations/Munnar.jpg"
          alt=""
        />
      </a>
      <p className="font-semibold">3 Days 2 Nights</p>
      <p className="text-green-700 font-extralight">Kerala Tour Package</p>
      <div className="w-60 h-0.5 bg-gray-400"></div>
      <p className="text-sm mt-1">Locations: Munnar | HouseBoat</p>
      <button className="p-3 bg-slate-200 text-black hover:bg-slate-300 rounded-full mt-2 font-thin text-xs">
        View Details
      </button>
      <div className="flex w-full p-2 items-center justify-center gap-4 mt-3">
        <div className="flex flex-col items-center gap-2">
          <PiBinocularsFill />
          <p className="text-purple-500 font-thin text-xs">Sightseeing</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PiBinocularsFill />
          <p className="text-purple-500 font-thin text-xs">Sightseeing</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PiBinocularsFill />
          <p className="text-purple-500 font-thin text-xs">Sightseeing</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PiBinocularsFill />
          <p className="text-green-700 font-thin text-xs">Sightseeing</p>
        </div>
      </div>
      <div className="my-4">
        <button className="bg-purple-600 text-white p-3 text-xs rounded-xl">
          Enquire
        </button>
      </div>
    </div>
  );
}

export default PopularPlanLists;
