// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"  
import Contact from "./Contact" 
import Services from "./Services" 
import About from "./About" 
import Navbar from "./Navbar";
import './App.css'




function App() {
  // const [count, setCount] = useState(0)

  

  return (

      
    <>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
