import React from "react";
import { IoMdClose } from "react-icons/io";
function ChatUI({ toggleChatBox }) {
  return (
    <div className="flex flex-col h-96  justify-center mt-20">
      <div className="bg-gray-200 flex-1 overflow-y-auto rounded-tl-lg rounded-tr-lg p-2">
        <div className="px-3 py-1">
          <div className="flex items-center mb-1 justify-between">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://picsum.photos/50/50"
              alt="User Avatar"
            />
            <div className="font-medium">John Doe</div>
            <IoMdClose
              className="cursor-pointer text-2xl hover:text-red-500"
              onClick={toggleChatBox}
            />
          </div>
          <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-xs">
            Hai,I am Your chat assistant
          </div>
          <div className="flex items-center justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-xs">
              Sure, I can help with that.
            </div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/50/50"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 px-3 py-2 rounded-bl-lg rounded-br-lg">
        <div className="flex items-center">
          <input
            className="w-full border rounded-full py-2 px-3 mr-2"
            type="text"
            placeholder="Type your message..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatUI;
