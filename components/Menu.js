import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import getMealDish from "../services/dish";

const Menu = ({ route }) => {
  const { mealID } = route.params;

  const [dish, setDish] = useState([]);

  const fetchDish = async () => {
    try {
      const getDish = await getMealDish(mealID);
      setDish(getDish[0]);
    } catch {}
  };

  useEffect(() => {
    fetchDish();
  }, [mealID]);

  return (
    <SafeAreaView style={styles.handler}>
      <Text>{dish.strMeal}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  handler: {
    backgroundColor: "#f7f7ff",
    flex: 1,
  },
});

export default Menu;
