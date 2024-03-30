import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import Categories from "./Categories";
import Search from "./Search";
import search from "../styles/SearchStyles";

const Page = () => {
  return (
    <SafeAreaView style={styles.handler}>
      <View style={styles.container}>
        <Search />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  handler: {
    backgroundColor: "#f7f7ff",
    flex: 1,
  },

  container: {
    backgroundColor: "#f7f7ff",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
  },
});

export default Page;
