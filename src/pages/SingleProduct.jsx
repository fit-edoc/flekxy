import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export  const SingleProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((item) => item.id === parseInt(id))
  );
  console.log(product);
  

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
   <div className=' relative h-[100vh] w-full'>
   <div className='absolute h-[calc(100vh-70px)]  bg-gradient-to-r from-green-200 to-slate-900   w-full mt-[70px]'>
   <div className="p-4 py-4 px-5  max-w-xl mx-auto border-white bg-black/30  rounded-sm text-yellow-50 my-auto">
      <img src={product.imageUrl} alt={product.title} className="w-full h-auto mb-4 rounded-lg" />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg text-yellow-50 mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description || "No description available."}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
   </div>
   </div>
  );
};


