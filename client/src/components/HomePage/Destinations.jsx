import React from "react";
import { useNavigate } from "react-router-dom";

function Destinations() {
  const navigate = useNavigate();
  return (
    <div id="destinations" className="">
      <div>
        <h1 className="lg:text-5xl text-3xl text-center font-bold font-mono text- pt-8 text-black">
          Popular Destinations
        </h1>
        <p className="lg:text-sm text-xm text-center font-bold font-mono text-black pt-2 mb-2">
          Take a peak at what Kerala can offer to you..
        </p>
      </div>
      <div className=" px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between px-16 bg-gradient-to-r bg-gray-200 border-black rounded-lg">
          <div className="lg:w-2/5 w-full px-7">
            <h1 className="lg:text-4xl text-2xl flex items-start font-medium mx-4 mt-5 font-mono text-black">
              Munnar
            </h1>
            <p className="px-4 pt-5 text-black">
              Munnar, the famed hill station of south India, is a romantic
              locale where natural beauty is everywhere to visit, explore and to
              enjoy. Munnar is situated at the confluence of three mountain
              streams – Muthirapuzha, Nallathanni and Kundala – and the word
              ‘Munnar’ means three rivers in Malayalam. Situated about 1600m
              above sea level.
            </p>
            <div className="flex items-center w-full justify-center mt-6">
              <button
                className=" bg-blue-400 text-black   rounded-full text-sm font-medium px-5  py-2 h-full hover:bg-green-600 transition-all duration-500"
                onClick={() => navigate("planMyTrip")}>
                Plan Trip
              </button>
            </div>
          </div>
          <div className="lg:w-3/5 w-full  relative pt-10 mx-3 pb-10 rounded-full">
            <video
              src="/assets/munnar.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" px-8 mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between px-16 bg-gradient-to-r bg-gray-200 border-black rounded-lg">
          <div className="lg:w-2/5 w-full px-7">
            <h1 className="lg:text-4xl text-2xl flex items-start font-medium mx-4 mt-5 font-mono text-black">
              Varkala
            </h1>
            <p className="px-4 pt-5 text-black">
              Varkala, a calm and quiet hamlet, lies on the outskirts of
              Thiruvananthapuram district. It has several tourist attractions
              that include a beautiful beach, a 2000-year-old Vishnu Temple and
              the Ashramam - Sivagiri Mutt a little distance from the
              beach.Varkala offers excellent accommodation facilities for
              tourists and is fast becoming a popular health resort with many
              Ayurvedic massage centres.
            </p>
            <div className="flex items-center w-full justify-center mt-6">
              <button
                className=" bg-blue-400 text-black   rounded-full text-sm font-medium px-5  py-2 h-full hover:bg-green-600 transition-all duration-500"
                onClick={() => navigate("planMyTrip")}>
                Plan Trip
              </button>
            </div>
          </div>
          <div className="lg:w-3/5 w-full  relative pt-10 mx-3 pb-10 rounded-full">
            <video
              src="/assets/varkala.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" px-8 mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between px-16 bg-gradient-to-r  bg-gray-200 border-black rounded-lg">
          <div className="lg:w-2/5 w-full px-7">
            <h1 className="lg:text-4xl text-2xl flex items-start font-medium mx-4 mt-5 font-mono text-black">
              Wayanad
            </h1>
            <p className="px-4 pt-5 text-black">
              Wayanad, the green paradise is nestled among the mountains of the
              Western Ghats, forming the border world of the greener part of
              Kerala. Clean and pristine, enchanting and hypnotizing, this land
              is filled with history and culture. Located at a distance of 76
              km. from the sea shores of Kozhikode, this verdant hill station is
              full of plantations, forests and wildlife.
            </p>
            <div className="flex items-center w-full justify-center mt-6">
              <button
                className=" bg-blue-400 text-black   rounded-full text-sm font-medium px-5  py-2 h-full hover:bg-green-600 transition-all duration-500"
                onClick={() => navigate("planMyTrip")}>
                Plan Trip
              </button>
            </div>
          </div>
          <div className="lg:w-3/5 w-full  relative pt-10 mx-3 pb-10 rounded-full">
            <video
              src="/assets/wayanad.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" px-8 mt-4 mb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between px-16 bg-gradient-to-r bg-gray-200 border-black rounded-lg">
          <div className="lg:w-2/5 w-full px-7">
            <h1 className="lg:text-4xl text-2xl flex items-start font-medium mx-4 mt-5 font-mono text-black">
              Alappuzha
            </h1>
            <p className="px-4 pt-5 text-black">
              Officially called Alappuzha, Alleppey is known for its network of
              canals and lagoons with beautiful backwaters and the houseboats
              offering overnight stays. Located in the southern part of Kerala,
              the coastline of Alleppey offers some of the best beaches with
              water sports during the dry season. Coupled with other beautiful
              places in Kerala like Munnar and Thekkady, Alleppey is often
              considered for a honeymoon or for a great family vacation.
            </p>
            <div className="flex items-center w-full justify-center mt-6">
              <button
                className=" bg-blue-400 text-black   rounded-full text-sm font-medium px-5  py-2 h-full hover:bg-green-600 transition-all duration-500"
                onClick={() => navigate("planMyTrip")}>
                Plan Trip
              </button>
            </div>
          </div>
          <div className="lg:w-3/5 w-full  relative pt-10 mx-3 pb-10 rounded-full">
            <video
              src="/assets/Alleppy.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
