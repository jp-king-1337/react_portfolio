export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const startYear = 2023;

    return (
        <footer className="row justify-between align-center">
            <ul className="row justify-between align-center footer-links">
                <li>
                    <a href="mailto:jp.king.1337@gmail.com" className="contact_links">Email</a>
                </li>
                <li>
                    <a href="https://github.com/jp-king-1337" target="_blank" className="contact_links" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jpking1337/" target="_blank" className="contact_links" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/22401476/jp-king-1337" target="_blank" className="contact_links" rel="noopener noreferrer">Stack Overflow</a>
                </li>
            </ul>
            <p className="footer-copyright">&copy; {startYear} {currentYear > startYear ? `- ${currentYear}` : ""} Developed and Designed by J.P. King</p>
        </footer>
    );
}
