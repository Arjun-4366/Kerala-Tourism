import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

function Login() {
  const [isLogin,setIsLogin] = useState(true)
  const navigate = useNavigate()

  const toggleLoginForm = () =>{
    setIsLogin(!isLogin)
  }

  const signInWithGoogle = async(req,res,next) =>{
    try{
      
    }
    catch (error){
      console.log(error.message)
    }
  }
  return (
    
<div className="bg-login bg-cover bg-center  bg-no-repeat h-screen flex flex-col items-center justify-center">
 
 {isLogin ? 
 <>
 <div>
   <a href="" onClick={() => navigate("/")}>
             <p className="text-green-600  text-4xl font-sans font-extrabold italic font-custom ">
               Ker<span className="text-green-700">ala</span>
               <span className="text-green-800">4U</span>{" "}
             </p>
           </a>
 
   </div>
 <div className="d-flex items-center justify-center w-1/3">
       <div className="bg-transparent backdrop-brightness-100  backdrop-filter d-flex justify-center items-center px-7 py-4 rounded  ">
         <p className="text-xl text-black text-center">Welcome back!</p>
         <div className="mt-4">
           <label className="block text-black text-sm font-bold mb-2">
             Email Address
           </label>
           <input
             className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 outline"
             type="email"
             required
           />
         </div>
         <div className="mt-4 flex flex-col justify-between">
           <div className="flex justify-between">
             <label className="block text-black text-sm font-bold mb-2">
               Password
             </label>
           </div>
           <input
             className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 outline"
             type="password"
           />
           <a
             href="#"
             className="text-xs text-black hover:text-white hover:underline text-end w-full mt-2">
             Forget Password?
           </a>
         </div>
         <a
           href="#"
           className=" flex items-center justify-center mt-4 text-black font-bold rounded-lg shadow-md hover:bg-green-800 hover:text-white outline">
           <div className="flex px-5 justify-center w-full py-3">
             Login
           </div>
         </a>
        
           
           <div className="flex items-center justify-center mt-7" onClick={signInWithGoogle}>
           <img src="/assets/google.png" alt="" className="w-10 cursor-pointer hover:scale-110 transition-all duration-300" />
           </div>
        
        
        
       </div>
     </div>
     <div className="mt-4 flex items-center w-full text-center">
     <a
       href="#"
       className="text-lg text-white capitalize text-center w-full  ">
       Don't have any account?
       <span className="text-white  hover:text-black ms-3 border-2  px-4 py-2 w-full hover:bg-green-800 outline outline-1 outline-white rounded-full" onClick={toggleLoginForm}>Sign Up</span>
     </a>
   </div>
 </>:
 <Register toggleLoginForm = {toggleLoginForm}/>
 }
 
     
 </div>
     
   

  );
}

export default Login;
