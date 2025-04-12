import React from "react";

export const About = () => {
  return (
    <div className="h-[100vh] relative w-full bg-[#f2f3f2] py-4">
      <div className="absolute  h-[90vh] top-[9%] w-full">
        <div className="h-[70%] w-full  absolute bg-gradient-to-r from-green-200 to-slate-900 py-5 text-white">
          <h1 className="font-banner  text-center pl-3 md:text-start text-[20px] md:text-[2vw]">
            ABOUT US
          </h1>
          <p className="px-4 py-10 font-front">
            <span className="bg-green-200 text-black">Welcome to Flekxy</span> —
            your one-stop destination for all things fashion, lifestyle, and
            convenience! At Flekxy, we believe shopping should be flexible, fun,
            and friction-free. Whether you're hunting for the latest trends,
            everyday essentials, or unique finds, we've built a platform that
            brings you the best — all in one place.
          </p>
          <p className="px-4 py-10 font-front hidden md:block">
         <span className="bg-green-200 text-black"> Why Choose Flekxy?</span>
We’re more than just a shopping platform — we’re a community. We’re here to support self-expression, empower small brands, and deliver products that inspire joy every day.

With customer satisfaction at the heart of everything we do, our mission is simple:
To make your online shopping experience seamless, stylish, and satisfying.


          </p>
        </div>
        <div className="lower h-[70%] absolute top-[30%] w-full bg-red-400">
          <img
            src="./images/about.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
