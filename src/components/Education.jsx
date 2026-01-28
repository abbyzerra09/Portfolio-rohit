import React from 'react';

function Education() {

    const updateCursor = (scale, label = "") => {
        const event = new CustomEvent('cursorUpdate', { detail: { scale, label } });
        window.dispatchEvent(event);
    };

  const educationData = [
    {
      date: "2025/11/01 - Till Now",
      title: "MERN Stack Course",
      location: "SkillShikshya",
      description: "Deep diving into MongoDB, Express, React, and Node.js to build full-stack applications."
    },
    {
      date: "2023 - 2025",
      title: "Diploma in Information Technology (IT)",
      location: "Shree Bhadrakali Secondary School",
      description: "Focused on core IT principles, networking, and software foundations."
    },
    {
      date: "2024 - 2025",
      title: "+2 Management",
      location: "Shree Bhadrakali Secondary School",
      description: "Completed higher secondary education with a focus on business and management."
    },
    {
      date: "2022",
      title: "10th Passout (SEE)",
      location: "Shree Bhadrakali Secondary School",
      description: "Completed secondary education with a strong academic foundation."
    }
  ];

  return (
    <section className="bg-[#FCFCFC] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Your existing Heading Layout */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-outfit text-gray-500 uppercase tracking-widest mb-4 border-b w-fit">
            Education
          </h2>
          <div 
            className="w-fit">
            <h3 className="text-5xl md:text-6xl font-Bricolage font-bold leading-tight"
                onMouseEnter={() => updateCursor(3)}
                onMouseLeave={() => updateCursor(1)}>
              My <span className="text-teal-500">Education</span> <br /> Background
            </h3>
          </div>
        </div>

        {/* Right Side: The Education Journey (Timeline) */}
        <div className="md:w-2/3 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* The Dot on the timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>

              {/* The Content Card */}
              <div 
                className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm">
                <time className="font-outfit text-teal-600 font-bold text-sm uppercase">
                  {item.date}
                </time>
                <h4 className="text-xl font-Bricolage font-bold text-gray-800 mt-1"
                    onMouseEnter={() => updateCursor(3)}
                    onMouseLeave={() => updateCursor(1)}>
                  {item.title}
                </h4>
                <p className="text-gray-500 font-medium text-sm">
                  {item.location}
                </p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Education;