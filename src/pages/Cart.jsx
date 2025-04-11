
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/slices/cardSlice'
import { AnimatePresence, motion } from 'framer-motion'

export const Cart = () => {

  const dispatch = useDispatch()
  
  const { cartItems, totalAmount, discount, coupon } = useSelector((state) => state.cart);
  console.log(cartItems);
  
 
  return (
    <div className='min-h-[100vh] w-full flex overflow-scroll'>
      
      <div className='h-full md:w-[50%]'>{cartItems.map((item) => (
      
        <div  className='w-full bg-black/5   mx-auto py-20 border-b border-black p-2 flex font-bold   md:flex-col md:px-10' key={item.id}>
          <div className='mx-auto'> <motion.img exit={{ y: -200, }}
        transition={{ duration: 0.2 }} src={item.imageUrl} alt="" className='h-[120px] mx-auto border object-cover  border-black p-2 md:w-[70%] md:h-[70%]' /></div>
          <div className='w-[70%] h-[70%]  bg-slate-300 flex justify-around mx-auto md:w-[57.8%]'>
            <div className='flex flex-col text-center justify-start items-center b  w-[50%]'><h1>{item.title}</h1>
          <h1 className='bg-green-300'>{item.price}</h1>
          </div>
            <div className='w-[80%] flex justify-end gap-2 items-center  text-lg pr-2 px-3'>
              <button className='h-[30px] w-[30px] rounded-full bg-gray-400 active:bg-yellow-500' onClick={()=>dispatch(incrementQuantity(item.id))}>+</button>
              <AnimatePresence mode="wait">
      <motion.h1
        key={item.quantity}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="font-bold"
      >
        {item.quantity}
      </motion.h1>
    </AnimatePresence>
              <button className='h-[30px] w-[30px] rounded-full bg-gray-400 active:bg-yellow-50' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <button className='h-[30px] w-[70px] bg-blue-400 rounded-md' onClick={()=>dispatch(removeFromCart(item.id))}>remove</button>
             
             </div>
          </div>
          
        </div>
      )) }</div>
      <div className='total  md:h-[90vh] fixed overflow-hidden left-[50%] w-screen bg-[#cd9eea]  top-[70px]   py-4 pb-4 hidden md:flex'>
      <div className='bill min-h-[60vh] w-[30%] text-base bg-white ml-5 flex'>
      <div className='bill2 h-[50vh] w-full bg-white px-4 py-2 font-bill flex flex-col gap-2'>
      <h1 className='text-center font-bill py-4 text-black text-[2vw]'>YOUR BILL</h1>
        {cartItems.map(item=>(
       
       <>
       <div className=''>
         <ol><li className='list-decimal'> <p>{item.title}</p> </li></ol>
        </div>
        <div className='border-b-2 border-black'> <p className='bg-green-300'>{item.price} - Quantity {item.quantity}</p></div>
       
      
       </>
      ))}
      </div>
     

      </div>
     
      <div className='totalbill bg-gray-500 h-[300px] w-[300px] ml-1'> <h1 className='pay h-[60%] bg-white text-[3vw] text-center underline font-bill'> ${totalAmount.toFixed(2)}</h1><br />
      <div className='flex justify-center'><button className='button-74'>PAY</button></div></div>
      </div>
      
    </div>
  )
}
