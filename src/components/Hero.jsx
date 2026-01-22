import { useState, useEffect } from 'react';

function HeroSection(){
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

    return(
        <>
            <div className="bg-[#FCFCFC] pt-30 md:pt-50 flex flex-col justify-center items-center">
                <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300" style={{
                background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.15), transparent 80%)`}}/>
                <h1 className='font-Bricolage text-3xl md:text-7xl text-center font-semibold'>
                    Hey There,<br></br>
                    I am<span className='text-teal-500 text-shadow-2xs'> Rohit Thapa</span>,<br></br>
                    Dedicated MERN stack developer.
                </h1>
                <p className='font-Manrope text-[17px] md:text-[20px] text-center mt-5 max-[720px]:w-90'>
                   Highly dedicated <span className="text-teal-500 text-shadow-2xs">MERN Stack Developer </span>
                   specializing in building 💡 scalable and user-centric web applications.✨
                </p>
            </div>
            <div className='flex items-center justify-center gap-5 md:pt-5 pt-2 bg-[#FCFCFC]'>
                <button className='bg-black hover:bg-teal-500 transition-all duration-300 text-white px-6 py-2 font-outfit md:text-xl rounded-xl cursor-pointer'>
                    Get in Touch
                </button>
                <button className='bg-gray-600/80 hover:bg-black transition-all duration-300 text-white px-6 py-2 font-outfit md:text-xl rounded-xl'>
                    Check CV
                </button>
            </div>
        </>
    );
}

export default HeroSection;