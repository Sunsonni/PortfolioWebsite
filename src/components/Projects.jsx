import Blog from "./Card";
import { getProjects } from "../utils/projectUtils";
import { fetchArticles } from "../services/service";
const Projects = () => {
    const projects = getProjects();
    const test = async () => {
        const response = await fetchArticles();
        console.log(response);
    }
    return (
        <div className="blog">
            {projects.map((project, index) => {
                return <Blog key={project.id || index } project={project} />
            })
        }
        <button onClick={test}></button>  
        </div>
    );
}
export default Projects;


