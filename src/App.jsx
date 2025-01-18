//PORTFOLIO WEBSITE START

import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom"

import { useState } from "react";

import Home from "./newcomponents/home"

import Switch from "./newcomponents/switch";

import About from "./newcomponents/about";

import Contact from "./newcomponents/contactme";

function NavbarComponent() {
  const location = useLocation()

  const [connect, setConnect] = useState(false)

  function handleEvent() {
    setConnect(!connect)
  }

  return (
    <div className="font-my flex justify-between items-center py-3 px-10 border-2">
      <div><Link to="/"><img src="whitelogo.png" className="h-[2rem] w-[10rem]"></img></Link></div>

      <div className="flex gap-16">
        <Link to="/" className={`${location.pathname === "/" ? "  from-pink-500 to-orange-500 " : ""}hover:from-pink-500 hover:to-orange-500 bg-gradient-to-r bg-clip-text text-transparent `}>Home</Link>
        <Link to="/about" className={`${location.pathname === "/about" ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 " : ""}hover:from-pink-500 hover:to-orange-500`}>About</Link>
        <Link to="/projects" className={`${location.pathname === "/projects" ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 " : ""}hover:from-pink-500 hover:to-orange-500`}>Projects</Link>
        <Link to="/contact" className={`${location.pathname === "/contact" ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 " : ""}hover:from-pink-500 hover:to-orange-500`}>Contact</Link>
        
      </div>

      <div onMouseEnter={handleEvent}>
        <Link to="/connect"><button className="h-[2.5rem] w-[10rem] rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white">Connect With Me</button></Link>
        <div onMouseLeave={handleEvent} className={`absolute right-10 top-16 ${connect ? "" : "hidden"} z-50`} >
          <ul type="none" className="flex flex-col gap-8 bg-white border-2 border-white">
            <li>My GitHub</li>
            <li>My LinkedIn</li>
            <li>My Mail</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function App() {




  return (
    <Router>
      <div>

        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/connect" element={<connect />}></Route>
        </Routes>
        <div className="fixed right-10 bottom-10"><Switch /></div>

      </div>
    </Router>
  )

}