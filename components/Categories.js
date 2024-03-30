import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import getRecipesFromApi from "../services/recipe.js";
import categories from "../styles/CategoryStyles.js";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <Text style={categories.categoriesTxt}>Categories</Text>
      <FlatList
        data={data}
        horizontal
        style={categories.container}
        keyExtractor={({ idCategory }) => idCategory.toString()}
        renderItem={({ item }) => (
          <View style={categories.item}>
            <Text>{item.strCategory}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;
