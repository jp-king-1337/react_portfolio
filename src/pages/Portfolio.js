import Project from "../components/Project";
import { projectData } from "../components/ProjectData";

export default function Portfolio() {
    return (
        <>
            <div className="app-container">
                <h1 className="text-center">This is a portfolio page.</h1>
                <div className="project-list">
                    {projectData.map(project => {
                        <Project
                            title={project.title}
                            imageSource = { project.imageSource }
                            deployedLink = { project.deployedLink }
                            githubLink = { project.githubLink }
                            />
                    })}
                </div>
            </div>
        </>
    )
}