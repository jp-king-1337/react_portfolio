export default function Project({ title, imageSource, description, deployedLink, githubLink }) {
    return (
        <div className="project-card">
            <h2 className="project-title">{title}</h2>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                <img className="project-image" src={imageSource} alt={title} />
            </a>
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a className="deployed-link" href={deployedLink} target="_blank" rel="noopener noreferrer">View Site</a>
                <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
        </div>
    );
}