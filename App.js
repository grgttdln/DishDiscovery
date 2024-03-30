import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Categories from "./components/Categories";
import Search from "./components/Search";

export default function App() {
  return (
    <SafeAreaView style={styles.handler}>
      <View style={styles.container}>
        <Search />
        <Categories />
      </View>
    </SafeAreaView>
  );
}

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
