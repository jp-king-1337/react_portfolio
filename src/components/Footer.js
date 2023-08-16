import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="row justify-between align-center">
            <NavLink to="/">
                <h2>J.P. King</h2>
            </NavLink>

            <nav className="row">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </footer>
    )
}