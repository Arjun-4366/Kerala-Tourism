import React from "react";
import Footer from "../common/Footer";

function WildLife() {
  const places = [
    {
      img: "./assets/Wildlife/thattekkad.jpg",
      name: "Thattekkad Bird Sanctuary",
    },
    {
      img: "./assets/Wildlife/silent-valley.jpg",
      name: "Silent Valley National Park",
    },
    {
      img: "./assets/Wildlife/Periyar.jpg",
      name: "Periyar Tiger Reserve",
    },
    {
      img: "./assets/Wildlife/parambikulam.jpg",
      name: "Parambikulam Tiger Reserve",
    },
    {
      img: "./assets/Wildlife/Kadalundy.jpg",
      name: "Kadalundy Bird Sanctuary",
    },
    {
      img: "./assets/Wildlife/Aralam.jpg",
      name: "Aralam Wild Life Sanctuary",
    },
    {
      img: "./assets/Wildlife/kumarakom.jpg",
      name: "Kumarakom Bird Sanctuary",
    },
  ];
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center justify-center mt-7 px-10 mb-5">
        <h1 className=" font-sans font-medium text-3xl ">
          Explore Wild life of Kerala
        </h1>
        <p className="p-3 bg-lime-50 mt-3">
          Wildlife tourism in Kerala offers a unique opportunity to experience
          the region's rich biodiversity and natural beauty. With its numerous
          wildlife sanctuaries and national parks, Kerala is home to a wide
          variety of flora and fauna. Popular destinations include Periyar
          Wildlife Sanctuary, known for its elephants and picturesque lake;
          Wayanad Wildlife Sanctuary, famous for its lush forests and sightings
          of tigers, leopards, and deer; and Parambikulam Tiger Reserve, a
          protected area with diverse wildlife and tribal settlements.
        </p>
      </div>
      <div className="w-full flex flex-wrap  justify-center mt-10 gap-3 mb-5">
        {places.map((item, i) => (
          <a
            href=""
            className="flex justify-center text-center flex-col w-96 h-full relative cursor-pointer no-underline"
            key={i}>
            <div className="px-1 py-2  rounded relative w-full  ">
              <img
                src={item.img}
                alt=""
                className="rounded transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className=" mb-4 font-bold absolute bottom-0 right-0 text-white px-3 text-2xl font-mono">
              {item.name}
            </p>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default WildLife;
