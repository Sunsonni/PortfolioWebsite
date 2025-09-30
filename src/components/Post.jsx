import { useParams } from 'react-router-dom'
import { getProjectById } from '../utils/projectUtils';
// import { useEffect } from 'react';
// import APIService from '../services/service';

export const Post = () => {
    const { id } = useParams();
    console.log(id);
    // useEffect(()=> {
    //   try {
    //     const article = await APIService.fetchArticles();
    //   } catch (error) {
        
    //   }
    // }, [])
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