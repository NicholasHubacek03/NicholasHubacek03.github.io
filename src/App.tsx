import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./containers/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <section id="portfolio">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
      </div>
    );
  }
}

export default App;
