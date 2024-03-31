import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Page from "./components/Page";
import Menu from "./components/Menu";
import Bookmark from "./components/Bookmark";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page"
          component={Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bookmark"
          component={Bookmark}
          options={{
            headerShown: false,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
