import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import getMealsFromCategories from "../services/meals";
import mealsStyles from "../styles/MealsStyles";

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
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ idMeal }) => idMeal.toString()}
      renderItem={({ item }) => (
        <View style={mealsStyles.container}>
          <Image
            source={{ uri: item.strMealThumb }}
            style={mealsStyles.imgItem}
          />
          <Text style={mealsStyles.meal}>{item.strMeal}</Text>
        </View>
      )}
    />
  );
};

export default Meals;
