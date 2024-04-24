import { TypeAnimation } from "react-type-animation";

function Texteffect() {
   return (
      <TypeAnimation
         sequence={[
            // Same substring at the start will only be typed out once, initially
            "Frontend Dev",
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            "Backend Developer",
            1500,
            "Designer",
            1500,
            " Content Writer",
            1500,
         ]}
         speed={50}
         className="text-[4rem] md:text-[2rem] text-[#53e4ac] font-bold uppercase text-[] px-0"
         repeat={Infinity}
      />
   );
}

export default Texteffect;
