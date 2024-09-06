import React from "react";

function ActivityTypes() {
  const thingsTodo = [
    {
      img: "./assets/ThingsTodo/ayurveda.jpg",
      name: "Ayurvedic Centers",
    },
    {
      img: "./assets/ThingsTodo/backwaters.png",
      name: "BackWaters",
    },
    {
      img: "./assets/ThingsTodo/birdwatching.jpg",
      name: "Bird Watching",
    },
    {
      img: "./assets/ThingsTodo/boating.jpg",
      name: "Boating",
    },
    {
      img: "./assets/ThingsTodo/canoe.jpg",
      name: "Canoe Rides",
    },
    {
      img: "./assets/ThingsTodo/cuisine.jpg",
      name: "Cuisines",
    },
    {
      img: "./assets/ThingsTodo/cultural.jpg",
      name: "Cultural Shows",
    },
    {
      img: "./assets/ThingsTodo/cycling.jpg",
      name: "Cycling",
    },
    {
      img: "./assets/ThingsTodo/elephantride.jpg",
      name: "Elephant Ride",
    },
    {
      img: "./assets/ThingsTodo/jeepsafari.jpg",
      name: "Jeep Safari",
    },
    {
      img: "./assets/ThingsTodo/museum.jpg",
      name: "Museums & Historical Places",
    },
    {
      img: "./assets/ThingsTodo/nationalpark.jpg",
      name: "National Parks",
    },
    {
      img: "./assets/ThingsTodo/photography.jpg",
      name: "Photography walks",
    },
    {
      img: "./assets/ThingsTodo/plantation.jpg",
      name: "Plantation Visits",
    },
    {
      img: "./assets/ThingsTodo/shopping.jpg",
      name: "Shopping & Souvenirs",
    },
    {
      img: "./assets/ThingsTodo/sightseeing.jpg",
      name: "Outdoor Activities & Parks",
    },
    {
      img: "./assets/ThingsTodo/topstation.jpg",
      name: "Sight Seeing",
    },
    {
      img: "./assets/ThingsTodo/villagewalk.jpg",
      name: "Village Walks",
    },
    {
      img: "./assets/ThingsTodo/wayanad.png",
      name: "Trecking & Jungle Campings",
    },
    {
      img: "./assets/ThingsTodo/yoga.jpg",
      name: "Yoga",
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex flex-col w-full items-center justify-center mt-7 px-10 ">
        <h1 className=" font-sans font-medium text-3xl ">
          Best Activities in Kerala
        </h1>
        <p className="p-3 bg-lime-50 mt-3">
          Kerala is perhaps the most prominent state in India when it comes to
          tourism, and with good reason. Not only is the whole plateau a
          slideshow of one breathtaking natural vista after the other, with
          varying scenes of backwater and mountainous regions, but its major
          cities and even smaller towns are chock full of activities for you to
          partake in. This includes such diverse range of ventures such as
          trekking, birding, canoeing, cycling and para gliding. Here we enlist
          all the popular activities in Kerala to enrich your tour itinerary. We
          encourage responsible and sustainable tourism and advocate no plastic
          policy in all tourist spots.
        </p>
      </div>
      <div className="w-full flex flex-wrap  justify-center mt-10 gap-3">
        {thingsTodo.map((item, i) => (
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

export default ActivityTypes;
