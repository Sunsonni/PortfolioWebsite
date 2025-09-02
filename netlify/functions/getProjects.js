export async function handler() {
   try {
      const API_KEY = process.env.VITE_STRAPI_API_KEY;// eslint-disable-line
      const BASE_URL = process.env.VITE_STRAPI_AUTH_DOMAIN; // eslint-disable-line
      const response = await fetch(`${BASE_URL}/api/projects`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
      });
      const cmsData = await response.json();
      console.log("getData", cmsData);
      return {
         statusCode: 200,
         body: JSON.stringify(cmsData)
      };
   } catch (error) {
      console.error("Error fetching data", error);
      return {
         statusCode: 500,
         body: JSON.stringify({ error: "Error getting values" })
      };
   }
}