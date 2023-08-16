import { NavLink } from "react-router-dom";


export default function Header(props) {

    return (
        <header>
            <h3>J.P. King</h3>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    )
}