import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/slices/cardSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); // Assuming user info is stored in Redux
  console.log("isAuthenticated:", isAuthenticated);
  console.log("user:", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckOut = async () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      // Prepare the cart data to send+
      const orderData = {
        userId: user.id, // Assuming you have a user ID
        cartItems: cartItems,
        totalAmount: cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };

      try {
        // Send the data to the backend API (replace with your actual endpoint)
        const response = await axios.post("/api/checkout", orderData);

        if (response.status === 200) {
          // Clear cart (optional)
          dispatch(clearCart());

          // Navigate to confirmation page (optional)
          navigate("/order-confirmation");
        }
      } catch (error) {
        console.error("Checkout failed:", error);
        // Handle errors such as server failures, etc.
      }
    }
  };

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">🛒 Your cart is empty!</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Go to Shop
          </button>
        </div>
      ) : (
        <div className="min-h-screen relative w-full flex flex-wrap">
          {/* Left Side */}
          <div className="relative w-full md:w-[80%] bg-gradient-to-r from-green-200 to-slate-900 pt-3 px-4 py-4 mt-[70px] flex flex-col gap-32">
            {cartItems.map((item, idx) => (
              <div className="h-[300px] w-[100%] px-2 flex bg-[#ffffff7c] backdrop-blur-xl border-b-2 border-black rounded-lg md:w-[80%] md:h-[400px] md:mx-auto md:py-4">
                <div className="h-full w-full  px-2 flex flex-col justify-around gap-40 md:gap-[300px]"><h1 className="text-lg text-black font-nav md:text-[1.5vw]">{item.title}</h1> <b>${item.price}</b> </div>
                <div className="h-full w-full  rounded-lg flex flex-col py-3 gap-4"> <img src={item.imageUrl} className="rounded-lg h-[80%] md:w-[280x] md:h-[280px] md:mx-auto"  alt="" />
                <div className="flex justify-center rounded-lg min-h-1 items-center gap-3 "><button className="h-[30px] w-[30px] rounded-full bg-gray-200 text-black text-lg font-extrabold text-center" onClick={()=>dispatch(decrementQuantity(item.id))}>-</button><span className="font-extrabold text-lg">{item.quantity}</span>
                <button className="h-[30px] w-[30px] rounded-full bg-gray-200 text-black font-extrabold text-center" onClick={()=>dispatch(incrementQuantity(item.id))}>+</button> <br /><button className="px-2 py-1 rounded-md bg-yellow-300"onClick={()=>dispatch(removeFromCart(item.id))} >Remove</button></div></div>
              </div>
            
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex justify-between items-center flex-col z-50 w-full md:w-[20%] mx-auto fixed left-[80%] py-4 bg-gradient-to-r from-green-200 to-slate-900  h-[calc(100vh-70px)]  mt-[70px]">

<div className="bill absolute h-[calc(100vh-100px)] w-[90%] mx-auto justify-between items-center flex flex-col py-8 bg-red-50"><div><h1 className=" capitalize text-[1.5vw] text-center font-bill">your total amount is {totalAmount}</h1></div>
<div><button className="px-8 py-2 rounded-lg bg-green-400">PAYMENT</button></div></div>
            
            {/* Sidebar content */}
          </div>
        </div>
      )}
    </div>
  );
};
