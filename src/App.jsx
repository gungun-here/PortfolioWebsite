// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import Home from "./newcomponents/home";
// import Switch from "./newcomponents/switch";
// import About from "./newcomponents/about";
// import Contact from "./newcomponents/contactme";

// function NavbarComponent() {
//   const location = useLocation();
//   const [connect, setConnect] = useState(false);

//   function handleEvent() {
//     setConnect(!connect);
//   }

//   // This function checks if the current pathname matches the link's target
//   function getLinkClass(path) {
//     return location.pathname === path
//       ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
//       : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500";
//   }

//   return (
//     <div className="font-my flex justify-between items-center py-3 px-10 border-2">
//       <div>
//         <Link to="/">
//           <img src="whitelogo.png" className="h-[2rem] w-[10rem]" />
//         </Link>
//       </div>

//       <div className="flex gap-16">
//         <Link to="/" className={getLinkClass("/")}>
//           Home
//         </Link>
//         <Link to="/about" className={getLinkClass("/about")}>
//           About
//         </Link>
//         <Link to="/projects" className={getLinkClass("/projects")}>
//           Projects
//         </Link>
//         <Link to="/contact" className={getLinkClass("/contact")}>
//           Contact
//         </Link>
//       </div>

//       <div onMouseEnter={handleEvent}>
//         <Link to="/connect">
//           <button className="h-[2.5rem] w-[10rem] rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white">
//             Connect With Me
//           </button>
//         </Link>
//         <div
//           onMouseLeave={handleEvent}
//           className={`absolute right-10 top-16 ${connect ? "" : "hidden"} z-50`}
//         >
//           <ul type="none" className="flex flex-col gap-8 bg-white border-2 border-white">
//             <li>My GitHub</li>
//             <li>My LinkedIn</li>
//             <li>My Mail</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <NavbarComponent />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/connect" element={<connect />} />
//         </Routes>
//         <div className="fixed right-10 bottom-10">
//           <Switch />
//         </div>
//       </div>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./newcomponents/home";
import Switch from "./newcomponents/switch";
import About from "./newcomponents/about";
import Contact from "./newcomponents/contactme";
import Projects from "./newcomponents/proects";

function NavbarComponent() {
  const location = useLocation();
  const [connect, setConnect] = useState(false);

  function handleEvent() {
    setConnect(!connect);
  }

  // This function checks if the current pathname matches the link's target
  function getLinkClass(path) {
    return location.pathname === path
      ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500";
  }

  // Dropdown menu visibility based on hover
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="font-my flex justify-between items-center py-3 px-10 border-2">
      <div>
        <Link to="/">
          <img src="whitelogo.png" className="h-[2rem] w-[10rem]" />
        </Link>
      </div>

      <div className="flex gap-16">
        <Link to="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link to="/about" className={getLinkClass("/about")}>
          About
        </Link>
        <Link to="/projects" className={getLinkClass("/projects")}>
          Projects
        </Link>
        <Link to="/contact" className={getLinkClass("/contact")}>
          Contact
        </Link>
      </div>

      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <Link to="/connect">
          <button className="h-[2.5rem] w-[10rem] rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white">
            Connect With Me
          </button>
        </Link>
        {isDropdownVisible && (
          <div className="absolute top-10 z-50 cursor-pointer h-[6rem] w-[11rem]">
            <ul className="flex flex-col gap-4 bg-white border-2 border-white shadow-lg p-4">
              <a href="http://github.com/gungun-here"><li className="hover:underline flex gap-9 items-center">My GitHub <img className="h-8 w-8" src="git2.png"></img></li></a>
              <li className="hover:underline flex gap-8 items-center">My LinkedIn <img className="h-8 w-8" src="in2.png"></img></li>
              <li className="hover:underline flex gap-16 items-center">My Mail <img className="h-8 w-8" src="gmail2.png"></img></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<connect />} />
        </Routes>
        <div className="fixed right-10 bottom-10">
          <Switch />
        </div>
      </div>
    </Router>
  );
}
