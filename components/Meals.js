import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import getMealsFromCategories from "../services/meals";
import mealsStyles from "../styles/MealsStyles";
import { useNavigation } from "@react-navigation/native";

const Meals = (props) => {
  const navigation = useNavigation();

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
        <TouchableOpacity
          style={mealsStyles.container}
          onPress={() =>
            navigation.navigate("Menu", {
              mealID: item.idMeal,
            })
          }
        >
          <Image
            source={{ uri: item.strMealThumb }}
            style={mealsStyles.imgItem}
          />
          <Text style={mealsStyles.meal}>{item.strMeal}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Meals;
