import { useParams } from 'react-router-dom'
import { getProjectById } from '../utils/projectUtils';

export const Post = () => {
    const { id } = useParams();
    console.log(id);
    const project = getProjectById(id);
    console.log(project);

    return (
        <>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
        </>
    );
}