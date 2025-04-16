import React, { useState } from "react";

// import data from '../data/product.json'
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/slices/cardSlice";
import { Link } from "react-router-dom";
export const HomeFirst = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div className="min-h-[100vh] relative w-screen bg-white  gap-8  grid grid-cols-2 md:grid-cols-3 py-3 px-4">
        {data.map((item) => (
          <div
            className="cards h-[200px]  w-[130px] my-auto mx-auto py-2  px-1 flex flex-col  md:h-[300px] md:w-[210px]"
            key={item.id}
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.imageUrl}
                alt=""
                className="md:h-[200px]  w-full object-contain object-center transition-all 2"
              />
            </Link>
            <div className="flex flex-col  justify-around font-second text-center items-center text-[10px] md:text-[15px]">
              <h1>{item.price}</h1>
              <h1>{item.title}</h1>
              {(() => {
                const cartItem = cartItems.find(
                  (cartItem) => cartItem.id === item.id
                );
                return cartItem ? (
                  <div className="flex gap-2 items-center">
                    <button
                      className=" bg-gray-300 rounded  font-extrabold py-1 px-2 text-sm md:py-1 md:px-2"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      className=" bg-gray-300 rounded  font-extrabold py-1 px-2 text-sm md:py-1 md:px-2"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="rounded-md bg-slate-300  text-black font-front flex items-start justify-center focus:bg-green-300 hover:bg-green-300 transition-all  py-2 px-2 md:py-3 md:px-3"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <MdOutlineShoppingBag className="text-[20px]" />
                  </button>
                );
              })()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
