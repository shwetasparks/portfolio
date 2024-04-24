
import { CodeBracketSquareIcon } from "@heroicons/react/16/solid";


function Services() {
   return (
      <div className="bg-[09101A] pt-[4rem] pb-[5rem] " id="services">
         <div className="p-5 flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold mb-8">Services</h1>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
            <div className=" bg-blue-950 hover:scale-110 transform transition-all duration-200 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
               <CodeBracketSquareIcon className="w-[6rem] mx-auto text-[#d3fae8]" />
               <h1 className="text-[20px] md:text-[30px] mt-[1rem]">
                  Frontend
               </h1>
               <p className="text-[15px] text-[#9ed3ff] font-normal p-1 ">
                  Crafting captivating user experiences through expert frontend
                  development.
               </p>
            </div>
            <div className=" bg-blue-950 hover:scale-110 transform transition-all duration-200 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
               <CodeBracketSquareIcon className="w-[6rem] mx-auto text-[#d3fae8]" />
               <h1 className="text-[20px] md:text-[30px] mt-[1rem]">Backend</h1>
               <p className="text-[15px] text-[#9ed3ff] font-normal p-1 ">
                  Drive your platform's functionality with resilient, scalable
                  backend architecture.
               </p>
            </div>
            <div className=" bg-blue-950 hover:scale-110 transform transition-all duration-200 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
               <CodeBracketSquareIcon className="w-[6rem] mx-auto text-[#d3fae8]" />
               <h1 className="text-[20px] md:text-[30px] mt-[1rem]">
                  Full Stack
               </h1>
               <p className="text-[15px] text-[#9ed3ff] font-normal p-1 ">
                  Deliver holistic solutions by seamlessly integrating front and
                  backend technologies.
               </p>
            </div>
         </div>
         {/* backend */}
      </div>
   );
}

export default Services;
