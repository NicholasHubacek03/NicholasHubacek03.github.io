import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Tooling from "../components/Tooling";
import "../css/Home.css";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" />
            <div className="home-container">
                <div className="home-header">
                    <h1 className="home-header h1">Hi There! I'm Nicholas Hubacek</h1>
                    <h1 className="home-header h2">Software Developer</h1>
                </div>
                <h3 className="home-intro">
                Hi and Welcome to my portfolio! I’m a passionate full stack developer dedicated to creating clean code and solving problems. Whether it’s frontend or backend,
                 I'm always up to the task! I’m always eager to learn and grow as a developer.
                    Feel free to explore my projects and this site that I poured my dedication into. And also feel free to get in touch with me.
                </h3>
                <div className="home-actions">
                    <img src="src/pictures/NicholasHubacek remaster.png" alt="Nicholas" className="home-image" />
                    <a href="https://docs.google.com/document/d/1XWwixWkrz3NSW3eM3BB0Gr3tBJ7y6CceQ22B1EQJaqo/edit?usp=sharing">
                        <button className="home-button">Resume</button>
                    </a>
                </div>
                <div>
                    <Tooling />
                </div>
                <section id="portfolio">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
            
        </>
    ); }

export default Home;
