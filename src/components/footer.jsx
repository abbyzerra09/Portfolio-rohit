import React, { useState, useEffect } from 'react';
import { RiArrowUpLine, RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill, RiHeartFill } from "react-icons/ri";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const triggerCursor = (scale, label = "") => {
    const event = new CustomEvent('cursorUpdate', { detail: { scale, label } });
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6 md:px-20 relative">
      
      {/* --- Spinning Scroll to Top Button --- */}
      <div
        onClick={scrollToTop}
        onMouseEnter={() => triggerCursor(1.5)}
        onMouseLeave={() => triggerCursor(1)}
        className={`fixed md:bottom-8 bottom-3 md:right-8 -right-1 z-50 cursor-pointer transition-all duration-500 flex items-center justify-center ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
        }`}
      >
        {/* Infinite Spinning Text */}
        <div className="animate-[spin_10s_linear_infinite] relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[9px] font-Bricolage uppercase tracking-[2px] fill-gray-800 font-bold">
              <textPath xlinkHref="#circlePath">
                • Click to scroll up • scroll to up
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Arrow Icon */}
        <div className="absolute bg-white rounded-full p-4 shadow-lg border border-gray-100 hover:bg-teal-500 hover:text-white transition-colors duration-300">
          <RiArrowUpLine size={24} />
        </div>
      </div>
      {/* --- End of Scroll Button --- */}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 
            className="text-2xl font-Bricolage font-bold text-gray-800 w-fit mx-auto md:mx-0"
            onMouseEnter={() => triggerCursor(3)}
            onMouseLeave={() => triggerCursor(1)}
          >
            Rohit<span className="text-teal-500">.dev</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-outfit">
            Building digital experiences with the MERN stack.
          </p>
        </div>

        {/* Center: Socials */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-2xl text-slate-400 hover:text-black transition-colors"
             onMouseEnter={() => triggerCursor(2.5)} onMouseLeave={() => triggerCursor(1)}>
            <RiGithubFill />
          </a>
          <a href="#" className="text-2xl text-slate-400 hover:text-blue-600 transition-colors"
             onMouseEnter={() => triggerCursor(2.5)} onMouseLeave={() => triggerCursor(1)}>
            <RiLinkedinBoxFill />
          </a>
          <a href="#" className="text-2xl text-slate-400 hover:text-black transition-colors"
             onMouseEnter={() => triggerCursor(2.5)} onMouseLeave={() => triggerCursor(1)}>
            <RiTwitterXFill />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-400 text-sm font-outfit text-center md:text-right">
          <p>© {currentYear} All Rights Reserved.</p>
          <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
            Made with <RiHeartFill className="text-red-500" /> Using React.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;