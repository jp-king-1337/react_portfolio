import Project from "../components/Project";
import { projectData } from "../components/ProjectData";

export default function Portfolio() {
    return (
        <>
            <div className="app-container">
                <h2 className="text-center">Crafted With Passion: A Collection of My Work</h2>
                <div className="project-list">
                    {projectData.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            imageSource={project.imageSource}
                            description={project.description}
                            deployedLink={project.deployedLink}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}