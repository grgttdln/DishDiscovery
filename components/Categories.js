import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import getRecipesFromApi from "../services/recipe.js";
import categories from "../styles/CategoryStyles.js";
import Meals from "./Meals.js";
import SearchMeals from "./SearchMeals.js";
import { useGlobalState } from "./GlobalStateProvider";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");

  const { showComponent, setShowComponent } = useGlobalState();
  // const [showComponent, setShowComponent] = useState(true);

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
            <TouchableOpacity onPress={() => setShowComponent(true)}>
              <View>
                <Text>{item.strCategory}</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* Conditional Rendering */}
      {showComponent ? (
        /* Meals in Category */
        <ScrollView showsVerticalScrollIndicator={false}>
          <Meals SelectedMealCategory={selectedCategory} style={{ flex: 1 }} />
        </ScrollView>
      ) : (
        /* Meals in Search */
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchMeals />
        </ScrollView>
      )}
    </View>
  );
};

export default Categories;
