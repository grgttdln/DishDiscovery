import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";
import search from "../styles/SearchStyles";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={search.subContainer}>
        <Text style={search.title}>What would you like to cook today?</Text>
        <TouchableOpacity
          style={search.circle}
          onPress={() => navigation.navigate("Bookmark", {})}
        >
          <FontAwesomeIcon icon={faBookmark} size={20} />
        </TouchableOpacity>
      </View>
      <TextInput style={search.container} placeholder="Search for Recipes" />
    </View>
  );
};

export default Search;
