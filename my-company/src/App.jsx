// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Home from "./Home"  
import Contact from "./Contact" 
import Services from "./Services" 
import About from "./About" 
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },

    {
    path: "/Contact",
    Component: Contact
  },

  {
    path: "/About",
    Component: About
  },
  {
    path: "/Services",
    Component: Services
  }
])

function App() {
  // const [count, setCount] = useState(0)

  

  return (

      
    <>
      <RouterProvider router= {router}/>
    </>
  )
}

export default App
