export async function handler() {
   try {
      const API_KEY = process.env.STRAPI_API_KEY;// eslint-disable-line
      const BASE_URL = process.env.STRAPI_AUTH_DOMAIN; // eslint-disable-line
      
      if (!API_KEY || !BASE_URL) {
         throw new Error("API_KEY or BASE_URL is not defined in environment variables");
      }
      
      const response = await fetch(`${BASE_URL}/api/projects`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
      });

      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cmsData = await response.json();

      console.log("getData", cmsData);
      
      return {
         statusCode: 200,
         headers: { "Content-Type": "application/json" },
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