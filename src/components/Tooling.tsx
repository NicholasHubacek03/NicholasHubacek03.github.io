import "../css/Tooling.css";
import JavaImg from '../../public/pictures/icons/java-icon.svg'
import SringSvg from '../../public/pictures/icons/spring-3.svg'
import JqureyImg from '../../public/pictures/icons/jquery-icon.svg'
import JavaScriptImg from '../../public/pictures/icons/logo-javascript.svg'
import BootStrapImg from '../../public/pictures/icons/bootstrap-5-1.svg'
import NpmImg from '../../public/pictures/icons/npm.svg'
import NestJsImg from '../../public/pictures/icons/nestjs-icon.svg'
import NodeJsImg from '../../public/pictures/icons/nodejs-icon.svg'
import ReactImg from '../../public/pictures/icons/react-2.svg'
import TypeScriptImg from '../../public/pictures/icons/typescript.svg'
import ViteImg from '../../public/pictures/icons/vitejs.svg'
import GitImg from '../../public/pictures/icons/git-icon.svg'

const Tooling: React.FC = () => {
    return (
        <><h2>Tools</h2><div className="Tooling">
            <div className="tool">
            <img src={JavaImg} alt="Java" /> Java
            </div>
            <div className="tool">
            <img src={SringSvg} alt="Spring Boot" /> Spring Boot
            </div>
            <div className="tool">
                <img src={JqureyImg} alt="jQuery" /> jQurey
            </div>
            <div className="tool">
            <img src={JavaScriptImg} alt="JavaScript" /> JavaScript
            </div>
            <div className="tool">
            <img src={BootStrapImg} alt="Bootstrap" /> Bootstrap
            </div>
            <div className="tool">
            <img src={NpmImg} alt="npm" /> npm
            </div>
            <div className="tool">
            <img src={NestJsImg} alt="Nest.js" /> Nest.js
            </div>
            <div className="tool">
            <img src={NodeJsImg} alt="Node.js" /> Node.js
            </div>
            <div className="tool">
            <img src={ReactImg} alt="React" /> React
            </div>
            <div className="tool">
            <img src={TypeScriptImg} alt="Typescript" /> Typescript
            </div>
            <div className="tool">
            <img src={ViteImg} alt="Vite" /> Vite
            </div>
            <div className="tool">
            <img src={GitImg} alt="Git" /> Git
            </div>
        </div></>
    );
}

export default Tooling;