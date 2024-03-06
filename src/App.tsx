import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./containers/aboutme";
import Projects from "./containers/projects";
import Contact from "./containers/contact";

class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <h1>Hello!,I'm Nicholas</h1>
          <h2>Web Developer</h2>
            {/* small like discpriton about me */}
              {/* <img src="src/pictures/NicholasHubacek.png" alt="Nicholas"></img> */}
              <button>Resume</button>






        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    );
  }
  
}

export default App;
