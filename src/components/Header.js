import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header className="row justify-between align-center">
            <NavLink to="/">
                <h2>J.P. King</h2>
            </NavLink>

            <nav className="row">
                <NavLink to="/">About Me</NavLink>
                {/* <NavLink to="/about">About Me</NavLink> */}
                <NavLink to="/contact">Contact Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    )
}