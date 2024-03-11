import { faJava, faJs, faBootstrap, faNpm, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tooling: React.FC = () => {
    return (
        <div className="Tooling">
        <><div className="Tooling"></div><p>
            <FontAwesomeIcon icon={faJava} /> Java
        </p><p>
                <FontAwesomeIcon icon={faJava} /> Spring Boot
            </p><p>
                <FontAwesomeIcon icon={faJava} /> jQurey
            </p><p>
                <FontAwesomeIcon icon={faJs} /> JavaScript
            </p><p>
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </p><p>
                <FontAwesomeIcon icon={faNpm} /> npm
            </p><p>
                <FontAwesomeIcon icon={faJava} /> Nest.js
            </p><p>
                <FontAwesomeIcon icon={faNode} /> Node.js
            </p><p>
                <FontAwesomeIcon icon={faReact} /> React
            </p><p>
                <FontAwesomeIcon icon={faJava} /> Typescript
            </p><p>
                <FontAwesomeIcon icon={faJava} /> Vite
            </p></>
        </div>
    );
}

export default Tooling