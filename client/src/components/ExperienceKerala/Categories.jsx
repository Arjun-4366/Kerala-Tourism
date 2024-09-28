import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
const navigate = useNavigate()
  const places = [
    {
      img: "./assets/Experience/hillstation.png",
      name: "Hill Stations",
      path:'hillstations'
    },
    {
      img: "./assets/Experience/wildlife.jpg",
      name: "Wild Life",
      path:'wildlife'
    },
    {
      img: "./assets/Experience/yoga.jpg",
      name: "Yoga",
    },
    {
      img: "./assets/Experience/waterfalls.png",
      name: "Water falls",
    },
    {
      img: "./assets/Experience/historical800.jpg",
      name: "Historical",
    },
    {
      img: "./assets/Experience/cultural.jpg",
      name: "Cultural",
    },
    {
      img: "./assets/Experience/cuisine.jpg",
      name: "Cusines",
    },
    {
      img: "./assets/Experience/cities.jpg",
      name: "Cities",
    },
    {
      img: "./assets/Experience/beaches.png",
      name: "Beaches",
    },
  ];
  const gotoRoute = (path)=>path
  return (
    <div className="mb-10">
      <div className="flex flex-col w-full items-center justify-center mt-7 px-10 ">
        <h1 className=" font-sans font-medium text-3xl ">Best Tourist Destinations in Kerala</h1>
        <p className="p-3 bg-lime-50 mt-3">
          Explore the list of the best tourist destinations in Kerala. Discover
          the best in Backwaters, Tea Plantations, Wildlife Sanctuaries,
          Waterfalls, Ayurveda - Yoga Centers, Cultural - Historical places in
          Kerala! Our master group can tailor make your itinerary including your
          favourite accommodation, activities and destination for bespoke Kerala
          sightseeing plan. Browse our tour packages and get free itinerary
          proposals and activity recommendations for your next Kerala visit!
        </p>
      </div>
      <div className="w-full flex flex-wrap  justify-center mt-10 gap-3" >
        {places.map((item, i) => (
          <a
            href=""
            className="flex justify-center text-center flex-col w-96 h-full relative cursor-pointer no-underline"
            key={i}>
            <div className="px-1 py-2  rounded relative w-full  " onClick={()=>navigate(`/${gotoRoute(item.path)}`)}>
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

export default Categories;
