import React from 'react'
import SloganStrip from '../resuse/SloganStrip'
import { HomeFirst } from './HomeFirst'


export const Home = () => {
  return (
    <>
    <div className='hero h-[100vh] w-full'>
        <div className='h-[60%] w-screen   flex  justify-center  items-center md:items-end'><h1 className='font-front text-black bg-white/50 text-center   text-[7vw] md:text-[4vw]'>Discover Your Style <br /> <span className='text-[#979242]'>Shop the Latest Trends.</span> </h1></div>
        <SloganStrip/>  <div  className='hero1 bg-red-100 h-[50%] w-screen flex  justify-center items-center py-8'>
<<<<<<< HEAD
                   <h1 className=' text-3xl text-white font-banner md:text-2xl'> DRIP WITH US</h1>
            </div>
    </div>
    <HomeFirst />
=======
                   <h1 className='text-2xl text-white font-banner'> DRIP WITH US</h1>
            </div>
    </div>
    <HomeFirst/>
>>>>>>> 046a5c2e9a4d2456b661831d56b0d78fe10d9abc
    </>
  )
}
