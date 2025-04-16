import React from 'react'
import { useSelector } from 'react-redux';


export const MobileBill = () => {

    const { cartItems, totalAmount } = useSelector((state) => state.cart);

  return (
    <>
    <div className='total h-[90vh] absolute overflow-hidden  w-screen  bg-gradient-to-r from-green-200 to-slate-900 top-[70px] py-4 pb-4 flex'>
                <div className='bill min-h-[60vh] w-[30%] text-base bg-white ml-5 flex flex-col'>
                  <div className='bill2 h-[50vh] w-full bg-white px-4 py-2 font-bill flex flex-col gap-2'>
                    <h1 className='text-center font-bill py-4 text-black text-[2vw]'>YOUR BILL</h1>
                    {cartItems.map((item) => (
                      <React.Fragment key={item.id}>
                        <div>
                          <ol>
                            <li className='list-decimal'><p>{item.title}</p></li>
                          </ol>
                        </div>
                        <div className='border-b-2 border-black'>
                          <p className='bg-green-300'>
                            ${item.price} - Quantity {item.quantity}
                          </p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className='totalbill bg-gray-500 h-[300px] w-[300px] ml-1'>
                  <h1 className='pay h-[60%] bg-white text-[3vw] text-center underline font-bill'>
                    ${totalAmount.toFixed(2)}
                  </h1>
                  <br />
                  <div className='flex justify-center'>
                    <button className='button-74'>PAY</button>
                  </div>
                </div>
                  
                </div>
    
            
              </div>
   
   
    </>
    
  )
}
