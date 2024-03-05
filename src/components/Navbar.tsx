import { NavLink } from "react-router-dom"
import "../css/Navbar.css"
const Navbar: React.FC = () => {
      return (
            <nav className="navbar">
              <NavLink to="/" className="nav-link">
                HomePage
                </NavLink>
              <NavLink to="/aboutme" className="nav-link">
                About Me
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