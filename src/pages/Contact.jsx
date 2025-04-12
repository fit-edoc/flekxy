import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-green-200 to-slate-900 w-full h-[100vh] '>
     
      <div className='bg-white/50 backdrop-blur-2xl rounded-lg h-[80vh] md:w-[50vw] absolute left-[50%] top-[55%] translate-x-[-50%] translate-y-[-50%] px-4'>
     
        <form action="">
          <div className='h-[100px] w-full flex justify-center items-end md:items-center'> <h1 className='text-black font-banner text-center md:text-[2vw]'>GET A QUERY</h1></div>
          <div className='h-[100px] w-full  flex  justify-center  gap-4 items-end md:items-center' ><input type="text" className='h-[40px] w-[100px] md:w-[15vw]  px-2 rounded-lg'  name="" id="" placeholder='First' /><input type="text" name="" className='h-[40px] w-[100px] md:w-[15vw]    px-2 rounded-lg' id="" placeholder='Last' /></div>
          <div className='h-[100px] w-full  flex  items-center justify-center'><input type="text" name="" id="" className='h-[40px] px-2 rounded-lg w-[220px] md:w-[31.5vw]' placeholder='example@gmail.com' /></div>
          <div className='flex justify-center items-center py-2'> <input type="text" className='h-[200px] rounded-lg px-2  md:w-[31.5vw]' name="" placeholder='message' id="" /></div>
          <div className='flex justify-center items-center py-2'><button className='h-[50px] md:w-[31.vw] bg-black capitalize text-white px-2 rounded-lg '>send message</button></div>
        </form>
      </div>
    </div>
  )
}
