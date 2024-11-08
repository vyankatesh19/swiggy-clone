// Function to fetch details based on a request and update the loading state
export const getDetails = async (request, setIsLoading) => {
  // Set loading to true before making the API call
  setIsLoading(true);
  try {
    // Send a GET request to the specified endpoint

    const response = await fetch(`${hostname}${request}`);
    const data = await response.json();
    setIsLoading(false);
    // Return the data, or an empty array if data is null/undefined

    return data || [];
  } catch (error) {
    console.error("Error fetching", error);
  }
};

// Base URL for the API endpoint
const hostname = "https://www.themealdb.com/api/json/v1/1/";
