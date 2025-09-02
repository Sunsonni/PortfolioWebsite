export default async function fetchArticles() {
    try {
        const response = await fetch("/.netlify/functions/getData");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}