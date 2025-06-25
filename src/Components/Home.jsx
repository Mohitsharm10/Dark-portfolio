import React, { useEffect } from 'react';
import '../index.css';
import { gsap } from 'gsap';


function Home() {

  useEffect(() => {
    gsap.from('.ani', {
    });
    gsap.to(".ani",{
    })

  }, []);

  return (
    <>
      <section className="  relative w-full h-screen z-10">
        <img
          className="w-full h-full object-cover"
          src="/bg.jpg"
          alt="bg"
        />
        <div className="Landing absolute top-0 left-0 w-full h-full bg-black opacity-40 z-50"></div>

        <div className=" ani absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-30 opacity-100">
          <h1 className=" font-semibold tracking-widest text-sm sm:text-xl md-text-xl">MOHIT SHARMA</h1>
          <h1 className=" text-xl sm:text-6xl md-text-6xl font-bold">I AM</h1>
          <h1 className=" text-3xl sm:text-8xl md-text-8xl font-bold text-orange-500">FRONTEND</h1>
          <h1 className=" text-4xl sm:text-9xl md-text-9xl font-bold">DEVELOPER</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
