import Blog from "./Card.js";
import { useEffect, useState } from "react";
import APIService from '../services/service.js'
import type project from "../interfaces/project.js";

const Projects = () => {
    const [ projects, setProjects ] = useState([]);
    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await APIService.fetchProjects();
                setProjects(data.data);
            } catch (error) {
                console.error("Error fetching projects", error);
            }
        };
        fetchData();
    }, [])
    return (
        <div className="blog">
            {projects.map((project: project) => {
                return (
                    <Blog 
                    key={project.id} 
                    project={project}
                    />

                )
            })
        }
        </div>
    );
}
export default Projects;


