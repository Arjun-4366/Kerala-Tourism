import React from 'react'
import recommended from '../../data/recomendations'
function Recommended() {
    
  return (
    <div className='px-8 '>
        <h1 className='lg:text-5xl text-3xl text-center font-bold font-mono text- pt-8 text-black mb-7'>Recommended Places...</h1>
       
      <div className='  h-auto min-h-96 flex justify-between gap-4 '>
      {recommended.map((item,i)=>(
      <a href="" className='d-flex justify-center text-center flex-col w-80 h-full relative cursor-pointer no-underline' key={i}>
       <div className='px-1  rounded'>
        <img src={item.img} alt="" className='rounded transform transition-transform duration-300 hover:scale-110'/>
       </div>
       <p className='text-black mt-7 font-bold'>{item.name}</p>
      </a>
   
        ))}
   </div>
    </div>
  )
}

export default Recommended
