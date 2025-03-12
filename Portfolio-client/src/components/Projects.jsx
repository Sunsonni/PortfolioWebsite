import Blog from "./Card";
import { getProjects } from "../utils/projectUtils";
const Projects = () => {
    const projects = getProjects();
    console.log(projects);

    return (
        <>
            {projects.map((project, index) => {
                return <Blog key={project.id || index } project={project} />
            })
        }  
        </>
    );
}
export default Projects;


