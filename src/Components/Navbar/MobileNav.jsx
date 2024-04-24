import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/16/solid";

function MobileNav({ nav, closeNav }) {
   const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";
   return (
      <div
         className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-black`}>
         <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <div className="nav-link-mobile">HOME</div>
            <div className="nav-link-mobile">ABOUT</div>
            <div className="nav-link-mobile">SERVICES</div>
            <div className="nav-link-mobile">CONTACT</div>
         </div>
         <div
            onClick={closeNav}
            className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] text-pink-400">
            <XMarkIcon />
         </div>
      </div>
   );
}

MobileNav.propTypes = {
   nav: PropTypes.bool.isRequired,
   closeNav: PropTypes.func.isRequired,
};

export default MobileNav;
