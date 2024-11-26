import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Destinations() {
  const navigate = useNavigate();
  const destinations = [
    {
      name: "Munnar",
      description:
        "Munnar, the famed hill station of south India, is a romantic locale where natural beauty is everywhere to visit, explore, and enjoy. Munnar is situated at the confluence of three mountain streams – Muthirapuzha, Nallathanni, and Kundala – and the word ‘Munnar’ means three rivers in Malayalam. Situated about 1600m above sea level.",
      video: "/assets/munnar.mp4",
    },
    {
      name: "Varkala",
      description:
        "Varkala, a calm and quiet hamlet, lies on the outskirts of Thiruvananthapuram district. It has several tourist attractions that include a beautiful beach, a 2000-year-old Vishnu Temple, and the Ashramam - Sivagiri Mutt a little distance from the beach. Varkala offers excellent accommodation facilities for tourists and is fast becoming a popular health resort with many Ayurvedic massage centers.",
      video: "/assets/varkala.mp4",
    },
    {
      name: "Wayanad",
      description:
        "Wayanad, the green paradise is nestled among the mountains of the Western Ghats, forming the border world of the greener part of Kerala. Clean and pristine, enchanting and hypnotizing, this land is filled with history and culture. Located at a distance of 76 km from the sea shores of Kozhikode, this verdant hill station is full of plantations, forests, and wildlife.",
      video: "/assets/wayanad.mp4",
    },
    {
      name: "Alappuzha",
      description:
        "Officially called Alappuzha, Alleppey is known for its network of canals and lagoons with beautiful backwaters and the houseboats offering overnight stays. Located in the southern part of Kerala, the coastline of Alleppey offers some of the best beaches with water sports during the dry season.",
      video: "/assets/Alleppy.mp4",
    },
  ];


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
