import Blog from "./Card";
import { getProjects } from "../utils/projectUtils";
const Projects = () => {
    const project = getProjects();
    console.log(project);

    return (
        <>
            {project.map((project) => {
                <Blog key={project.id} project={project} />
            })
        }  
        </>
    );
}
export default Projects;


