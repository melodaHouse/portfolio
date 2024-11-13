import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Home from "./pages/Home.js";
import Career from "./pages/Career.js";
import Blog from "./pages/Blog.js";
import About from "./pages/About.js";
import Trial from "./pages/Trial.js";
import Courses from "./pages/Courses.js";
import Termsandcondition from "./pages/Termsandcondition.js";
import Privecyandpolicy from "./pages/Privecyandpolicy.js";
import Developers from "./pages/Developers.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Support" element={<Navigate to="/#support" replace />} />
        <Route path="/Trial" element={<Trial />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Termsandcondition" element={<Termsandcondition />}></Route>
        <Route path="/Privecyandpolicy" element={<Privecyandpolicy />}></Route>
        <Route path="/Developers" element={<Developers />}></Route>


        
      </Routes>
    </BrowserRouter>
    // <Trial />

  );
}
export default App;