import BirstoBlissProject from '../assets/BistroBlissProject.webp';
import GlowProject from '../assets/GlowProject.webp';
import SkillShikshyaProject from '../assets/SkillShikshyaProject.webp';
import rohitPortfolio from '../assets/rohitPortfolio.webp'

const PROJECTS_DATA = [
  {
    title: "Rohit Portfolio",
    img: rohitPortfolio,
    desc: "This is my own Portfolio website which i have created using React Js and Tailwind CSS",
    tech: "React, Tailwindcss",
    live: "https://thapa-rohit-portfolio.netlify.app/",
    github: "https://github.com/abbyzerra09/Portfolio-rohit.git"
  },
  {
    title: "BistroBliss",
    img: BirstoBlissProject,
    desc: "This is a Business Website for a Fast Food Restaurant named BistroBliss.",
    tech: "React, Tailwindcss",
    live: "https://bistrobliss-web.netlify.app/",
    github: "https://github.com/abbyzerra09/BistroBlisss.git"
  },
  {
    title: "Glow.Care",
    img: GlowProject,
    desc: "This is a Business Website for an online based medicinal herbal skincare store named Glow.",
    tech: "HTML, CSS",
    live: "https://rohit-glow-project.netlify.app/",
    github: "https://github.com/abbyzerra09/Glow-project.git"
  },
  {
    title: "Skill Shikshya",
    img: SkillShikshyaProject,
    desc: "This is an IT Training institute Website named Skill Shikshya which I have replicated.",
    tech: "HTML, CSS",
    live: "https://rohit-skillshikshya-project.netlify.app/",
    github: "https://github.com/abbyzerra09/skillshikshya-repo.git"
  }
];

function Projects() {
  const updateCursor = (scale, label = "") => {
    window.dispatchEvent(new CustomEvent('cursorUpdate', { detail: { scale, label } }));
  };

  return (
    <div className="bg-[#FCFCFC]">
      <div className="min-h-screen max-w-6xl mx-auto pt-10 md:pt-25 px-6">
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-Bricolage font-semibold text-gray-800 inline-block"
              onMouseEnter={() => updateCursor(2)} onMouseLeave={() => updateCursor(1)}>
            <span className='border-b border-gray-400'>Current <span className='text-teal-500'>Projects</span></span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="group flex-1 max-w-sm min-w-70 bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-xl rounded-xl pt-10 px-4 shadow-md transition-all duration-300">
              
              <img 
                src={project.img} 
                alt={project.title}
                className='group-hover:scale-115 transition-transform duration-500 rounded-lg'
                onMouseEnter={() => updateCursor(3, "VIEW")} 
                onMouseLeave={() => updateCursor(1)}
              />

              <h3 className='pt-5 text-center text-xl md:text-2xl font-Bricolage font-semibold'>{project.title}</h3>
              <p className='pt-2 text-center font-outfit text-gray-600 text-sm'>{project.desc}</p>
              
              <div className="mt-5 flex items-center justify-center gap-2 pb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Tech:</span>
                <p className="font-outfit text-sm font-medium text-gray-700">{project.tech}</p>
              </div>

              <div className='pb-10 flex justify-center gap-4'>
                <a href={project.live} target='_blank' rel="noreferrer" 
                   className="bg-black hover:bg-teal-600 text-white transition-all py-3 px-5 rounded-xl text-sm font-medium shadow-lg">
                  Check Project
                </a>
                <a href={project.github} target='_blank' rel="noreferrer"
                   className="bg-gray-200 hover:border-black border transition-all duration-300 border-transparent text-gray-700 py-3 px-5 rounded-xl text-sm font-medium shadow-md">
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;