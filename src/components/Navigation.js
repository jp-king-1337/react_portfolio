import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <nav className="row">
                <NavLink to="/">About Me</NavLink>
                {/* <NavLink to="/about">About Me</NavLink> */}
                <NavLink to="/contact">Contact Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </>
    )
}