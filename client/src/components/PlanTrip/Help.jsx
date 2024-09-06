import React, { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

import { IoMdMail } from "react-icons/io";
import ChatUI from "./ChatUI";

function Help() {
  const [chatBox, setChatBox] = useState(true);
  const toggleChatBox = () => {
    setChatBox(!chatBox)
  }
  return (
    <>
      {chatBox ? (
        <div className="w-full md:w-1/3 p-4">
          <div className="flex flex-col justify-center items-center bg-gray-200 p-6 rounded-lg shadow-md mb-4 gap-2">
            <p className="font-bold text-lg mb-2">ADDRESS</p>
            <p className="text-center">
              Kerala4u Holiday Planners
              <br />
              Kanhangad, Bigball Complex
              <br />
              Kasargod, Kerala 671314
            </p>
            <hr className="w-full border-t-2 border-gray-400 my-2" />
            <hr />
            <div className="flex justify-center items-center">
              <IoMdMail className="text-green-600 text-3xl m-2" />
              <span className="text-green-600 text-xl cursor-pointer">
                testkeral4u@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-200 p-6 rounded-lg shadow-md gap-2">
            <MdOutlineSupportAgent className="text-gray-600 text-6xl" />
            <p className="text-center">
              BOOK BY{" "}
              <span className="text-green-600 cursor-pointer">PHONE</span> /NEED{" "}
              <span
                className="text-green-600 cursor-pointer"
                onClick={toggleChatBox}>
                HELP
              </span>
              ?
            </p>
            <p className="text-center">+91 9009009900</p>
            <p className="text-center">
              Monday - Saturday 9:00 AM to 6:00 PM (IST)
            </p>
          </div>
        </div>
      ) : (
        <ChatUI toggleChatBox={toggleChatBox} />
      )}
    </>
  );
}

export default Help;
