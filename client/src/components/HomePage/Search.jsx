import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
    const [showSearch , setShowSearch] = useState(false)
     useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setShowSearch(true)
            }
            else{
                setShowSearch(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
     },[])
  return (
    <div className='w-full'> 
    {showSearch && <div className='lg:w-2/3 w-4/5 relative h-16 m-auto -mt-[7.5rem] transition-full duration-2000 '>
        <FaSearch className='text-black top-0 bottom-0 h-full left-8 absolute'/>
        <input type="text" placeholder='Where you want to go?' className=' bg-gradient-to-r from-[#4a9152] to-[#64a8a8] rounded-full border-none h-full w-full pl-16 text-black font-mono placeholder-black '/>
      </div>}
         </div>
    
  )
}

export default Search
