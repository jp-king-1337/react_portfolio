import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {

    return (
        <header className="row justify-between align-center">
            <NavLink to="/">
                <h2>J.P. King</h2>
            </NavLink>

            <Navigation />
        </header>
    )
}