import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import getMealDish from "../services/dish";
import menuStyles from "../styles/MenuStyles";

const Menu = ({ route }) => {
  const { mealID } = route.params;
  const navigation = useNavigation();

  const [dish, setDish] = useState([]);

  const handleBack = () => {
    navigation.goBack();
  };

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
    <View style={menuStyles.handler}>
      {/* Image */}
      <View style={menuStyles.container}>
        <Image
          source={{ uri: dish.strMealThumb }}
          style={menuStyles.imgStyle}
        />

        {/* Back Button */}
        <TouchableOpacity style={menuStyles.circle} onPress={handleBack}>
          <View>
            <Text style={menuStyles.back}>←</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Contents */}
      <ScrollView>
        <View style={menuStyles.infoContainer}>
          <Text style={menuStyles.title}>{dish.strMeal}</Text>
          <View>{getIngredientsList(dish)}</View>
          <Text>{dish.strInstructions}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const getIngredientsList = (mealDetails) => {
  const ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetails[`strIngredient${i}`];
    const measure = mealDetails[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientsList.push(
        <Text key={i}>{`${i}.) ${measure} ${ingredient}`}</Text>
      );
    }
  }
  return ingredientsList;
};

export default Menu;
