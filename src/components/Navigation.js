import { NavLink } from "react-router-dom";

export default function Navigation({ isNavOpen, toggleNav }) {
    return (
        <nav className={`row ${isNavOpen ? 'nav-open' : 'nav-closed'}`}>
            <NavLink to="/" onClick={toggleNav}>
                About Me
            </NavLink>
            <NavLink to="/contact" onClick={toggleNav}>
                Contact Me
            </NavLink>
            <NavLink to="/portfolio" onClick={toggleNav}>
                Portfolio
            </NavLink>
            <NavLink to="/resume" onClick={toggleNav}>
                Resume
            </NavLink>
        </nav>
    );
}