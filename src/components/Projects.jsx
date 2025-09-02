import Blog from "./Card";
import { useEffect, useState } from "react";
import APIService from '../services/service'

const Projects = () => {
    const [ projects, setProjects ] = useState({});
    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await APIService.fetchProjects();
                setProjects(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching projects", error);
            }
        };
        fetchData();
    }, [])
    return (
        <div className="blog">
            {/* {projects.map((project, index) => {
                return <Blog key={project.id || index } project={project} />
            })
        } */}
        <pre>{JSON.stringify(projects)}</pre>
        </div>
    );
}
export default Projects;


