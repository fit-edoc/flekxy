import { Link } from 'react-router-dom';
import { FaCross, FaShoppingCart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { useState } from 'react';



export default function Navbar() {
  const [isclick,setIsclick] = useState(null)

  
  return (
    <nav className="navbar w-screen   bg-[#322d0f] h-[70px] fixed  text-white flex font-serif text-lg z-50"> 
      <div className="h-full w-[40%] flex items-center md:justify-center px-2 font-second text-nowrap"><Link to='/'>E-Commerce</Link></div>
      <div className='h-full w-[30%]  flex items-center justify-center opacity-0 md:opacity-100'>
        <ul className="flex justify-center  gap-3 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul></div>
      <div className='h-full w-[20%] flex items-center justify-end text-lg gap-2 md:justify-start'><Link to="/cart"><FaShoppingCart/>  </Link><Link><MdOutlineAccountCircle/></Link>
      <Link onClick={()=>setIsclick(true)}><IoSearchSharp/> </Link></div>
      {isclick === true && ( <div className='absolute h-full w-full bg-green-500 flex items-center justify-center text-[2vw]'> <input type="search" /> <button><IoSearchSharp/></button> <button onClick={()=>setIsclick(false)}><IoArrowBackCircle/></button></div>)}
     
    </nav>
  );
}