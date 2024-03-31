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
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 25,
  },

  infoContainer: {
    paddingHorizontal: 35,
    marginTop: -40,
    borderRadius: 40,
    paddingVertical: 40,
    backgroundColor: "#f7f7ff",
  },

  detailsContainer: {
    marginBottom: 25,
  },

  ingContainer: {
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 14,
  },

  ingSubContainer: {
    flexDirection: "row",
  },

  ingIcon: {
    marginRight: 10,
  },

  ingredientTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  instructionsTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  insText: {
    textAlign: "justify",
  },

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

  circleBookmark: {
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 25,
    backgroundColor: "#f7f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    right: 20,
  },
});

export default menuStyles;
