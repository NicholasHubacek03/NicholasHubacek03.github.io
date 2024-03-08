import { faJava, faJs, faBootstrap, faNpm, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tooling: React.FC = () => {
    return (
        <div className="Tooling">
            <p>
                Java <FontAwesomeIcon icon={faJava} />
            </p>
            <p>
                Spring Boot <FontAwesomeIcon icon={faJava} />
            </p>
            <p>
                jQurey <FontAwesomeIcon icon={faJava} />
            </p>

            <p>
                JavaScript <FontAwesomeIcon icon={faJs} />
            </p>
            <p>
                Bootstrap <FontAwesomeIcon icon={faBootstrap} />
            </p>
            <p>
                npm <FontAwesomeIcon icon={faNpm} />

            </p>
            <p>
                Nest.js <FontAwesomeIcon icon={faJava} />
            </p>
            <p>
                Node.js <FontAwesomeIcon icon={faNode} />

            </p>
            <p>
                React <FontAwesomeIcon icon={faReact} />
            </p>
            <p>
                Typescript <FontAwesomeIcon icon={faJava} />
            </p>
            <p>
                Vite <FontAwesomeIcon icon={faJava} />
            </p>
        </div>
    );
}

export default Tooling