import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  handler: {
    backgroundColor: "#f7f7ff",
    flex: 1,
  },

  container: {},

  imgStyle: {
    height: 380,
    width: 400,
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

  ingredientTitle: {},

  instructionsTitle: {},

  back: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
  },

  circle: {
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 25,
    backgroundColor: "#f7f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginLeft: 20,
  },
});

export default menuStyles;
