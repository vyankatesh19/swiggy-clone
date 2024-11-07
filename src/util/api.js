export const getDetails = async (request) => {
    try {
        const response = await fetch(`${hostname}${request}`);
        const data = await response.json();
        return data || [];
    } catch (error) {
        console.error("Error fetching", error);
    }
};

const hostname = "https://www.themealdb.com/api/json/v1/1/";