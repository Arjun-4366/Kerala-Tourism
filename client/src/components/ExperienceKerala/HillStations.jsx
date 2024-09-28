import React from "react";
import Footer from "../common/Footer";

function HillStations() {
  const places = [
    {
      img: "./assets/Hillstations/Vagamon.jpg",
      name: "Vagamon",
      price: 4999,
      duration: '3 Days, 2 Nights',
      inclusions: ['Hotels', 'Meals', 'Private Car', 'Sight-Seeing'],
    },
    {
      img: "./assets/Hillstations/Munnar.jpg",
      name: "Munnar",
      price: 5999,
      duration: '4 Days, 3 Nights',
      inclusions: ['Hotels', 'Meals', 'Sight-Seeing'],
    },
    {
      img: "./assets/Hillstations/thekkady.jpg",
      name: "Thekkady",
      price: 4499,
      duration: '3 Days, 2 Nights',
      inclusions: ['Hotels', 'Meals', 'Private Car'],
    },
    {
      img: "./assets/Hillstations/Ranipuram.jpg",
      name: "Ranipuram",
      price: 3999,
      duration: '2 Days, 1 Night',
      inclusions: ['Hotels', 'Sight-Seeing'],
    },
    {
      img: "./assets/Hillstations/Ponmudi.webp",
      name: "Ponmudi",
      price: 3499,
      duration: '2 Days, 1 Night',
      inclusions: ['Hotels', 'Sight-Seeing'],
    },
    {
      img: "./assets/Hillstations/peermedu.webp",
      name: "Peermedu",
      price: 3799,
      duration: '3 Days, 2 Nights',
      inclusions: ['Hotels', 'Meals', 'Sight-Seeing'],
    },
  ];

  return (
    <div className="pt-20">
      <div className="flex flex-col w-full items-center justify-center mt-7 px-10 mb-5">
        <h1 className="font-sans font-medium text-3xl">Top Hill Stations For You</h1>
        <p className="p-3 bg-lime-50 mt-3">
          Hill stations in Kerala are known for their breathtaking landscapes, lush greenery, and cool climate. Nestled in the Western Ghats, these destinations are perfect for nature lovers and those seeking tranquility. Munnar, with its sprawling tea plantations, is a popular choice, while Wayanad offers picturesque views, waterfalls, and wildlife sanctuaries. The misty hills of Vagamon, the dense forests of Thekkady, and the scenic valleys of Ponmudi make Kerala's hill stations ideal for trekking, bird watching, and relaxation.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-10 gap-3 mb-5">
        {places.map((item, i) => (
          <div
            key={i}
            className="flex justify-center text-center flex-col w-96 h-full relative cursor-pointer no-underline overflow-hidden group"
          >
          
            <div className="px-1 py-2 rounded relative w-full">
              <img
                src={item.img}
                alt={item.name}
                className="rounded transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
              />
            </div>  

            
            <p className="mb-4 font-bold absolute bottom-0 right-0 text-white px-3 text-2xl font-mono">
              {item.name}
            </p>

            
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10">
              {/* <h2 className="text-xl font-bold">{item.name}</h2> */}
              {item.price && (
                <p className="mt-2 text-3xl ">
                    Price:
                  <strong className="text-red-400"> ₹{item.price} </strong>
                </p>
              )}
              {item.duration && (
                <p className="text-2xl">
                  <strong>Duration: </strong>{item.duration}
                </p>
              )}
              {item.inclusions && (
                <div className="mt-2">
                  <strong className="text-2xl">Inclusions:</strong>
                  <ul className=" list-inside">
                    {item.inclusions.map((include, index) => (
                      <li key={index}>{include}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default HillStations;
