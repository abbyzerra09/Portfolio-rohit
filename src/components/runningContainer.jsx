import '../App.css'
import { RiReactjsLine, RiTailwindCssFill, RiHtml5Fill, RiCss3Fill, RiGithubFill } from "react-icons/ri";
import { SiTypescript, SiFigma, SiGit, SiNextdotjs } from "react-icons/si";

const Marquee = () => {
  const technologies = [{ icon: <RiReactjsLine/>, color: "#61DAFB" },{ icon: <SiNextdotjs/>, color: "#000000"},{ icon: <RiTailwindCssFill/>, color: "#38B2AC" },{ icon: <SiTypescript/>, color: "#3178C6" },{ icon: <RiHtml5Fill/>, color: "#E34F26" },{ icon: <RiCss3Fill/>, color: "#1572B6" },{ icon: <SiFigma/>, color: "#F24E1E" },{ icon: <SiGit/>, color: "#F05032" },{ icon: <RiGithubFill/>, color: "#181717" },
  ];

  const MarqueeItem = () => (
    <>
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center mx-5 md:mx-12 shrink-0">
          <span 
            className="text-4xl md:text-6xl"
            style={{ color: tech.color }}>
            {tech.icon}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="relative block w-full py-12 md:py-20 bg-[#FCFCFC] overflow-hidden ">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h3 className="text-center text-sm md:text-lg font-semibold text-slate-400 mb-8 md:mb-12 uppercase tracking-widest">
          My Tech Stack
        </h3>

        <div className="relative flex items-center h-16 md:h-24 overflow-x-hidden" style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}>

          <div className="animate-marquee whitespace-nowrap flex items-center">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;