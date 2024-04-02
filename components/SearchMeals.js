import React, { useEffect, useState, useRef } from "react";
import { Text, View } from "react-native";
import getSearchedMeal from "../services/mealSearch";
import { useGlobalState } from "./GlobalStateProvider";

const SearchMeals = () => {
  const { meal, setMeal } = useGlobalState();
  return (
    <View>
      <Text>{meal}</Text>
      <Text>yoo</Text>
    </View>
  );
};

export default SearchMeals;
