import { StyleSheet } from "react-native";

const mealsSStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 12,
    paddingBottom: 10,
  },

  imgItem: {
    width: 150,
    height: 150,
    borderRadius: 16,
  },

  imgContainer: {
    shadowColor: "slategray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
  },

  meal: {
    width: 100,
    flexWrap: "wrap",
    fontSize: 14,
    fontWeight: "700",
    // textAlign: "center",
    paddingTop: 15,
  },
});

export default mealsSStyles;
