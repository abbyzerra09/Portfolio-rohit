import rohit from '../assets/rohit.jpg'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

function About(){
  const updateCursor = (scale, label = "") => {
        const event = new CustomEvent('cursorUpdate', { detail: { scale, label } });
        window.dispatchEvent(event);
    };
    return (
      <>
        <div className="bg-[#FCFCFC] ">
          <div className="max-w-6xl mx-auto px-6 py-12 pt-25">
            <div className="mb-8 ">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 md:mb-3 font-Bricolage inline-block"
                onMouseEnter={() => updateCursor(3)}
                onMouseLeave={() => updateCursor(1)}>
                <span className='border-b border-gray-300'>About Me</span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6 order-2 md:order-1">
                <p className="text-md md:text-lg text-gray-600 font-outfit"
                onMouseEnter={() => updateCursor(2)}
                onMouseLeave={() => updateCursor(1)}>
                  I am a passionate and detail-oriented Web Developer with my
                  Newly Learning Experience and visually appealing digital
                  experiences.
                </p>
                <p className="text-md md:text-lg text-gray-600 font-outfit"
                onMouseEnter={() => updateCursor(2)}
                onMouseLeave={() => updateCursor(1)}>
                  "As an aspiring Web Developer, I focus on building seamless,a
                   high-performance web applications. With a solid foundation 
                   in React and Tailwind CSS, I enjoy turning complex problems 
                   into clean, functional code."
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <button className="bg-gray-200 font-medium py-3 px-6 rounded-xl font-outfit cursor-pointer"
                  onMouseEnter={() => updateCursor(3, "About Me")}
                onMouseLeave={() => updateCursor(1, "")}>
                    About Me
                  </button>

                  <div className="flex items-center gap-5 text-2xl text-gray-800">
                    <a href="https://github.com/abbyzerra09" target="_blank" className="text-gray-700 hover:text-gray-900 transition-colors"> <FaGithub /> </a>
                    <a href="https://www.linkedin.com/in/rohit-thapa-287811399/" target="_blank" className="hover:text-blue-700 transition-colors"> <FaLinkedin /> </a>
                    <a href="https://www.facebook.com/rohit.thapa.44365" target="_blank" className="hover:text-blue-500 transition-colors"> <FaFacebook /> </a>
                    <a href="https://www.instagram.com/yccm_rohit/?hl=en" target="_blank" className="hover:text-pink-600 transition-colors"> <FaInstagram /> </a>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img src={rohit} className="w-full h-full object-cover lg:object-bottom"
                  onMouseEnter={() => updateCursor(4)}
                  onMouseLeave={() => updateCursor(1)}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default About;