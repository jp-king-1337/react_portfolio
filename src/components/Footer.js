import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="row justify-between align-center">
            <ul className="row">
                <li>
                    <a href="mailto:jp.king.1337@gmail.com" className="contact_links">Email</a>
                </li>
                <li>
                    <a href="https://github.com/jp-king-1337" target="_blank" className="contact_links" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jpking1337/" target="_blank" className="contact_links" rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
        </footer>
    );
}
