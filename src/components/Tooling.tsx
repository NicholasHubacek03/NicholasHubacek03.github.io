import "../css/Tooling.css";
import JavaImg from '../../public/icons/java-icon.svg'
import SringSvg from '../../public/icons/spring-3.svg'
import JqureyImg from '../../public/icons/jquery-icon.svg'
import JavaScriptImg from '../../public/icons/logo-javascript.svg'
import BootStrapImg from '../../public/icons/bootstrap-5-1.svg'
import NpmImg from '../../public/icons/npm.svg'
import NestJsImg from '../../public/icons/nestjs-icon.svg'
import NodeJsImg from '../../public/icons/nodejs-icon.svg'
import ReactImg from '../../public/icons/react-2.svg'
import TypeScriptImg from '../../public/icons/typescript.svg'
import ViteImg from '../../public/icons/vitejs.svg'
import GitImg from '../../public/icons/git-icon.svg'

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