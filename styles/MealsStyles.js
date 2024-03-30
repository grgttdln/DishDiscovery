import { StyleSheet } from "react-native";

const mealsStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    paddingBottom: 10,
    shadowColor: "slategray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  imgItem: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  meal: {
    width: 100,
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: 15,
  },
});

export default mealsStyles;
