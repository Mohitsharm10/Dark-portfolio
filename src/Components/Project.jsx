import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'Weather App',
    img: 'Screenshot 2025-06-25 121705.png',
    live: 'https://mohitsharm10.github.io/weather-app/',
    code:' https://github.com/Mohitsharm10/weather-app.git',
  },
  {
    name: 'Portfolio Website',
    img: 'react.png',
    live: 'https://mohitsharm10.github.io/Newportfolio.react/',
    code: 'https://github.com/Mohitsharm10/Newportfolio.react.git',
  },
  {
    name: '3D Animation',
    img: 'Project3.png',
  },
  {
    name: 'Light Project',
    img: 'project4.png',
    live: 'https://mohitsharm10.github.io/MohitSharmaportfolio/',
    code: 'https://mohitsharm10.github.io/MohitSharmaportfolio/',
  },
];

export default function FlipProjects() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-600 text-3xl font-bold ml-20 mb-20 mt-10 tracking-[5px] uppercase">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="w-full h-80 perspective"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-[#063970] rounded-xl overflow-hidden shadow-md backface-hidden">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-48 object-contain mt-10"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-gray-300 text-xl font-semibold tracking-wide uppercase">{proj.name}</h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-[#063970] rounded-xl backface-hidden rotate-y-180 flex items-center justify-center gap-10 text-4xl">
                  <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white hover:scale-3d transition  transform"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                     <a
                        href={proj.code}
                        target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-white  transition"
                       title="View Code"
                     >
                        <FaGithub />
                      </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
