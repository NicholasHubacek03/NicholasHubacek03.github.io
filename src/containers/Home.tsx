import Projects from "../components/Projects";
import Tooling from "../components/Tooling";
import "../css/Home.css";

const Home: React.FC = () => {
    return (
        <><br /><div className="home-container">
            <div className="home-header">
                <h1>Hi There! I'm Nicholas</h1>
                <h1>Software Developer</h1>
            </div>
            <p className="home-intro">
                Hi and Welcome to my portfolio! I'm a passionate full stack developer dedicated to creating clean code and solving problems. With experience in web development, I'm always eager to learn and grow as a developer. Feel free to explore my projects and get in touch with me.
            </p>
            <div className="home-actions">
                <img src="src/pictures/NicholasHubacek.png" alt="Nicholas" className="home-image" />
                <a href="https://docs.google.com/document/d/1XWwixWkrz3NSW3eM3BB0Gr3tBJ7y6CceQ22B1EQJaqo/edit?usp=sharing">
                    <button className="home-button">Resume</button>
                </a>
            </div>
            <div className="Tooling">
                <Tooling />
            </div>
            {/* Render the Projects component */}
            <Projects />
        </div></>
    );
}

export default Home;
