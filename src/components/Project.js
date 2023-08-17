export default function Project({ title, imageSource, deployedLink, githubLink }) {
    return (
        <div className="project">
            <h2 className="projectTitle">{title}</h2>
            <img className="projectImage" src={imageSource} alt={title} />
            <div className="projectLinks">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}