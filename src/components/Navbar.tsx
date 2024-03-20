import { NavLink } from "react-router-dom"
import "../css/Navbar.css"
const Navbar: React.FC = () => {
      return (
            <nav className="navbar">
              <div className="logo">
                <img src="src/pictures/Nicholas_Hubacek__2 black.png" alt="Logo" />
            </div>
              <NavLink to="/" className="nav-link">
                Home
                </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
                </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
                </NavLink>
            </nav>
      ); 
    }
export default Navbar