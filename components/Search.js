import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";
import { faFolder } from "@fortawesome/free-regular-svg-icons/faFolder";
import search from "../styles/SearchStyles";
import { useNavigation } from "@react-navigation/native";
import { useGlobalState } from "./GlobalStateProvider";

const Search = () => {
  const navigation = useNavigation();

  const { showComponent, setShowComponent, setMeal } = useGlobalState();

  const [searchMeal, setSearchMeal] = useState("");

  return (
    <View>
      {/* Top Menus */}
      <View style={search.subContainer}>
        <Text style={search.title}>What would you like to cook today?</Text>
        <TouchableOpacity
          style={search.circle}
          onPress={() => navigation.navigate("Bookmark", {})}
        >
          <FontAwesomeIcon icon={faBookmark} size={20} />
        </TouchableOpacity>
      </View>

      {/* Search Container */}
      <View style={search.subContainer}>
        {/* Search Input */}
        <TextInput
          onChangeText={(text) => {
            setSearchMeal(text);
            console.log(searchMeal);
          }}
          value={searchMeal}
          style={search.container}
          placeholder="Search for Recipes"
        />

        {/* Search Button */}
        <TouchableOpacity
          onPress={() => {
            setShowComponent(false);
            setMeal(searchMeal);
          }}
          style={search.searchIconContainer}
        >
          <FontAwesomeIcon icon={faFolder} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
