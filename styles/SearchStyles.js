import { StyleSheet } from "react-native";

const search = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    width: 280,
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
    justifyContent: "space-between",
  },

  circle: {
    width: 43,
    height: 43,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -35,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchIconContainer: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: -10,
  },
});

export default search;
