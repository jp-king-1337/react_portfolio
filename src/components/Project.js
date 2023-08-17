export default function Project({ title, imageSource, description, deployedLink, githubLink }) {
    return (
        <div className="project-card">
            <h2 className="project-title">{title}</h2>
            <img className="project-image" src={imageSource} alt={title} />
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
        </div>
    );
}