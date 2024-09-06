import React from "react";

function Hotels() {
  const hotelTypes = [
    {
      img: "./assets/Accommodation/ayruveda-accomodation.jpg",
      name: "AyurVedic Centers",
    },
    {
      img: "./assets/Accommodation/backpack.jpg",
      name: "BackPacking Lodges",
    },
    {
      img: "./assets/Accommodation/backwater.jpg",
      name: "Backwater Stays",
    },
    {
      img: "./assets/Accommodation/backwaters.png",
      name: "House Boats",
    },
    {
      img: "./assets/Accommodation/beach-stays.jpg",
      name: "Beach Stays",
    },
    {
      img: "./assets/Accommodation/estate-bunglaw1.jpg",
      name: "Estate Bunglaw",
    },
    {
      img: "./assets/Accommodation/farm-stay.jpg",
      name: "Farm Stay",
    },
    {
      img: "./assets/Accommodation/home-stays.jpg",
      name: "Home Stay",
    },
    {
      img: "./assets/Accommodation/honeymoon.jpg",
      name: "Honeymoon",
    },
    {
      img: "./assets/Accommodation/jungle-lodges.jpg",
      name: "Jungle Lodges",
    },
    {
      img: "./assets/Accommodation/plantation-stay.jpg",
      name: "Plantation Stay",
    },
    {
      img: "./assets/Accommodation/star-hotels.jpg",
      name: "Star Hotels",
    },
  ];
  return (
    <div className="mb-10">
      <div className="flex flex-col w-full items-center justify-center mt-7 px-10 ">
        <h1 className=" font-sans font-medium text-3xl ">
          Best Hotel Accommodations in Kerala
        </h1>
        <p className="p-3 bg-lime-50 mt-3">
          Kerala’s sheer number of tourist attractions is staggering, and their
          range can satisfy your tourism needs no matter what your preferred
          area of interest is – bustling cities, beaches, mountains, museums,
          jungle – Kerala has it all. The real issue becomes accommodation, with
          the throng of tourist huddling across the state round the year. So to
          help you out, we have compiled an exhaustive list of all the best
          hotels in Kerala grouped by the themes that they maintain – such as
          treehouses, backwater bungalows, mountain retreats, houseboats or star
          hotels – all of which can be found in our hand-picked selection.
          Access this list to find out the different accommodation themes, room
          types, rates, room tips, detailed info and online booking.
        </p>
      </div>
      <div className="w-full flex flex-wrap  justify-center mt-10 gap-3">
        {hotelTypes.map((item, i) => (
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
    </div>
  );
}

export default Hotels;
