import { faJava, faJs, faBootstrap, faNpm, faNode, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Tooling.css";

const Tooling: React.FC = () => {
    return (
        <><h2>Tooling</h2><div className="Tooling">
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> Java
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> Spring Boot
            </div>
            <div className="tool">
                <img src="src/pictures/icons8-jquery-50.png" alt="jQuery" /> jQurey
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJs} size="2x" /> JavaScript
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faBootstrap} size="2x" /> Bootstrap
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faNpm} size="2x" /> npm
            </div>
            <div className="tool">
                <img src="src/pictures/NestJS.svg.png" alt="" /> Nest.js
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faNode} size="2x" /> Node.js
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faReact} size="2x" /> React
            </div>
            <div className="tool">
                <img src="src/pictures/Typescript_logo_2020.svg.png" /> Typescript
            </div>
            <div className="tool">
                <img src="" /> Vite
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faGithub} size="2x" /> Git
            </div>
        </div></>
    );
}

export default Tooling;