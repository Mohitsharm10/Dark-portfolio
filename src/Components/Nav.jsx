import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import '../index.css';

function Nav() {
  return (
    <>
     <nav>
            <ul className="fixed z-30 text-white right-0 sm:right-0  px-10 py-10 text-end   font-bold ">
              <li>
                <a href="#home" className="hover:text-gray-400 transition duration-500">HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-500 transition duration-500">ABOUT</a>
              </li>
              <li>
                <a href="#contact"className="hover:text-gray-500 transition duration-500">WORK</a>
              </li>
              
            </ul>
            <a href="Logo" className='fixed text-white mt-10 ml-10 px-5 py-5 font-bold w-8 h-8 hover:text-orange-500 transition duration-800 rounded-[100%] text-2xl z-20'>MS</a>
    
            <ul className='fixed bottom-10 z-30 px-10   text-white font-bold'>
              <li className='mb-5 '>
                <a href="https://www.instagram.com/impostermohit/" target='_blank' rel='noopener noreferrer' >
                <FaInstagram className="text-white w-8 h-8 hover:text-orange-500 transition duration-500" />
                </a>
              </li>
              <li className='mb-5'>
                <a href="https://www.linkedin.com/in/mohit-sharma-5568aa306/" target='_blank' rel='noopener noreferrer' >
                <FaLinkedin className="text-white  rounded-xl w-8 h-8 hover:text-orange-500 transition duration-500" />
                </a>
              </li>
              <li className='mb-5'>
                <a href="https://github.com/Mohitsharm10" target='_blank' rel='noopener noreferrer' >
                    <FaGithub className="text-white rounded-xl w-8 h-8 hover:text-orange-500 transition duration-500" />
                </a>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default Nav