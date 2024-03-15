import { faJava, faJs, faBootstrap, faNpm, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Tooling.css";

const Tooling: React.FC = () => {
    return (
        <div className="Tooling">
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> Java
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> Spring Boot
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> jQurey
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
                <FontAwesomeIcon icon={faJava} size="2x" /> Nest.js
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faNode} size="2x" /> Node.js
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faReact} size="2x" /> React
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> Typescript
            </div>
            <div className="tool">
                <FontAwesomeIcon icon={faJava} size="2x" /> Vite
            </div>
        </div>
    );
}

export default Tooling;