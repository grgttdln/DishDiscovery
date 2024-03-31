import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bookmarkStyles from "../styles/BookmarkStyles";

const Bookmark = ({ route }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={bookmarkStyles.container}>
      <Text style={bookmarkStyles.title}>Bookmark</Text>

      <TouchableOpacity onPress={handleBack}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Bookmark;
