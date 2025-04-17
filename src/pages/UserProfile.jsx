import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { logout } from "../redux/slices/authSlice";
import { motion, AnimatePresence } from "framer-motion";

const UserProfile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isclick, setIsclick] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


  


  return (
    <div className="h-[100vh] relative w-full">
      <div className="absolute  h-[calc(100vh-70px)] mt-[70px]   w-full">
        {user && (
          <>
            <div className=" bg-red-50 h-[10%] w-[80%] mx-auto flex  items-center justify-between px-4 ">
              <b>Hi {user.username}</b>

              <div className="h-[20px] bg-green items-center relative flex gap-1">
                {" "}
                <img
                  src="images/usericon.png"
                  className="h-[40px] bg-green-500  rounded-full"
                  alt=""
                />{" "}
                <IoIosArrowDown
                  className="h-[40px]"
                  onClick={() => setIsclick(!isclick)}
                />{" "}
                <AnimatePresence>
                  
                {isclick && (
                  <motion.button initial={{opacity:0, y:-10}} transition={{damping:250,mass:11,ease:"backIn" ,delay:0.1}} animate={{opacity:1,y:10}} exit={{opacity:0,y:0}} onClick={handleLogout} className="bg-red-600 px-2 py-2  z-40 rounded-md absolute top-[30px]">
                    logout{" "}
                  </motion.button>
                )}{" "}
                </AnimatePresence>
              </div>
            </div>
            <div className=" relative h-[80%] w-[80%] mx-auto">
              {cartItems.length === 0 ? <div className="bg-gray-500 min-h-30 py-3 w-full mx-auto absolute"> 
                <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">🛒 Your cart is empty!</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Go to Shop
          </button>
        </div>

              </div> :<div className=" bg-black min-h-24 w-full mx-auto absolute"></div>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
