import React, { useState } from 'react'
import data from '../data/product.json'
import { MdOutlineShoppingBag } from "react-icons/md";
export const HomeFirst = () => {
  return (

  
    <>
    
    
    
   
    <div className='min-h-[100vh] relative w-screen overflow-visible gap-8 grid grid-cols-2 md:grid-cols-4 px-4'>
      {data.map((item)=>(
        <div className='cards h-[250px] w-[130px] my-auto mx-auto py-2 px-1 flex flex-col  md:h-[300px] md:w-[210px]'>
          <img src={item.imageUrl} alt="" className='h-[350px] w-full object-contain object-center transition-all 2' />
          <div className='flex flex-col justify-around font-second text-center items-center text-[10px] md:text-[15px]'><h1>{item.price}</h1>
          <h1>{item.title}</h1>
          <button className='rounded-md bg-slate-300 py-3 px-3 text-black font-front flex items-start justify-center focus:bg-green-300 hover:bg-green-300 transition-all'><MdOutlineShoppingBag className='text-[20px]'/></button></div>

        </div>
      ))}
      
    </div>
    </>
  )
}
