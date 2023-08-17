export default function Project({ title, imageSource, deployedLink, githubLink }) {
    return (
        <div className="project">
            <h2>{title}</h2>
            <img src={imageSource} alt={title} />
            <div className="links">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}