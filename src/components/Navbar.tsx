import React from "react";
import "../css/Navbar.css";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
    return (
        <nav id="nav">
           <ul className="container">
                <li><Link to="top" smooth={true} duration={1500} >Introduction</Link></li>
                <li><Link to="portfolio" smooth={true} duration={1500} >Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={1500} >Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;