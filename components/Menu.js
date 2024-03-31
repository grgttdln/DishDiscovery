import React, { useEffect, useState, useRef } from "react";
import {
  Animated,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import getMealDish from "../services/dish";
import menuStyles from "../styles/MenuStyles";

const Menu = ({ route }) => {
  const { mealID } = route.params;
  const navigation = useNavigation();

  const scrollA = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("window");

  const [dish, setDish] = useState(null);
  const [imageHeight, setImageHeight] = useState(200);

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

  useEffect(() => {
    if (dish && dish.strMealThumb) {
      Image.getSize(
        dish.strMealThumb,
        (imgWidth, imgHeight) => {
          const aspectRatio = imgWidth / imgHeight;
          setImageHeight(width / aspectRatio);
        },
        (error) => {
          console.error("Failed to get size for image", error);
        }
      );
    }
  }, [dish, width]);

  if (!dish) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  return (
    <View style={menuStyles.handler}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={menuStyles.container}>
          <Animated.Image
            source={{ uri: dish.strMealThumb }}
            style={[styles.image(scrollA, imageHeight), { width }]}
          />
          <TouchableOpacity style={menuStyles.circle} onPress={handleBack}>
            <View>
              <Text style={menuStyles.back}>←</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Information */}
        <View style={menuStyles.infoContainer}>
          {/* Title */}
          <Text style={menuStyles.title}>{dish.strMeal}</Text>

          {/* Ingredients */}
          <View style={menuStyles.detailsContainer}>
            <Text style={menuStyles.ingredientTitle}>🧺 Ingredients</Text>
            <View>{getIngredientsList(dish)}</View>
          </View>

          {/* Instructions */}
          <View style={menuStyles.detailsContainer}>
            <Text style={menuStyles.instructionsTitle}>📖 Instructions</Text>
            <Text style={menuStyles.insText}>
              {dish.strInstructions
                .replace(/\n\n/g, "\n")
                .replace(/\n/g, "\n\n")}
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
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
        <View style={menuStyles.ingContainer} key={i}>
          <View style={menuStyles.ingSubContainer}>
            <Text style={menuStyles.ingIcon}>⬜️</Text>
            <Text>{`${ingredient}`}</Text>
          </View>
          <Text>{`${measure}`}</Text>
        </View>
      );
    }
  }
  return ingredientsList;
};

const styles = StyleSheet.create({
  image: (scrollA, imageHeight) => ({
    width: "100%",
    height: imageHeight,
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-300, 0, 300],
          outputRange: [0, 0, 150],
          extrapolate: "clamp",
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-300, 0, 300],
          outputRange: [1, 1, 1.5],
          extrapolate: "clamp",
        }),
      },
    ],
  }),
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Menu;
