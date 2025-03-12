const projects = [
    {
        title: 'Green Routine',
        description: 'Challenge that promotes environmental inititives by telling the user their environmental impact',
        link: 'https://github.com/TheGitGang/GreenRoutine',
        id: 0
    },
    {
        title: 'Currency Converter',
        description: 'Converts values from base of USD to other currencies from API',
        link: 'https://github.com/Smidge101/Currency_counter',
        id: 1,
    }
]

export const getProjects = () => {
    return projects;
};

export const getProjectById = (id) => {

    return projects.find((project) => project.id === Number(id));
}