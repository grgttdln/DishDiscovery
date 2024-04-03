import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import getSearchedMeal from "../services/mealSearch";
import { useGlobalState } from "./GlobalStateProvider";
import mealsSStyles from "../styles/SearchMealStyles";

const SearchMeals = () => {
  const { meal, setMeal } = useGlobalState();

  const [resultMeals, setResultMeals] = useState([]);

  const fetchSearchedMeals = async (mealToSearch) => {
    try {
      const getMeals = await getSearchedMeal(meal);
      setResultMeals(getMeals);
    } catch {}
  };

  useEffect(() => {
    fetchSearchedMeals();
  }, [meal]);

  const renderMealItem = ({ item }) => (
    <View style={mealsSStyles.container}>
      <View style={mealsSStyles.imgContainer}>
        <Image
          source={{ uri: item.strMealThumb }}
          style={mealsSStyles.imgItem}
        />
      </View>
      <Text style={mealsSStyles.meal}>{item.strMeal}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={resultMeals}
        renderItem={renderMealItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  searchTerm: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  mealItem: {
    marginBottom: 16,
  },
  mealName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mealCategory: {
    fontSize: 14,
    color: "#888",
  },
});

export default SearchMeals;
