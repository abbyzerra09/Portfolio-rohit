import React from 'react';
import { RiMailLine, RiWhatsappLine, RiLinkedinBoxLine, RiGithubLine, RiFacebookCircleFill} from "react-icons/ri";

const Contact = () => {
  // Helper to trigger the cursor ball
  const updateCursor = (scale, label = "") => {
    const event = new CustomEvent('cursorUpdate', { detail: { scale, label } });
    window.dispatchEvent(event);
  };

  const contactMethods = [
    {
      icon: <RiMailLine />,
      title: "Email Me",
      value: "abbyzerra@gmail.com",
      link: "mailto:abbyzerra@gmail.com",
      color: "text-red-500"
    },
    {
      icon: <RiWhatsappLine />,
      title: "WhatsApp",
      value: "+977 9824143022",
      link: "https://wa.me/9779824143022",
      color: "text-green-500"
    },
    {
      icon: <RiLinkedinBoxLine />,
      title: "LinkedIn",
      value: "linkedin.com/in/Rohit Thapa",
      link: "https://www.linkedin.com/in/rohit-thapa-287811399/",
      color: "text-blue-500"
    },
    {
      icon: <RiFacebookCircleFill />,
      title: "Facebook",
      value: "facebook.com/Rohit Thapa",
      link: "https://www.facebook.com/rohit.thapa.44365",
      color: "text-blue-500"
}
  ];

  return (
    <section className="bg-[#FCFCFC] py-20 px-6 md:px-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        
        <div className="md:w-1/3">
          <h2 className="text-xl font-outfit text-gray-500 uppercase tracking-widest mb-4 border-b w-fit">
            Connect
          </h2>
          <div 
            className="w-fit"
            onMouseEnter={() => updateCursor(2.5)}
            onMouseLeave={() => updateCursor(1)}
          >
            <h3 className="text-5xl md:text-6xl font-Bricolage font-bold leading-tight">
              Get In <span className="text-teal-500">Touch</span> <br /> With Me
            </h3>
          </div>
          <p className="mt-6 text-gray-500 font-outfit max-w-sm">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              href={method.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              onMouseEnter={() => updateCursor(3, "SAY HI")}
              onMouseLeave={() => updateCursor(1, "")}
            >
              <div className={`text-4xl mb-4 ${method.color}`}>
                {method.icon}
              </div>
              <h4 className="text-lg font-Bricolage font-bold text-gray-800">
                {method.title}
              </h4>
              <p className="text-gray-500 text-sm mt-1 break-all">
                {method.value}
              </p>
            </a>
          ))}

         {/* Below Github Card */}
          <a href="https://github.com/abbyzerra09/" target="_blank"
            className="group p-8 rounded-2xl bg-black text-white sm:col-span-2 flex items-center justify-between transition-all duration-300 hover:bg-teal-600"
            onMouseEnter={() => updateCursor(3, "CODE")}
            onMouseLeave={() => updateCursor(1, "")}>
            <div>
              <h4 className="text-2xl font-Bricolage font-bold">Check my Repositories</h4>
              <p className="opacity-70">See my latest MERN projects on Github</p>
            </div>
            <RiGithubLine className="text-5xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;