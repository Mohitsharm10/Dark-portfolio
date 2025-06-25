import React, { useRef, useState, useEffect } from 'react';

function Skills() {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Direct DOM ref
  const imgRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const skills = [
    { name: "HTML", img: "1.png" },
    { name: "CSS", img: "2.png" },
    { name: "JavaScript", img: "3.png" },
    { name: "React", img: "4.png" },
    { name: "Tailwind CSS", img: "6.png" },
    { name: "Saas", img: "7.png" },
    { name: "Typescript", img: "9.png" },
    { name: "Figma", img: "10.png" },
  ];

  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  useEffect(() => {
    const follow = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(follow);
    };

    follow();
  }, []);

  return (
    <section
      className="w-full h-screen bg-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-2xl font-bold tracking-[7px] uppercase text-gray-600 absolute top-0 left-40">
        Skills
      </h2>

      <div className="relative">
        <ul className="w-full flex flex-col gap-5 absolute top-[120px]">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="w-full h-[0.5px] bg-gray-400"></div>
              <p
                className="font-bold tracking-[5px] text-3xl sm:text-8xl md:text-8x text-gray-300 hover:text-orange-500 transition duration-500 ml-10 sm:ml-40 md:ml-40 cursor-pointer"
                onMouseEnter={() => setHoveredImage(skill.img)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Image */}
      {hoveredImage && (
        <img
          ref={imgRef}
          src={hoveredImage}
          alt="hover"
          className="fixed pointer-events-none transition-opacity duration-500 ease-in-out"
          style={{
            top: 0,
            left: 0,
            transform: "translate(-50%, -50%)",
            width: "150px",
            opacity: hoveredImage ? 1 : 0,
            zIndex: 50,
          }}
        />
      )}
    </section>
  );
}

export default Skills;
