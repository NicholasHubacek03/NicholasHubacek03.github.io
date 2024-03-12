import { faJava, faJs, faBootstrap, faNpm, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Tooling.css";

const Tooling: React.FC = () => {
    return (
        <div className="Tooling">
            <div className="tool">
                <FontAwesomeIcon icon={faJava} /> Java
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} /> Spring Boot
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} /> jQurey
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJs} /> JavaScript
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faNpm} /> npm
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} /> Nest.js
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faNode} /> Node.js
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faReact} /> React
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} /> Typescript
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} /> Vite
            </div>
        </div>
    );
}

export default Tooling;