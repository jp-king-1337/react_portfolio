export default function About() {
    return (
        <>
            <div className="app-container">
                <div className="about-content">
                    <div className="left-section">
                        <div className="headshot-wrapper">
                            <img id="headshot" src="/assets/images/headshot.JPG" alt="J.P. King standing in front of a waterfall" />
                        </div>
                    </div>

                    <div className="right-section">
                        <h1 id="welcome" className="text-center">Welcome!</h1>

                        <div className="about-paragraphs">
                            <p className="about-paragraph">
                                I'm J.P. King, a Web Developer from Pennsylvania with a diverse background in German studies and the restaurant industry. My journey in tech is fueled by an unwavering work ethic and a thirst for continuous learning. I am eager to contribute my skills and enthusiasm to the dynamic world of web development. Let's build something amazing together!
                            </p>
                        </div>

                        <div className="row">
                            <div className="social-icons">
                                <a href="https://github.com/jp-king-1337" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Icon" />
                                </a>

                                <a href="https://www.linkedin.com/in/jpking1337/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn Icon" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-center">Skills</h1>
                    <div className="skills-container">
                        {/* Logos sourced from devicon.dev */}
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5 Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3 Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VSCode Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDB Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" alt="Sequelize Logo" />
                        <img className="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js Logo" />
                    </div>
                </div>

            </div>
        </>
    );
}