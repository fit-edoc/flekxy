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
      <div className="flex justify-center items-center gap-2 text-[30px]">
        <a href="https://github.com/fit-edoc" className="text-indigo-600 active:text-white">
          <FaGithub />
        </a>{" "}
        <a href="https://www.linkedin.com/in/himanshu-verma-6b4a94329/" className="text-blue-400 active:text-white">
          <FaLinkedin />
        </a>
        <a href="mailto:himanshuverma2660@gmail.com" className="text-yellow-300 active:text-white">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}
