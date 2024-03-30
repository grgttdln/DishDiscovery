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
      <TextInput style={search.container} placeholder="Search for Recipes" />
    </View>
  );
};

export default Search;
