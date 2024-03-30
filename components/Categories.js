import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import getRecipesFromApi from "../services/recipe.js";
import categories from "../styles/CategoryStyles.js";
import Meals from "./Meals.js";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = async () => {
    try {
      const recipes = await getRecipesFromApi();
      setData(recipes);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      {/* Categories Title */}
      <Text style={categories.categoriesTxt}>Categories</Text>

      {/* Categories Item */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={categories.container}
        keyExtractor={({ idCategory }) => idCategory.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={categories.item}
            onPress={() => setSelectedCategory(item.strCategory)}
          >
            <View>
              <Text>{item.strCategory}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Meals */}
      <Meals SelectedMealCategory={selectedCategory} />
    </View>
  );
};

export default Categories;
