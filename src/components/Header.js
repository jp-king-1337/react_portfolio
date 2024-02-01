import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="row justify-between align-center">
            <NavLink id="nameLink" to="/">
                <h2>J.P. King</h2>
            </NavLink>

            {/* Hamburger */}
            <button className="hamburger" onClick={toggleNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            {/* Navigation */}
            <Navigation isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </header>
    );
}