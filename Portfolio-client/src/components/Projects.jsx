import Blog from "./Card";

const Projects = () => {
    const project = 
        {
            title: 'Currency Converter',
            description: 'Converts values from base of USD to other currencies from API',
            link: 'https://github.com/Smidge101/Currency_counter',
            id: 0
        };
    return (
        <>
        <Blog project={project} />
        </>
    );
}
export default Projects;