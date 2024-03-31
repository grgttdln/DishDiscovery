import { StyleSheet } from "react-native";

const search = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 5,
    marginRight: 60,
  },

  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  circle: {
    width: 43,
    height: 43,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default search;
