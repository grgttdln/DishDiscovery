const getMealDish = async (mealID) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    );

    const json = await response.json();
    return json.meals;
  } catch (error) {}
};

export default getMealDish;
