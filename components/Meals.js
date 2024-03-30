import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import getMealsFromCategories from "../services/meals";

const Meals = (props) => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    try {
      const getMeals = await getMealsFromCategories(props.SelectedMealCategory);
      setMeals(getMeals);
    } catch {}
  };

  useEffect(() => {
    fetchMeals();
  }, [props.SelectedMealCategory]);

  return (
    <FlatList
      data={meals}
      keyExtractor={({ idMeal }) => idMeal.toString()}
      renderItem={({ item }) => (
        <View style={{ marginTop: 15, paddingVertical: 30 }}>
          <Text>{item.strMeal}</Text>
        </View>
      )}
    />
  );
};

export default Meals;
