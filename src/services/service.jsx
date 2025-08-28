const API_BASE_URL = import.meta.env.VITE_STRAPI_AUTH_DOMAIN;
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

export const fetchArticles = async () => {
    console.log(API_BASE_URL);
    try {
        const response = await fetch(`${API_BASE_URL}/api/articles`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
}