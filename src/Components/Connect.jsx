import React from 'react';

function Connect() {
  return (
    <section className=" w-full h-[40vh] bg-black text-white px-10 sm:px-30 md:px-30 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between ">
        
        
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-md sm:text-2xl md:text-2xl text-gray-400 tracking-widest uppercase">Connect</h2>
            <a href="https://www.linkedin.com/in/mohit-sharma-5568aa306/" target='#blank' className="hover:text-orange-500 transition duration-500 font-bold tracking-widest text-sm sm:text-4xl md:text-4xl">Linkedin</a>
            <a href="https://x.com/i/flow/single_sign_on" target='#blank' className="hover:text-orange-500 transition duration-500 font-bold tracking-widest text-sm sm:text-4xl md:text-4xl">Twitter</a>
            <a href="https://github.com/Mohitsharm10" target='#blank' className="hover:text-orange-500 transition duration-500 font-bold tracking-widest text-sm sm:text-4xl md:text-4xl">Github</a>
          </div>

          <div className="flex flex-col gap-5 mt-7 md:mt-[2.4rem]">
            <a href="https://www.instagram.com/impostermohit/" target='#blank' className="hover:text-orange-500 transition duration-500 font-bold tracking-widest text-sm sm:text-4xl md:text-4xl">Facebook</a>
            <a href="https://www.instagram.com/impostermohit/" target='#blank' className="hover:text-orange-500 transition duration-500 font-bold tracking-widest text-sm sm:text-4xl md:text-4xl">Instagram</a>
          </div>
        </div>

        
        <div className="flex flex-col gap-4 text-sm sm:text-2xl md:text-2xl">
          <div>
            <h3 className="uppercase text-gray-400 font-semibold">Email</h3>
            <p className="text-white">Gopal.kum1994@gmail.com</p>
          </div>
          <div>
            <h3 className="uppercase text-gray-400 font-semibold">Phone</h3>
            <p className="text-white">8252596800</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
