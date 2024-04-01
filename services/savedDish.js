const getSavedDish = async (mealID) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await response.json();
    return json.meals;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getSavedDish;
