import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import search from "../styles/SearchStyles";

const Search = () => {
  return (
    <View>
      <Text style={search.title}>What would you like to cook today?</Text>
      <TextInput style={search.container} placeholder="Search for Recipes" />
    </View>
  );
};

export default Search;
