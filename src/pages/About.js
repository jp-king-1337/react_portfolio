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
                        <img className="skill-logo" src="/assets/images/logos/html5.svg" alt="HTML5 icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/css3.svg" alt="CSS3 icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/express.svg" alt="Express icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/git.svg" alt="Git icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/github.svg" alt="GitHub icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/javascript.svg" alt="JavaScript icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/mongodb-plain.svg" alt="MongoDB icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/react.svg" alt="React icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/sequelize.svg" alt="Sequelize icon"></img>
                        <img className="skill-logo" src="/assets/images/logos/vscode.svg" alt="VSCode icon"></img>
                    </div>
                </div>

            </div>
        </>
    );
}