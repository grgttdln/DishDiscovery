const getRecipesFromApi = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await response.json();
    return json.categories;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getRecipesFromApi;
