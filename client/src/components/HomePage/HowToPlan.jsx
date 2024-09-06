import React from "react";
import { IoIosMail } from "react-icons/io";
import { PiChatsBold } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbDeviceMobilePin } from "react-icons/tb";


function HowToPlan() {


  return (
    <div className="p-8 bg-green-200 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl mb-8">HOW IT WORKS</h1>
      <div className="flex flex-wrap justify-center items-start gap-8">
        <div className="flex flex-col justify-center items-center p-4 w-64 text-center ">
          <IoIosMail className="text-6xl text-green-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">SHARE WITH US</h3>
          <p >Book your customized holiday plan with us and pack your bags!</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 w-64 text-center ">
          <PiChatsBold className="text-6xl text-green-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">DISCUSS WITH US</h3>
          <p className="text-gray-600">Plan and get a personalized itinerary that seamlessly integrates your preferences and interests.</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 w-64 text-center ">
          <FaMapLocationDot className="text-6xl text-green-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">PLAN WITH US</h3>
          <p className="text-gray-600">Start discussions with our travel itinerary experts. Explore the list of destinations, accommodations, and activity options.</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 w-64 text-center ">
          <TbDeviceMobilePin className="text-6xl text-green-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">BOOK WITH US</h3>
          <p className="text-gray-600">Share your interests, details, budget, and expectations with us.</p>
        </div>
      </div>
    </div>
  )
}

export default HowToPlan