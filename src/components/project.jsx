import BirstoBlissProject from '../assets/BistroBlissProject.webp'
import GlowProject from '../assets/GlowProject.webp'
import SkillShikshyaProject from '../assets/SkillShikshyaProject.webp'
function Projects(){
    return(
        <>
        <div className="bg-[#FCFCFC]">
            <div className="min-h-screen max-w-6xl mx-auto pt-10 md:pt-25 px-6 pb-10">
                <div className="mb-5 border-b border-gray-300">
                    <h2 className="text-3xl md:text-4xl font-Bricolage font-semibold text-gray-800 md:mb-3 mb-1">Current Projects</h2>
                </div>
                <div className="flex flex-wrap gap-6">
                    <div className="group flex-1 max-w-sm min-w-70 bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl rounded-xl pt-10 px-2 shadow-md transition-all duration-200">
                        <img src={BirstoBlissProject} className='group-hover:scale-110 transition-all duration-400'></img>
                        <h3 className='pt-5 flex justify-center text-xl md:text-2xl font-Bricolage font-semibold'>BistroBliss</h3>
                        <p className='pt-2 flex justify-center text-center font-outfit'>This is a Business Website for a Fast Food Resturant named BistroBliss.</p>
                        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap pb-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Components:</span>
                            <p className="font-outfit text-sm font-medium text-gray-700">React, Tailwindcss</p>
                        </div>
                        <div className='text-bold font-outfit pb-10 flex justify-center gap-5'>
                            <button className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300 font-medium py-3 px-6 rounded-xl font-outfit shadow-xl cursor-pointer">
                               <a href='https://bistrobliss-web.netlify.app/' target='_blank'>Check Project</a>
                            </button>

                            <button className="bg-gray-300 hover:bg-gray-500 text-gray-900 hover:text-white transition-colors duration-300 font-medium py-3 px-6 rounded-xl font-outfit shadow-xl cursor-pointer">
                                <a href='https://github.com/abbyzerra09/BistroBlisss.git' target="_blank">Github Link</a>
                            </button>
                        </div>
                    </div>

                    <div className="group flex-1 max-w-sm min-w-70 bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl rounded-xl pt-10 px-2 shadow-md transition-all duration-200">
                        <img src={GlowProject} className='group-hover:scale-110 transition-all duration-300'></img>
                        <h3 className='pt-5 flex justify-center text-xl md:text-2xl font-Bricolage font-semibold'>Glow.Care</h3>
                        <p className='pt-2 flex justify-center text-center font-outfit'>This is a Business Website for a online based medicinal herbal skincare store named Glow.</p>
                        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap pb-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Components:</span>
                            <p className="font-outfit text-sm font-medium text-gray-700">HTML, CSS</p>
                        </div>
                        <div className='text-bold font-outfit pb-10 flex justify-center gap-5'>
                            <button className="bg-stone-600/80 hover:bg-stone-700/80 text-white transition-colors duration-300 font-medium py-3 px-6 rounded-xl font-outfit shadow-xl cursor-pointer">
                                <a href='https://rohit-glow-project.netlify.app/' target='_blank'>Check Project</a>
                            </button>

                            <button className="bg-gray-300 hover:bg-gray-500 text-gray-900 hover:text-white transition-colors duration-300 font-medium py-3 px-6 rounded-xl font-outfit shadow-xl cursor-pointer">
                                <a href='https://github.com/abbyzerra09/Glow-project.git' target='_blank'>Github Link</a>
                            </button>
                        </div>
                    </div>

                    <div className="group flex-1 max-w-sm min-w-70 bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl rounded-xl pt-10 px-2 shadow-md transition-all duration-200">
                        <img src={SkillShikshyaProject} className='group-hover:scale-110 transition-all duration-300'></img>
                        <h3 className='pt-5 flex justify-center text-xl md:text-2xl font-Bricolage font-semibold'>Skill Shikshya</h3>
                        <p className='pt-2 flex justify-center text-center font-outfit'>This is a IT Training institute Website named Skill Shikshya which i have replicated.</p>
                        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap pb-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Components:</span>
                            <p className="font-outfit text-sm font-medium text-gray-700">HTML, CSS</p>
                        </div>
                        <div className='text-bold font-outfit pb-10 flex justify-center gap-5'>
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 font-medium py-3 px-6 rounded-xl font-outfit shadow-xl cursor-pointer">
                                <a href='https://rohit-skillshikshya-project.netlify.app/' target='_blank'>Check Project</a>
                            </button>

                            <button className="bg-gray-300 hover:bg-gray-500 text-gray-900 hover:text-white transition-colors duration-300 font-medium py-3 px-6 rounded-xl font-outfit shadow-xl cursor-pointer">
                                <a href='https://github.com/abbyzerra09/skillshikshya-repo.git' target='_blank'>Github Link</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;