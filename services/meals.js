const getMealsFromCategories = async (category) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    const json = await response.json();
    return json.meals;
  } catch (error) {}
};

export default getMealsFromCategories;
