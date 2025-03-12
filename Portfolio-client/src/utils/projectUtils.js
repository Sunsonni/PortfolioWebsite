const project = [
    {
        title: 'Green Routine',
        description: 'Challenge that promotes environmental inititives by telling the user their environmental impact',
        link: 'https://github.com/TheGitGang/GreenRoutine',
        id: 2
    },
    {
        title: 'Currency Converter',
        description: 'Converts values from base of USD to other currencies from API',
        link: 'https://github.com/Smidge101/Currency_counter',
        id: 3,
    }
]

export const getProjects = () => {
    return project;
};

export const getProjectById = (id) => {
    return project.find((project) => project.id === id);
}