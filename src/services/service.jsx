const APIService = {
    fetchArticles: async () => {
        try {
            const response = await fetch("/.netlify/functions/getData");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
    
            console.log(response.json);
            return response;
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    },
    fetchProjects: async () => {
        try {
            const response = await fetch("/.netlify/functions/getProjects");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
    
            const data = response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }
}

export default APIService;



