import React from 'react'
import './index.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Connect from './Components/Connect'


function App() {
  return (
    <>
     <Nav/>
     <Home/>
     <About/>
     <Skills/> 
     <Project/>  
     <Connect/>
    </>
  )
}

export default App