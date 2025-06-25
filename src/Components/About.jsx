import React from 'react'

function About() {
  return (
    <>
    <section className='About w-full h-screen bg-black text-gray-400 font-bold tracking-wide flex flex-col items-center justify-center gap-8'>
        <h3 className='text-md sm:text-2xl md:text-2xl uppercase tracking-[10px] text-gray-600'>ABOUT ME</h3>
        <h1 className='w-80 sm:w-250 md:w-250 uppercase text-start text-md sm:text-4xl md-text-4xl tracking-widest word-spacing'>I’m a passionate <span className='text-orange-500'>Front-End Developer </span>with a deep interest in building visually stunning, user-friendly, and responsive interfaces. I specialize in transforming creative designs into clean, functional, and scalable web experiences.</h1>
    </section>
    </>
  )
}

export default About