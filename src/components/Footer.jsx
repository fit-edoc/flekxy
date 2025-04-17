import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {


  
  const currentdate = new Date().getFullYear()
  
  
  

  return (
    <footer className="footer text-center flex flex-col gap-2 justify-center items-center py-2 h-[100px] bg-black text-white z-40">
      <p className="underline py-1">
        
      ©{currentdate}<span className=""> FLEKXY </span> All rights reserved.
      </p>
      <div className="flex justify-center gap-2 text-[20px]">
        <a href="">
          <FaGithub />
        </a>{" "}
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}
