import Tooling from "../components/Tooling";
import React from "react";
import "../css/Home.css";

const Home: React.FC = () => {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" />
            <div className="home-container">
                <div className="headboi">
                    <div className="home-actions">
                        <img src="me.png" alt="Nicholas" className="home-image" />
                    </div>
                    <div className="home-header">
                        <h1 className="home-header h1">Hi There! I'm Nicholas Hubacek</h1>
                        <h1 className="home-header h2">Software Developer</h1>
                        <h3 className="home-intro">
                        Hi and Welcome to my portfolio! I’m a passionate full stack developer dedicated to creating clean code and solving problems. Whether it’s frontend or backend,
                        I'm always up to the task! I’m always eager to learn and grow as a developer.
                        Feel free to explore my projects and this site that I poured my dedication into. And also feel free to get in touch with me.
                    </h3>
                    <a href="https://docs.google.com/document/d/1QDqzCj9Fj3S-pc3St7MAuS4kEoKPFsoabZmOMv1rwM0/edit?usp=sharing">
                        <button className="home-button">Resume</button>
                            </a>
                    </div>
                    
                </div>
                <div>
                    <Tooling />
                </div>
            </div>

        </>
    );
}

export default Home;
