export default function About() {
    return (
        <>
            <div className="app-container">
                <h2 className="text-center">Welcome!</h2>

                <div className="about-content">
                    <div className="about-paragraphs">
                        <p className="about-paragraph">
                            I'm J.P. King, a Web Developer from Pennsylvania with a diverse background in German studies and the restaurant industry. My journey in tech is fueled by an unwavering work ethic and a thirst for continuous learning. I am eager to contribute my skills and enthusiasm to the dynamic world of web development. Let's build something amazing together!
                        </p>
                    </div>
                    <div className="headshot-wrapper">
                        <img id="headshot" src="/assets/images/headshot.JPG" alt="J.P. King standing in front of a waterfall" />
                    </div>
                </div>

                <div className="skills-container">
                    <h2>Skills</h2>
                    {/* Logos sourced from https://github.com/devicons/devicon/tree/v2.15.1 */}
                    <img class="skill-logo" src="/assets/images/logos/html5.svg" alt="HTML5 icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/css3.svg" alt="CSS3 icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/express.svg" alt="Express icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/git.svg" alt="Git icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/github.svg" alt="GitHub icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/javascript.svg" alt="JavaScript icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/mongodb-plain.svg" alt="MongoDB icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/react.svg" alt="React icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/sequelize.svg" alt="Sequelize icon"></img>
                    <img class="skill-logo" src="/assets/images/logos/vscode.svg" alt="VSCode icon"></img>



                </div>
            </div>
        </>
    );
}