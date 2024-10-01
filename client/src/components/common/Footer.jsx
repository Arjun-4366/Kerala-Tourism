import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <section className="flex flex-col bg-[#b5b5b7] pt-7">
        <div className="lg:flex  justify-between pb-8 px-8">
          <div className="lg:flex justify-between m-auto lg:w-full lg:px-0 px-3">
            <div className="">
              <a href="" onClick={() => navigate("/")}>
                <p className="text-green-800  text-3xl font-sans font-extrabold italic font-custom ">
                  Kerala4U
                </p>
              </a>
              <p className="cursor-pointer hover:underline mt-1">
                Terms & Conditions
              </p>
              <p className="cursor-pointer hover:underline mt-1">
                Privacy & Policy
              </p>
              <div className="flex items-center gap-4  mt-2">
                <FaFacebook className="cursor-pointer hover:text-blue-900" />
                <FaSquareXTwitter className="cursor-pointer hover:text-black " />
                <FaSquareInstagram className="cursor-pointer hover:text-pink-600" />
                <FaYoutube className="cursor-pointer hover:text-red-800" />
              </div>
            </div>
            <div>
                <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">Support</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline" onClick={()=>navigate('/planMyTrip')}>Contact</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Blog</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline"onClick={()=>navigate('/planMyTrip')}>Help</p>
            </div>
            <div>
                <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">Travel Hub</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline" onClick={()=>navigate('/explore')}>Kerala at a glance</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Travel Care</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Where to Stay</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Travel Tips</p>
            </div>
            <div>
                <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">Nature</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline" onClick={()=>navigate('/hillstations')}>Hills</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Backwaters</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Beaches</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline" onClick={()=>navigate('/wildlife')}>Wildlife</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Waterfalls</p>
            </div>
            <div>
                <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">Places</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Munnar</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Wayanad</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Kovalam</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Periyar</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Varkala</p>
            </div>
            <div>
                <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">Specialities</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Ayurveda</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Monsoon</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Houseboat</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Kerala Food</p>
                <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Festivals</p>
            </div>
          </div>
        
        </div>
        <div className="flex items-center justify-center pb-2">
            <p className=" font-bold text-gray-700">All rights reserved © Kerala Tourism 2024</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
