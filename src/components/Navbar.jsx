import { Link } from "react-router-dom";
import { FaCross, FaShoppingCart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isclick, setIsclick] = useState(null);
  const phrases = [
    "Style Simplified",

    "Effortless Elegance",

    "Chic Vibes",

    "Bold Threads",

    "Fierce Fashion",

    "Timeless Trends",

    "Wear Confidence",

    "Vogue Vibes",

    "Casual Royalty",

    "Slay Daily",
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(
      () => {
        if (typingForward) {
          if (charIndex < currentPhrase.length) {
            setPlaceholder(currentPhrase.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTypingForward(false);
            setTimeout(() => {}, 4000); // Pause after typing full
          }
        } else {
          if (charIndex > 0) {
            setPlaceholder(currentPhrase.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setTypingForward(true);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      typingForward ? 100 : 50
    ); // Typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, typingForward, currentPhraseIndex]);

  return (
    <nav className="navbar w-screen   bg-[#477836] h-[70px] fixed  text-white flex   capitalize z-50">
      <div className="h-full w-[40%] flex items-center md:justify-center px-2 font-second text-nowrap">
        <Link to="/" className="font-flexx text-blue-50   md:text-[1.3vw]">flekxy</Link>
      </div>
      <div className="h-full w-[30%]  flex items-center justify-center opacity-0 md:opacity-100">
        <ul className="flex justify-center  gap-4 items-center font-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <div className="h-full w-[20%] flex items-center justify-end  gap-2 ml-3 text-[30px] md:justify-start">
        <Link to="/cart" className="relative" >
          <FaShoppingCart  /> {totalQuantity > 0 &&(<span className=" left-4 px-2  text-[15px] rounded-full absolute top-[-40%] text-black  bg-red-400 md:px-3 md:text-[20px]">{totalQuantity}</span>)}{" "}
        </Link>
        <Link>
          <MdOutlineAccountCircle />
        </Link>
        <Link onClick={() => setIsclick(true)}>
          <IoSearchSharp />{" "}
        </Link>
      </div>
      {isclick === true && (
        <div className="absolute h-full w-full bg-green-950 flex ">
          <div className="h-full w-[0%]   items-center justify-center hidden md:flex  md:w-[30%]">  <Link to="/">E-Commerce</Link></div>
        <div className="h-full w-[100%]  flex items-center justify-center gap-2 md:w-[40%] px-2">  <input
            type="search"
            className="text-[15px] h-[40px]  w-[220px] ml-5 rounded-md text-black py-3 px-1 md:w-[30vw]"
            placeholder={placeholder}
          />{" "}
          <button className="text-[30px]">
            <IoSearchSharp />
          </button>{" "}
          <button onClick={() => setIsclick(false)} className="text-[30px]">
            <IoArrowBackCircle />
          </button></div>
          <div className="h-full   justify-center items-center text-[30px] gap-3 hidden md:flex md:w-[30%]"> <Link to="/cart" className="relative">
          <FaShoppingCart /> {totalQuantity > 0 &&(<span className=" left-4 px-2  text-[15px] rounded-full absolute top-[-40%] text-black  bg-red-400 md:px-3 md:text-[20px]">{totalQuantity}</span>)}
        </Link>
        <Link>
          <MdOutlineAccountCircle />
        </Link></div>
          
        </div>
      )}
    </nav>
  );
}
