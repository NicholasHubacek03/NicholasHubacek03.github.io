import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App

{/* <NavLink to="/" className="nav-link">HomePage</NavLink>
<NavLink to="/aboutme" className="nav-link">About Me</NavLink>
<NavLink to="/projects" className="nav-link">projects</NavLink>
<NavLink to="/contact" className="nav-link">Contact</NavLink> */}