
import profile from "../../assets/profileimg.png";
import Particle from "../Particle";
import Texteffect from "../Texteffect";
// import bannerImage from "../../assets/banner.jpg";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
// import profile_img from "../../assets/profile_img.png";

function Hero() {
   return (
      <div className="h-[88vh] bg-cover bg-center bg-[url('../../assets/banner.jpg')]">
         {/* // style={{ backgroundImage: `url(${bannerImage})` }}> */}
         <Particle />
         <div className="w-[70%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[12rem] h-[100%] items-center px-2">
            <div className="p-2">
               <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                  Hey👋 I'm <span className="text-pink-500">SHWETA</span>
               </h1>
               <Texteffect />
               <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
                  Full-stack developer specializing in MERN, transforming ideas
                  into reality with cutting-edge technologies.
               </p>
               <div className="mt-[1.5rem] flex space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6">
                  <div className="flex space-x-2 gap-8">
                     <a
                        href="https://drive.google.com/file/d/1KGsktJDTmz1oIP0_1xa0-kaABO62xM8B/view?usp=sharing"
                        target="_blank"
                        className="p-1 hover:bg-purple-400 transition-all duration-200  text-[14px] uppercase bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm text-center me-2 mb-2 text-black flex items-center">
                        <p>Download cv </p>
                        <ArrowDownTrayIcon />
                     </a>
                     <a
                        href="https://www.linkedin.com/in/shweta-k001/"
                        target="_blank"
                        className="px-[1.5rem] hover:bg-purple-400 transition-all duration-200 py-[01rem] text-[18px] uppercase bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm text-center me-2 mb-2 text-black flex items-center">
                        <p>LinkedIn</p>
                     </a>
                  </div>
               </div>
            </div>

            <div className="w-[400px] hidden relative lg:flex items-center rounded-full h-[500px] animate-float-slow">
               <img
                  src={profile}
                  alt="profile"
                  className="object-cover rounded-full h-96 w-96 lg:h-500 lg:w-500"
               />
            </div>
         </div>
      </div>
   );
}

export default Hero;
