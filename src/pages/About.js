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
                    <i className="devicons devicons-html5">test</i>
                    <span class="devicons devicons-html5"></span>
                    <img src="html5_logo_url" alt="HTML5 Logo"></img>
                    <img src="css3_logo_url" alt="CSS3 Logo"></img>
                    <img src="javascript_es6_logo_url" alt="JavaScript ES6 Logo"></img>
                    <img src="react_logo_url" alt="React Logo"></img>
                    <img src="express_logo_url" alt="Express Logo"></img>
                    <img src="rest_api_logo_url" alt="REST API Logo"></img>
                    <img src="mongodb_logo_url" alt="MongoDB Logo"></img>
                    <img src="authentication_logo_url" alt="Authentication Logo"></img>
                    <img src="github_logo_url" alt="GitHub Logo"></img>
                    <img src="git_logo_url" alt="Git Logo"></img>
                    <img src="terminal_logo_url" alt="Terminal Logo"></img>
                </div>
            </div>
        </>
    );
}