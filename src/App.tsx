import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./containers/projects";
import Contact from "./containers/contact";
import Home from "./containers/Home";

class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

         {}
         
      </div>
    </Router>
    );
  }
  
}

export default App;
