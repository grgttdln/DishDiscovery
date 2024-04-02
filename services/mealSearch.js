const getSearchedMeal = async (mealSearch) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`
    );

    const json = await response.json();
    return json.meals;
  } catch (error) {}
};

export default getSearchedMeal;
