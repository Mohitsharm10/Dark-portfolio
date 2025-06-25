import React from 'react'
import './index.css'
import { FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import Nav from './Components/nav'
import Home from './Components/Home'
import Layer from './Components/Layer';
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Connect from './Components/Connect'


function App() {
  return (
    <>
     <Nav/>
     <Home/>
     <Layer/>
     <About/>
     <Skills/> 
     <Project/>  
     <Connect/>
    </>
  )
}

export default App