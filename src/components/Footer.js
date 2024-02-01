export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const startYear = 2023;

    return (
        <footer className="row justify-between align-center">
            <ul className="row justify-between align-center footer-links">
                <li>
                    <a href="mailto:jp.king.1337@gmail.com" className="contact_links">
                        <img src="/assets/images/logos/envelope.svg" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jp-king-1337" target="_blank" className="contact_links" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jpking1337/" target="_blank" className="contact_links" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/22401476/jp-king-1337" target="_blank" className="contact_links" rel="noopener noreferrer">
                        <img src="/assets/images/logos/stack-overflow.svg" />
                    </a>
                </li>
            </ul>
            <p className="footer-copyright">&copy; {startYear} {currentYear > startYear ? `- ${currentYear}` : ""} Developed and Designed by J.P. King</p>
        </footer>
    );
}
