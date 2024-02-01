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
                    <img src="html5_logo_url" alt="HTML5 Logo"></img>
                    <svg className="skill-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"/><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"/><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"/><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"/><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"/></svg>
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