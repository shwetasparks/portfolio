

import { Bars3Icon } from "@heroicons/react/16/solid";
import MobileNav from "./MobileNav";
import { useState } from "react";

function Navbar() {
   const [nav, setNav] = useState(false);
   const openNav = () => setNav(true);
   const closeNav = () => setNav(false);

   return (
      <div className="w-full h-[77px] top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417]">
         <MobileNav nav={nav} closeNav={closeNav} />
         <div className="w-[100%] z-[10000] top-0 h-[14vh]  m-1 ">
            <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
               <h1 className="flex-[0.9] cursor-pointer text-[20px] text-pink-200 font-bold">
                  SHWETA
                  <span className="text-pink-500">DEV</span>
               </h1>
               <li className="nav-link text-[20px]">
                  <a href="#home">HOME</a>
               </li>
               <li className="nav-link text-[20px]">
                  <a href="#services">SERVICES</a>
               </li>
               <li className="nav-link text-[20px]">
                  <a href="#projects">PROJECTS</a>
               </li>
               <li className="nav-link text-[20px]">
                  <a href="#contact">CONTACT</a>
               </li>

               

               <div onClick={openNav}>
                  <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-pink-400 " />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
