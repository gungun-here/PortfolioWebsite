import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
import Switch from "./components/switch";
import About from "./components/about";
import Contact from "./components/contactme";
import Projects from "./components/proects";
import NavbarComponent from "./components/navbar";

export default function App() {
  return (
    <Router>
      <div>
        <div className="sticky top-0 left-0 bg-white z-40"><NavbarComponent /></div>
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
