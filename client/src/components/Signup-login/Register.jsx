import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";



function Register({ toggleLoginForm }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
 
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  
  const fileInputRef = React.createRef();

  const handleRegister = async () => {
    
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("contact", userData.contact);
    formData.append("password", userData.password);
 

    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASED_URL}/register`, formData, config
      );
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      setMessage(response.data.message);
      // navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div>
          <a href="" onClick={() => navigate("/")}>
            <p className="text-green-600 text-4xl font-sans font-extrabold italic font-custom">
              Ker<span className="text-green-700">ala</span>
              <span className="text-green-800">4U</span>
            </p>
          </a>
        </div>

        <div className="d-flex items-center justify-center w-1/3">
          <div className="bg-transparent backdrop-brightness-100 backdrop-filter d-flex justify-center items-center px-7 py-4 rounded w-full">
            {message && (
              <p className="text-xl text-red-700 text-center">{message}</p>
            )}
           

            <div className="mt-2">
              <label className="block text-black text-sm font-bold mb-1">
                Name
              </label>
              <input
                className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                name="name"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="mt-2">
              <label className="block text-black text-sm font-bold mb-1">
                Email Address
              </label>
              <input
                className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                name="email"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="mt-2">
              <label className="block text-black text-sm font-bold mb-1">
                Contact No
              </label>
              <input
                className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                name="contact"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="mt-2 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-black text-sm font-bold mb-1">
                  Password
                </label>
              </div>
              <input
                className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                name="password"
                required
                onChange={changeHandler}
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white font-bold rounded-lg bg-transparent  border-2 shadow-md  hover:text-black hover:bg-green-800">
              <div
                className="flex px-5 justify-center w-full py-3"
                onClick={handleRegister}>
                Register
              </div>
            </a>
          </div>
        </div>
        <div className="mt-4 flex items-center w-full text-center mb-2">
          <a
            href="#"
            className="text-lg text-white capitalize text-center w-full">
            Already have an account?
            <span
              className="text-white hover:text-black ms-3 border-2 px-4 py-2 w-full hover:bg-green-800 outline outline-1 outline-white rounded-full"
              onClick={toggleLoginForm}>
              Log In
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Register;
