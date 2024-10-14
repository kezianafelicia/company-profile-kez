import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Service from "./page/service";
import About from "./page/about";
import Teamsprofile from "./page/teamsprofile";


function App() {


  return (
    <>
      <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teamsprofile" element={<Teamsprofile/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
