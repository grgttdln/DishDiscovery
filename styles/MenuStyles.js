import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  handler: {
    backgroundColor: "#f7f7ff",
    flex: 1,
  },

  container: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  imgStyle: {
    height: 350,
    width: 350,
    borderRadius: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
  },

  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
});

export default menuStyles;
