import html from '../../assets/skills/html.png'
import css from "../../assets/skills/css.png";
import tailwind from "../../assets/skills/tailwind.png";
import next from "../../assets/skills/nextjs.png";
// import github from "../../assets/skills/github.png";
import mongodb from "../../assets/skills/mongodb.png";
import node from "../../assets/skills/node.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";




function Skills() {
  return (
     <div
        className=" bg-#161513 text-gray-400 md:h-[160px] max-w-[1200px] mx-auto grid grid-cols-3 
    place-items-center md:flex md:justify-between md:items-center mt-14">
        <h2 className="text-gray-600 text-xl md:text-4xl font-bold m-4">
         Tech Stack
        </h2>

        <div className="flex flex-col items-center m- 8sm:my-10 w-[60px] md:w-[100px] hover:scale-110">
           <img src={html} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={css} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={js} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={react} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={tailwind} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={next} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={node} alt="html" />
        </div>
        <div className="flex flex-col items-center m-8 sm:my-0 w-[60px] md:w-[100px] hover:scale-110">
           <img src={mongodb} alt="html" />
        </div>
     </div>
  );






  
}

export default Skills;
